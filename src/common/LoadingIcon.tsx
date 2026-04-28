import { motion } from 'framer-motion';

export default function LoadingIcon({ size = 56 }: { size?: number }) {
    return (
        <motion.div
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                position: 'relative',
            }}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '2px solid rgba(255,255,255,0.08)',
                }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '50%',
                    border: '2px solid transparent',
                    borderTopColor: '#5fd0ff',
                    borderRightColor: '#1ba3e4',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
                style={{
                    position: 'absolute',
                    inset: '32%',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg,#1ba3e4,#a07bff)',
                    filter: 'blur(2px)',
                }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.65, 1, 0.65] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            />
        </motion.div>
    );
}
