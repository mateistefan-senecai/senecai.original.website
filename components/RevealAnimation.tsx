'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useMemo, useRef, ReactNode } from 'react';

interface RevealAnimationProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
    className?: string;
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function RevealAnimation({
    children,
    delay = 0,
    direction = 'up',
    className = ''
}: RevealAnimationProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const variants = useMemo<Variants>(() => ({
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
            scale: direction === 'fade' ? 0.98 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay,
                ease: EASE,
            },
        },
    }), [direction, delay]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
