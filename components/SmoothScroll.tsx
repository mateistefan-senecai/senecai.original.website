'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

declare global {
    interface Window {
        __lenis?: Lenis;
    }
}

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.12,
            smoothWheel: true,
            wheelMultiplier: 1.0,
            touchMultiplier: 2,
            infinite: false,
            syncTouch: false,
        });

        window.__lenis = lenis;

        let rafId = 0;

        const raf = (time: number) => {
            lenis.raf(time);
            rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            if (window.__lenis === lenis) {
                delete window.__lenis;
            }
            lenis.destroy();
        };
    }, []);

    return null;
}
