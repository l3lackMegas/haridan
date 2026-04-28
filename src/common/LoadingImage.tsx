import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingIcon from './LoadingIcon';

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

/**
 * Hook that returns true once the image at `src` has finished loading
 * (or failed). Useful when the image is shown as a CSS background instead
 * of an <img> element.
 */
export function useImageLoaded(src?: string): boolean {
    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        if (!src) {
            setLoaded(true);
            return;
        }
        setLoaded(false);
        let cancelled = false;
        const img = new Image();
        const done = () => { if (!cancelled) setLoaded(true); };
        img.onload = done;
        img.onerror = done;
        img.src = src;
        // If cached, complete may already be true
        if (img.complete && img.naturalWidth > 0) done();
        return () => { cancelled = true; };
    }, [src]);

    return loaded;
}

interface LoadingOverlayProps {
    spinnerSize?: number;
    show: boolean;
    style?: React.CSSProperties;
}

/** Centered spinner overlay used by both <LoadingImage> and external consumers. */
export function LoadingOverlay({ spinnerSize = 32, show, style }: LoadingOverlayProps) {
    return (
        <AnimatePresence>
            {show && (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                        ...style,
                    }}
                >
                    <LoadingIcon size={spinnerSize} />
                </motion.span>
            )}
        </AnimatePresence>
    );
}

interface LoadingImageProps extends ImgProps {
    /** Spinner size (px). Defaults to 32. */
    spinnerSize?: number;
    /** Background color shown behind the image while loading. */
    placeholderColor?: string;
    /** Optional className for the wrapper element. */
    wrapperClassName?: string;
    /** Optional inline style for the wrapper element. */
    wrapperStyle?: React.CSSProperties;
}

/**
 * Drop-in replacement for <img> that shows a centered spinner overlay
 * until the image finishes loading (or errors).
 */
export default function LoadingImage({
    spinnerSize = 32,
    placeholderColor,
    wrapperClassName,
    wrapperStyle,
    onLoad,
    onError,
    style,
    ...imgProps
}: LoadingImageProps) {
    const imgRef = React.useRef<HTMLImageElement | null>(null);
    const [loaded, setLoaded] = React.useState(false);

    // If the image is already cached, the onLoad event may not fire after mount.
    React.useEffect(() => {
        const el = imgRef.current;
        if (el && el.complete && el.naturalWidth > 0) {
            setLoaded(true);
        }
    }, [imgProps.src]);

    return (
        <span
            className={wrapperClassName}
            style={{
                position: 'relative',
                display: 'inline-block',
                lineHeight: 0,
                backgroundColor: placeholderColor,
                ...wrapperStyle,
            }}
        >
            <img
                {...imgProps}
                ref={imgRef}
                style={{
                    ...style,
                    opacity: loaded ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                }}
                onLoad={(e) => {
                    setLoaded(true);
                    onLoad?.(e);
                }}
                onError={(e) => {
                    setLoaded(true);
                    onError?.(e);
                }}
            />
            <AnimatePresence>
                {!loaded && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            pointerEvents: 'none',
                        }}
                    >
                        <LoadingIcon size={spinnerSize} />
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}
