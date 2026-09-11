'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { ReactNode } from 'react';

const differentiatorIcons: ReactNode[] = [
    <svg key="d1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    <svg key="d2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    <svg key="d3" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    <svg key="d4" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="d5" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
];

export default function Differentiators() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(2);
    const { t } = useLanguage();

    useEffect(() => {
        const scrollToThirdCard = () => {
            const carousel = document.getElementById('mobile-carousel');
            const thirdCard = document.getElementById('card-3');
            if (carousel && thirdCard && window.innerWidth < 768) {
                const scrollLeft = thirdCard.offsetLeft - (window.innerWidth / 2) + (thirdCard.getBoundingClientRect().width / 2);
                carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            }
        };
        setTimeout(scrollToThirdCard, 100);
    }, []);

    return (
        <section id="differentiators" className="py-32 bg-white relative overflow-hidden">
            <DottedBackground />
            <div className="absolute top-20 right-0 w-72 h-72 bg-primary-100 rounded-full opacity-20 blur-3xl" />
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10" style={{ width: '90%', margin: '0 auto' }}>
                <RevealAnimation direction="up">
                    <div className="mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                            {t.differentiators.title}
                        </h2>
                        <p className="text-xl md:text-3xl text-gray-600 font-medium">
                            {t.differentiators.subtitle}
                        </p>
                    </div>
                </RevealAnimation>
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative py-16">
                <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory" id="mobile-carousel">
                    <div className="flex gap-[-40px] py-6">
                        <div className="flex-shrink-0 w-[12.5vw]"></div>
                        {t.differentiators.items.map((item, index) => (
                            <motion.div
                                key={index}
                                id={`card-${index + 1}`}
                                className="flex-shrink-0 w-[75vw] max-w-[320px] snap-center"
                                initial={{ opacity: 0.7, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false, amount: 0.7 }}
                                transition={{ duration: 0.6, ease: [0.34, 1.16, 0.64, 1] }}
                            >
                                <motion.div
                                    className="relative h-[410px] bg-white rounded-3xl border border-gray-200 overflow-hidden"
                                    initial={{ boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    whileInView={{ boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                                    viewport={{ once: false, amount: 0.7 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <motion.div className="absolute inset-0 bg-black pointer-events-none z-20" initial={{ opacity: 0.15 }} whileInView={{ opacity: 0 }} viewport={{ once: false, amount: 0.7 }} transition={{ duration: 0.6 }} />
                                    <div className="absolute inset-0 flex items-center justify-center text-primary-400 opacity-5 pointer-events-none">
                                        <div className="w-48 h-48">{differentiatorIcons[index]}</div>
                                    </div>
                                    <div className="relative h-full p-5 flex flex-col overflow-y-auto z-10">
                                        <div className="text-primary-500 mb-4 flex-shrink-0 flex justify-center">{differentiatorIcons[index]}</div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className={`leading-relaxed mb-3 ${item.bullets ? 'text-xs' : 'text-sm'} text-gray-600`}>{item.description}</p>
                                        {item.bullets && (
                                            <div className="space-y-1.5 mb-2">
                                                {item.bullets.map((bullet, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                                        <span className="flex-shrink-0">&bull;</span>
                                                        <span>{bullet}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                        <div className="flex-shrink-0 w-[12.5vw]"></div>
                    </div>
                </div>
            </div>

            {/* Desktop Stacked Cards */}
            <div className="max-w-7xl mx-auto relative z-10" style={{ width: '90%', margin: '0 auto' }}>
                <div className="hidden md:block relative flex items-center justify-center min-h-[380px]">
                    <div className="relative w-full h-[390px]">
                        {t.differentiators.items.map((item, index) => {
                            const offset = (index - 2) * 240;
                            const isActive = hoveredIndex === index;
                            const distance = Math.abs(index - (hoveredIndex ?? 2));

                            const getShadow = () => {
                                if (isActive) return 'shadow-2xl';
                                if (distance === 1) return 'shadow-lg';
                                if (distance === 2) return 'shadow-md';
                                return 'shadow-sm';
                            };

                            const getDarkness = () => {
                                if (isActive) return 0;
                                if (distance === 1) return 0.02;
                                if (distance === 2) return 0.04;
                                return 0.06;
                            };

                            return (
                                <motion.div
                                    key={index}
                                    className="absolute top-0 w-[360px] cursor-pointer"
                                    initial={false}
                                    animate={{
                                        left: `calc(50% - 180px + ${offset}px)`,
                                        zIndex: isActive ? 100 : 50 - distance,
                                        scale: isActive ? 1.05 : 0.95,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.34, 1.16, 0.64, 1],
                                        scale: { duration: 0.8 },
                                        zIndex: { delay: isActive ? 0 : 0.4, duration: 0 }
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(2)}
                                >
                                    <motion.div
                                        className={`relative h-[390px] bg-white rounded-3xl border border-gray-200 overflow-hidden ${getShadow()}`}
                                        initial={false}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <div className="absolute inset-0 bg-black pointer-events-none transition-opacity duration-[800ms] ease-out z-20" style={{ opacity: getDarkness() }} />
                                        <div className="absolute inset-0 flex items-center justify-center text-primary-400 opacity-5 pointer-events-none">
                                            <div className="w-48 h-48">{differentiatorIcons[index]}</div>
                                        </div>
                                        <div className="relative h-full p-5 md:p-6 flex flex-col overflow-y-auto z-10">
                                            <div className="text-primary-500 mb-4 flex-shrink-0 flex justify-center">{differentiatorIcons[index]}</div>
                                            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className={`leading-relaxed mb-3 ${item.bullets ? 'text-xs md:text-sm' : 'text-sm md:text-base'} text-gray-600`}>{item.description}</p>
                                            {item.bullets && (
                                                <div className="space-y-1.5 mb-2">
                                                    {item.bullets.map((bullet, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                                                            <span className="flex-shrink-0">&bull;</span>
                                                            <span>{bullet}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
