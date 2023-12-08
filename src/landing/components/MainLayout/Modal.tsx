/* React Module */
import { Component, createRef, CSSProperties, ReactNode, useState} from 'react';
import ReactDOM from 'react-dom'

/* External Module */
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface IReciept {
    id?: number | string
    style?: CSSProperties
    isShow: boolean
    onClose: Function
    closeAnyWhere?: boolean
    isDisableScrollHandle?: boolean
    children: React.ReactNode
}

class Modal extends Component<IReciept> {

    constructor(props: any){
        super(props)
    }

    state = {
        isMounted: false
    }

    modalRoot: any = createRef()

    currModal: any = createRef()

    componentDidMount() {
        this.modalRoot.current = document.querySelector('#modal-root');
        this.setState({ isMounted: true })
        //let modalContainer = document.createElement('div');
    }

    componentDidUpdate() {
        if(this.props.isShow && this.props.isDisableScrollHandle)
            document.body.style.overflow = 'hidden'
    }

    render() {
        const { id, style, isShow, children, onClose, closeAnyWhere, isDisableScrollHandle } = this.props
        const { isMounted } = this.state
        // console.log(this.modalRoot.current)
        return isMounted ? ReactDOM.createPortal(<>
        <AnimatePresence mode="sync" onExitComplete={()=>{
            if(!isDisableScrollHandle) document.body.style.overflow = ''
        }}>
            { isShow &&
                <motion.div className="modal" ref={this.currModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: .25 }}
                    onClick={()=>closeAnyWhere ? onClose() : false }
                >
                    <motion.div className="sub"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: .25 }}
                    >
                        <div className="sub" onClick={()=>{onClose()}}></div>
                        <motion.div className="modalContainer" style={style}>
                            <motion.div className="sub" layoutId={`modalCard-${id}`}>
                                <h2 className="xButton" onClick={()=>{onClose()}}>X</h2>
                                { children }
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
        </>
        , this.modalRoot.current) : null;
    }
}

export default Modal;


interface ModalActive {
    layoutId?: number | string
    layoutUniqueId: number | string
    children?: ReactNode
    modalChildren?: ReactNode
    modalStyle?: CSSProperties
    isDelay?: boolean
    closeAnyWhere?: boolean
    isDisableScrollHandle?: boolean
    onClose?: Function
}
export function ModalActive({ layoutId, layoutUniqueId, children, modalChildren, modalStyle, isDelay, closeAnyWhere, isDisableScrollHandle, onClose }: ModalActive) {
    const [showModal, setShowModal] = useState(false);
    const [prepairing, setPrepairState] = useState(false);
    // console.log('layoutUniqueId', layoutUniqueId)
    return (
      <>
        <AnimatePresence key={`modalActive-${layoutUniqueId}`} mode="sync">
            <div className={ prepairing && isDelay ? 'brinessDown' : ''}
            onClick={() => {
                document.body.style.overflow = 'hidden'
                setPrepairState(true)
                setTimeout(()=>setShowModal(true), isDelay ? 750 : 0)
            }}>
                { children }
            </div>
            <Modal
                key={`modalActive-${layoutUniqueId}`}
                style={modalStyle}
                id={layoutId}
                onClose={() => {
                    setPrepairState(false)
                    setShowModal(false)
                    if(onClose) onClose()
                }}
                closeAnyWhere={closeAnyWhere}
                isDisableScrollHandle={isDisableScrollHandle}
                isShow={showModal}
            >
                { modalChildren }
            </Modal>
        </AnimatePresence>
      </>
    )
}