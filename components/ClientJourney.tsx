'use client';

import type { ReactNode } from 'react';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const stepIcons: ReactNode[] = [
    <svg key="j1" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
    <svg key="j2" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    <svg key="j3" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 4h.01" /></svg>,
    <svg key="j4" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
    <svg key="j5" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>,
    <svg key="j6" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    <svg key="j7" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
];

const modelPhases = ['phase1', 'phase2', 'phase3', null];

export default function ClientJourney() {
    const { t } = useLanguage();

    return (
        <section id="client-journey" className="relative py-32 bg-gray-50">
            <DottedBackground />
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto 0' }}>
                {/* Title */}
                <RevealAnimation direction="up">
                    <div className="mb-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            {t.clientJourney.title}
                        </h2>
                        <p className="text-xl md:text-3xl text-gray-600 font-medium">
                            {t.clientJourney.subtitle}
                        </p>
                    </div>
                </RevealAnimation>

                <RevealAnimation direction="up">
                    <div className="mb-16 max-w-4xl">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            {t.clientJourney.introText}
                        </p>
                    </div>
                </RevealAnimation>

                {/* Journey Steps */}
                <div className="mb-32">
                    <div className="relative">
                        <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block"
                            style={{ width: 'calc(100% - 80px)', marginLeft: '40px' }} />
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-8 relative z-10">
                            {t.clientJourney.steps.map((step, index) => (
                                <RevealAnimation key={index} delay={index * 0.1} direction="up">
                                    <div className="flex flex-col items-center text-center group">
                                        <div className="w-24 h-24 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-primary-600 shadow-sm hover:shadow-md hover:border-primary-400 transition-all duration-300 mb-4">
                                            {stepIcons[index]}
                                        </div>
                                        <div className="text-xs font-semibold text-gray-400 mb-2">
                                            {t.clientJourney.stepLabel} {index + 1}
                                        </div>
                                        <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                                            {step}
                                        </h3>
                                    </div>
                                </RevealAnimation>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engagement Models */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-16 items-stretch">
                    {t.clientJourney.models.map((model, index) => {
                        const number = String(index + 1).padStart(2, '0');
                        const phase = modelPhases[index];
                        return (
                            <div key={index} id={phase ? `client-journey-${phase}` : undefined} className="scroll-mt-24 flex">
                                <RevealAnimation delay={index * 0.1} direction="up" className="w-full">
                                    <div className="relative rounded-2xl bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col p-8 lg:p-10">
                                        <div className="absolute top-8 right-8 lg:top-10 lg:right-10 w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                                            <span className="relative z-10 text-2xl font-bold text-gray-400 group-hover:text-primary-700 transition-colors duration-500 ease-in-out">{number}</span>
                                        </div>
                                        <div className="flex flex-col md:flex-row md:flex-wrap gap-3 mb-6">
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-full"></div>
                                                <svg className="relative z-10 w-5 h-5 group-hover:text-primary-700 transition-colors duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="relative z-10 group-hover:text-primary-700 transition-colors duration-500 ease-in-out">{model.duration}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-primary-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-full"></div>
                                                <svg className="relative z-10 w-5 h-5 group-hover:text-primary-700 transition-colors duration-500 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="relative z-10 group-hover:text-primary-700 transition-colors duration-500 ease-in-out">{model.cost}</span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-20">
                                            {model.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                                            {model.description}
                                        </p>
                                    </div>
                                </RevealAnimation>
                            </div>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <RevealAnimation delay={0.3} direction="fade">
                    <div className="text-center mb-16">
                        <a href="https://calendly.com/senecai-consulting/30min" target="_blank" rel="noopener noreferrer" className="inline-block relative overflow-hidden px-10 py-4 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-semibold rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 text-lg">
                            <span className="relative z-10">{t.clientJourney.ctaButton}</span>
                        </a>
                    </div>
                </RevealAnimation>

                {/* Legal Disclaimer */}
                <RevealAnimation delay={0.4} direction="fade">
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xs text-gray-400 leading-relaxed text-center">
                            <span className="font-medium">{t.clientJourney.disclaimerLabel}</span> {t.clientJourney.disclaimerText}
                        </p>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    );
}
