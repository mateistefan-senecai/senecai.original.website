'use client';

import { useState, useEffect } from 'react';

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    delay?: number;
    className?: string;
    showCursor?: boolean;
}

export default function TypewriterEffect({
    text,
    speed = 100,
    delay = 0,
    className = '',
    showCursor = true
}: TypewriterEffectProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    // Reset when text changes (e.g. language switch)
    useEffect(() => {
        setDisplayedText('');
        setCurrentIndex(0);
        setIsComplete(false);
        setHasStarted(false);

        const delayTimeout = setTimeout(() => {
            setHasStarted(true);
        }, delay * 1000);

        return () => clearTimeout(delayTimeout);
    }, [text, delay]);

    useEffect(() => {
        if (!hasStarted) return;

        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed, hasStarted]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && (
                <span className="animate-pulse">|</span>
            )}
        </span>
    );
}
