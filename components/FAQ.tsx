'use client';

import { useState } from 'react';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t } = useLanguage();

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <DottedBackground />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {t.faq.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t.faq.subtitle}
                        </p>
                    </div>
                </RevealAnimation>

                <div className="space-y-4">
                    {t.faq.items.map((faq, index) => (
                        <RevealAnimation key={index} delay={index * 0.02}>
                            <div className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 shadow-sm ${openIndex === index
                                ? 'border-primary-500 shadow-lg'
                                : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                                }`}>
                                <button
                                    type="button"
                                    className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-lg font-semibold text-gray-900 pr-8">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-primary-600 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div
                                        className="px-6 pb-5 text-gray-700 leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                                    />
                                </div>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
