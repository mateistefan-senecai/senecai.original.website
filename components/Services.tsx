'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const serviceIcons: ReactNode[][] = [
    // Phase 1
    [
        <svg key="s1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
        <svg key="s2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    ],
    // Phase 2
    [
        <svg key="s3" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
        <svg key="s4" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
        <svg key="s5" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 7l2 2 4-4" /></svg>,
    ],
    // Phase 3
    [
        <svg key="s6" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        <svg key="s7" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
        <svg key="s8" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    ],
];

// Global service ID counter: Phase 1 has IDs 1,2; Phase 2 has 3,4,5; Phase 3 has 6,7,8
const serviceIdMap = [[1, 2], [3, 4, 5], [6, 7, 8]];

export default function Services() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const { t } = useLanguage();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash.startsWith('#service-')) {
            const serviceId = parseInt(hash.replace('#service-', ''));
            if (!isNaN(serviceId)) {
                setExpandedId(serviceId);
                setTimeout(() => {
                    const element = document.getElementById(hash.substring(1));
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 100);
            }
        }
    }, []);

    const toggleService = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="services" className="relative py-20 bg-white">
            <DottedBackground />
            {/* Main Title */}
            <div className="max-w-7xl mx-auto mb-20" style={{ width: '90%', margin: '0 auto' }}>
                <RevealAnimation direction="up">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                        {t.services.title}
                    </h2>
                </RevealAnimation>
                <RevealAnimation direction="up">
                    <p className="text-xl md:text-3xl text-gray-600 font-medium mb-6">
                        {t.services.subtitle}
                    </p>
                </RevealAnimation>
                <RevealAnimation direction="up" delay={0.1}>
                    <div className="flex justify-start">
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl text-left">
                            {t.services.description}
                        </p>
                    </div>
                </RevealAnimation>
            </div>

            {/* Phases */}
            {t.services.phases.map((phase, phaseIndex) => (
                <div
                    key={phaseIndex}
                    id={`services-phase${phaseIndex + 1}`}
                    className="py-8 scroll-mt-24 bg-white"
                >
                    <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        {/* Phase Title */}
                        <RevealAnimation delay={0.1} direction="up">
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
                                {phase.title}
                            </h3>
                        </RevealAnimation>

                        {/* Services Grid */}
                        <div className={`grid grid-cols-1 gap-6 items-start justify-items-center ${phase.services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                            {phase.services.map((service, serviceIndex) => {
                                const serviceId = serviceIdMap[phaseIndex][serviceIndex];
                                return (
                                    <RevealAnimation
                                        key={serviceId}
                                        delay={0.1 + serviceIndex * 0.1}
                                        direction="up"
                                        className="w-full max-w-md"
                                    >
                                        <div
                                            id={`service-${serviceId}`}
                                            className="bg-white rounded-2xl border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 cursor-pointer overflow-hidden w-full min-h-[190px] flex flex-col scroll-mt-24"
                                            onClick={() => toggleService(serviceId)}
                                        >
                                            {/* Service Header */}
                                            <div className="p-6 text-center">
                                                <div className="flex justify-center mb-4">
                                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-primary-600">
                                                        {serviceIcons[phaseIndex][serviceIndex]}
                                                    </div>
                                                </div>
                                                <h4 className="text-xl font-semibold text-gray-900 leading-tight mb-4">
                                                    {service.title}
                                                </h4>
                                                <div className="flex items-center justify-center gap-2 text-primary-600 text-sm font-medium mt-4">
                                                    <span>{expandedId === serviceId ? t.services.showLess : t.services.learnMore}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform duration-300 ${expandedId === serviceId ? 'rotate-180' : ''}`}
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Service Description (Expandable) */}
                                            <div
                                                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${expandedId === serviceId ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                            >
                                                <div className="px-6 pb-6 text-center">
                                                    <p className="text-base text-gray-700 leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </RevealAnimation>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
