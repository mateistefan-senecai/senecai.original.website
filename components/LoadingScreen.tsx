'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
    const [progress, setProgress] = useState(0);
    const [isRevealing, setIsRevealing] = useState(false);

    useEffect(() => {
        // Optimized loading - enough time to preload resources
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsRevealing(true);
                        setTimeout(onLoadingComplete, 200);
                    }, 50);
                    return 100;
                }
                return prev + 5;
            });
        }, 25);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-[100000] pointer-events-auto flex flex-col items-center justify-center bg-white transition-all duration-700 ${isRevealing ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
                }`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            {/* Logo with animation */}
            <div className="mb-8 animate-pulse">
                <div className="relative w-32 h-32">
                    <Image
                        src="/icon_transparent.png"
                        alt="SenecAI Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Loading bar */}
            <div className="w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 shadow-[0_0_20px_rgba(212,175,55,0.6)] transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
