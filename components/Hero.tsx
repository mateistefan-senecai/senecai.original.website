import { useState, useEffect } from 'react';
import RevealAnimation from './RevealAnimation';
import CrossfadeText from './CrossfadeText';
import TypewriterEffect from './TypewriterEffect';
import Image from 'next/image';
import { GL } from './gl';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Hero({ preloadGL = false }: { preloadGL?: boolean }) {
    const [hovering, setHovering] = useState(false);
    const [showGL, setShowGL] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        if (preloadGL) {
            setShowGL(true);
        }
    }, [preloadGL]);

    return (
        <section id="home" className="relative min-h-[80vh] md:min-h-[85vh] flex items-start justify-center bg-white pt-12 md:pt-16 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto py-4 md:py-4" style={{ width: '90%', margin: '0 auto' }}>
                <div className="flex flex-col items-start text-left mt-12 md:mt-12">
                    {/* Main Heading */}
                    <h1 className="text-[2.75rem] md:text-7xl lg:text-8xl text-black font-bold tracking-tight leading-[1.1] mb-5 md:mb-8">
                        <TypewriterEffect
                            text={t.hero.heading1}
                            speed={100}
                            delay={0.3}
                            showCursor={true}
                        />
                        <br />
                        <TypewriterEffect
                            text={t.hero.heading2}
                            speed={100}
                            delay={0.3}
                            showCursor={true}
                        />
                    </h1>

                    {/* Supporting Text */}
                    <RevealAnimation delay={0.05} direction="fade">
                        <p className="text-lg md:text-2xl lg:text-3xl text-gray-700 mb-4 md:mb-6 font-normal max-w-3xl leading-relaxed">
                            {t.hero.supportingText}
                        </p>
                    </RevealAnimation>

                    {/* Additional Text */}
                    <RevealAnimation delay={0.08} direction="fade">
                        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8 font-normal max-w-3xl leading-relaxed">
                            {t.hero.additionalText}
                        </p>
                    </RevealAnimation>

                    {/* Check Out Section */}
                    <RevealAnimation delay={0.12} direction="fade">
                        <div className="flex flex-col items-start gap-4 mb-8 md:mb-12">
                            <p className="text-base md:text-lg text-gray-700 font-medium">
                                {t.hero.checkOut}
                            </p>
                            <div className="flex flex-col gap-2 w-full max-w-2xl">
                                <a
                                    href="#services"
                                    className="group flex items-start gap-2 text-sm md:text-base text-gray-600 hover:text-primary-600 transition-colors duration-300"
                                >
                                    <span className="text-primary-600 group-hover:text-primary-700 transition-colors mt-1">&rarr;</span>
                                    <span className="underline-offset-4 group-hover:underline flex-1">
                                        {t.hero.checkOutServiceText}<span className="text-primary-600 font-semibold">{t.hero.checkOutServiceHighlight}</span>
                                    </span>
                                </a>
                                <a
                                    href="#resources-tools"
                                    className="group flex items-start gap-2 text-sm md:text-base text-gray-600 hover:text-primary-600 transition-colors duration-300"
                                >
                                    <span className="text-primary-600 group-hover:text-primary-700 transition-colors mt-1">&rarr;</span>
                                    <span className="underline-offset-4 group-hover:underline flex-1">
                                        {t.hero.checkOutReadinessText}<span className="text-primary-600 font-semibold">{t.hero.checkOutReadinessHighlight}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </RevealAnimation>

                    {/* CTA Buttons */}
                    <RevealAnimation delay={0.15} direction="fade">
                        <div className="w-full max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <a
                                href="https://calendly.com/senecai-consulting/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center overflow-hidden px-5 py-2.5 md:px-7 md:py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black text-xs sm:text-sm md:text-base font-semibold rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 text-center leading-tight"
                            >
                                <span className="relative z-10">{t.hero.ctaButton}</span>
                            </a>
                            <a
                                href="/global-ai-policy-map"
                                className="relative inline-flex items-center justify-center overflow-hidden px-5 py-2.5 md:px-7 md:py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black text-xs sm:text-sm md:text-base font-semibold rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 text-center leading-tight max-w-full"
                            >
                                <span className="relative z-10">Check Out the Global AI Policy Report 2026</span>
                            </a>
                        </div>
                    </RevealAnimation>
                </div>
            </div>

            {/* GL Background */}
            {showGL && (
                <div
                    className="absolute w-full z-0 pointer-events-none"
                    style={{
                        top: '-30%',
                        left: 0,
                        right: 0,
                        height: '200%',
                        transform: 'translateY(15%)'
                    }}
                >
                    <GL hovering={hovering} />
                </div>
            )}
        </section>
    );
}
