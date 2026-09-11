'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface CrossfadeTextProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export default function CrossfadeText({ children, delay = 0, className = '' }: CrossfadeTextProps) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, filter: 'blur(4px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, filter: 'blur(4px)' }}
                transition={{
                    duration: 1,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
