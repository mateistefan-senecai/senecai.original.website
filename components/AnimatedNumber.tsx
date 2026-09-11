'use client';

import { useEffect, useRef } from 'react';

interface AnimatedNumberProps {
    value: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export default function AnimatedNumber({
    value,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimals = 0
}: AnimatedNumberProps) {
    const elementRef = useRef<HTMLSpanElement>(null);
    const startedRef = useRef(false);
    const rafIdRef = useRef<number | null>(null);

    useEffect(() => {
        const el = elementRef.current;
        if (!el) return;

        // Initial render text
        el.textContent = `${prefix}${(0).toFixed(decimals)}${suffix}`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || startedRef.current) return;
                startedRef.current = true;
                observer.disconnect();

                const startTime = performance.now();

                const animate = (now: number) => {
                    const elapsed = now - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 4);
                    const current = eased * value;
                    if (el.isConnected) {
                        el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
                    }
                    if (progress < 1 && el.isConnected) {
                        rafIdRef.current = requestAnimationFrame(animate);
                    } else if (el.isConnected) {
                        el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
                    }
                };

                rafIdRef.current = requestAnimationFrame(animate);
            },
            { threshold: 0.5 }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
        };
    }, [value, duration, prefix, suffix, decimals]);

    return <span ref={elementRef}>{`${prefix}${(0).toFixed(decimals)}${suffix}`}</span>;
}
