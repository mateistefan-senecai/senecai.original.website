import RevealAnimation from './RevealAnimation';
import AnimatedNumber from './AnimatedNumber';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="relative py-32 bg-white overflow-hidden">
            <DottedBackground />
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                <div className="max-w-4xl mx-auto text-center">
                    {/* Main Title */}
                    <RevealAnimation direction="up">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12">
                            {t.about.title}
                        </h2>
                    </RevealAnimation>
                    <div className="space-y-8 text-xl md:text-2xl text-gray-700 leading-relaxed">
                        <RevealAnimation delay={0.1} direction="fade">
                            <p>{t.about.paragraph1}</p>
                        </RevealAnimation>

                        <RevealAnimation delay={0.2} direction="fade">
                            <p>{t.about.paragraph2}</p>
                        </RevealAnimation>
                    </div>
                </div>

                {/* The Vision Section */}
                <div id="vision" className="mt-32 relative">
                    {/* Three Challenge Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {/* The Difficulties */}
                        <RevealAnimation delay={0.1} direction="up">
                            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900">{t.about.difficultiesTitle}</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{t.about.difficultiesText}</p>
                            </div>
                        </RevealAnimation>

                        {/* The Deadline */}
                        <RevealAnimation delay={0.2} direction="up">
                            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900">{t.about.deadlineTitle}</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{t.about.deadlineText}</p>
                            </div>
                        </RevealAnimation>

                        {/* The Scope */}
                        <RevealAnimation delay={0.3} direction="up">
                            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-500 transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900">{t.about.scopeTitle}</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{t.about.scopeText}</p>
                            </div>
                        </RevealAnimation>
                    </div>

                    {/* Statistics Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Fines */}
                        <RevealAnimation delay={0.1} direction="up">
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-4">
                                    <AnimatedNumber value={35} prefix="€" suffix="M" />
                                </div>
                                <p className="text-lg md:text-xl text-gray-700 font-medium">
                                    {t.about.turnoverText}
                                </p>
                                <p className="text-base md:text-lg text-gray-600 mt-2">
                                    {t.about.finesLabel}
                                </p>
                            </div>
                        </RevealAnimation>

                        {/* Lack Readiness */}
                        <RevealAnimation delay={0.2} direction="up">
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-4">
                                    <AnimatedNumber value={82} suffix="%" />
                                </div>
                                <p className="text-base md:text-lg text-gray-600">
                                    {t.about.readinessText.split('\n').map((line, i) => (
                                        <span key={i}>{line}{i === 0 && <br />}</span>
                                    ))}
                                </p>
                            </div>
                        </RevealAnimation>

                        {/* Familiarity */}
                        <RevealAnimation delay={0.3} direction="up">
                            <div className="text-center">
                                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-600 mb-4">
                                    <AnimatedNumber value={39} suffix="%" />
                                </div>
                                <p className="text-base md:text-lg text-gray-600">
                                    {t.about.familiarityText}
                                </p>
                            </div>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </section >
    );
}
