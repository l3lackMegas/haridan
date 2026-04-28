import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    id?: number | string;
    style?: CSSProperties;
    isShow: boolean;
    onClose: () => void;
    closeAnyWhere?: boolean;
    isDisableScrollHandle?: boolean;
    variant?: 'default' | 'image-preview';
    children: ReactNode;
}

function Modal({ id, style, isShow, children, onClose, closeAnyWhere, isDisableScrollHandle, variant }: ModalProps) {
    const [mounted, setMounted] = useState(false);
    const modalRoot = useRef<Element | null>(null);

    useEffect(() => {
        modalRoot.current = document.querySelector('#modal-root');
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isShow && !isDisableScrollHandle) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            if (isShow && !isDisableScrollHandle) document.body.style.overflow = '';
        };
    }, [isShow, isDisableScrollHandle]);

    if (!mounted || !modalRoot.current) return null;

    return ReactDOM.createPortal(
        <AnimatePresence
            mode="sync"
            onExitComplete={() => { if (!isDisableScrollHandle) document.body.style.overflow = ''; }}
        >
            {isShow && (
                <motion.div
                    key={`modal-${id}`}
                    className={`modal${variant === 'image-preview' ? ' image-preview' : ''}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => closeAnyWhere && onClose()}
                >
                    <motion.div
                        className="sub"
                        initial={{ y: 60, opacity: 0, scale: 0.96 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 60, opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modalContainer" style={style}>
                            <button className="xButton" onClick={onClose} aria-label="Close">
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        modalRoot.current
    );
}

export default Modal;

interface ModalActiveProps {
    layoutId?: number | string;
    layoutUniqueId: number | string;
    children?: ReactNode;
    modalChildren?: ReactNode;
    modalStyle?: CSSProperties;
    isDelay?: boolean;
    closeAnyWhere?: boolean;
    isDisableScrollHandle?: boolean;
    variant?: 'default' | 'image-preview';
    onClose?: () => void;
}

export function ModalActive({
    layoutId,
    layoutUniqueId,
    children,
    modalChildren,
    modalStyle,
    closeAnyWhere,
    isDisableScrollHandle,
    variant,
    onClose,
}: ModalActiveProps) {
    const [show, setShow] = useState(false);
    return (
        <>
            <div onClick={() => setShow(true)}>{children}</div>
            <Modal
                key={`modal-active-${layoutUniqueId}`}
                style={modalStyle}
                id={layoutId}
                isShow={show}
                closeAnyWhere={closeAnyWhere}
                isDisableScrollHandle={isDisableScrollHandle}
                variant={variant}
                onClose={() => { setShow(false); onClose?.(); }}
            >
                {modalChildren}
            </Modal>
        </>
    );
}
