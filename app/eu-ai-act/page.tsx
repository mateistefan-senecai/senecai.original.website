'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function EUAIActPage() {
    const { t } = useLanguage();

    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative py-32 bg-white">
                    <DottedBackground />
                    <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        {/* Title */}
                        <RevealAnimation direction="up">
                            <div className="mb-16">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 mx-auto text-center">
                                    {t.euAiAct.title}
                                </h1>
                            </div>
                        </RevealAnimation>

                        {/* Content */}
                        <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed mb-20">
                            {t.euAiAct.paragraphs.map((paragraph, index) => (
                                <RevealAnimation key={index} delay={0.1 * (index + 1)} direction="fade">
                                    <p>{paragraph}</p>
                                </RevealAnimation>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <RevealAnimation delay={0.6} direction="fade">
                            <div className="text-center">
                                <a
                                    href="https://calendly.com/senecai-consulting/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block relative overflow-hidden px-10 py-4 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-medium rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 text-lg"
                                >
                                    <span className="relative z-10">{t.euAiAct.ctaButton}</span>
                                </a>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
