import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';

const keyPoints = [
    {
        id: 1,
        title: 'World\'s First Comprehensive Framework',
        description: 'The EU AI Act is the world\'s first and only comprehensive, horizontal legal framework regulating AI.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'from-primary-400 to-primary-500'
    },
    {
        id: 2,
        title: 'Risk-Based Approach',
        description: 'The law follows a risk based approach - the higher the risk, the stricter the requirements',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
        color: 'from-primary-300 to-primary-400'
    },
    {
        id: 3,
        title: 'Mandatory Audits for High-Risk Systems',
        description: 'Providers of high-risk AI system must complete an audit before placing the system on the market',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        color: 'from-primary-500 to-primary-600'
    },
    {
        id: 4,
        title: 'GPAI Models Regulation',
        description: 'GPAI models - the foundational models - are also tightly regulated',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
        color: 'from-primary-200 to-primary-300'
    },
    {
        id: 5,
        title: 'Phased Implementation',
        description: 'The EU AI Act follows a phased implementation schedule: the first set of rules became applicable in February 2025, while the remaining ones set to enter into force in 2026 and 2027.',
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        color: 'from-primary-400 to-primary-500'
    }
];

export default function EUAIAct() {
    return (
        <section id="eu-ai-act" className="relative py-32 bg-white">
            <DottedBackground />
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                {/* Title */}
                <RevealAnimation direction="up">
                    <div className="mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            The EU AI Act
                        </h2>
                    </div>
                </RevealAnimation>

                {/* Top Section: Text + Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Text Content - Left */}
                    <div>
                        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                            <RevealAnimation delay={0.1} direction="fade">
                                <p>
                                    The EU AI Act is the world's first comprehensive, horizontal legal framework regulating AI. It imposes rules and obligations on all entities developing AI models and (almost) all entities deploying AI systems.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.2} direction="fade">
                                <p>
                                    The law is not sectoral - different rules for different industries - but follows a risk-based approach. There are three risk categories: prohibited, high-risk, and limited-risk, each with a different set of obligations. The higher the potential impact on an individual or society, the stricter the requirements.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.3} direction="fade">
                                <p>
                                    As a parallel layer of regulation, there are also rules for the General Purpose Artificial Intelligence (GPAI) models - think of foundational models, like GPT5, Claude, Gemini.
                                </p>
                            </RevealAnimation>

                            <RevealAnimation delay={0.4} direction="fade">
                                <p>
                                    The landmark legislation was passed by the EU in August 2024, and it is being implemented through a phased timeline. The first set of rules - including banning prohibited practices - become applicable in February 2025. Additional obligations entered into force in August 2025, while the remaining requirements are scheduled to apply progressively in August 2026 and 2027.
                                </p>
                            </RevealAnimation>
                        </div>
                    </div>

                    {/* Image Placeholder - Right */}
                    <RevealAnimation delay={0.2} direction="right">
                        <div className="relative w-full h-full min-h-[500px] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl lg:rounded-none flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 bg-primary-500/10 backdrop-blur-sm" />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-primary-500/20 flex items-center justify-center">
                                    <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                <p className="text-primary-700 font-medium">Image Placeholder</p>
                            </div>
                        </div>
                    </RevealAnimation>
                </div>

                {/* Key Points Boxes */}
                <div className="mb-16">
                    {/* Grid 2x2 for first 4 items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 auto-rows-fr">
                        {keyPoints.slice(0, 4).map((point, index) => (
                            <RevealAnimation key={point.id} delay={index * 0.1} direction="up">
                                <div className="relative group py-6 border-b border-gray-200 h-full flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                        {point.title}
                                    </h3>
                                    <p className="text-base text-gray-600 leading-relaxed flex-1">
                                        {point.description}
                                    </p>
                                </div>
                            </RevealAnimation>
                        ))}
                    </div>

                    {/* 5th item - full width centered on desktop, left-aligned on mobile */}
                    <RevealAnimation delay={0.4} direction="up">
                        <div className="relative group py-6 border-b border-gray-200 text-left lg:text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                {keyPoints[4].title}
                            </h3>
                            <p className="text-base text-gray-600 leading-relaxed">
                                {keyPoints[4].description}
                            </p>
                        </div>
                    </RevealAnimation>
                </div>

                {/* CTA Button */}
                <RevealAnimation delay={0.6} direction="fade">
                    <div className="text-center">
                        <a href="https://calendly.com/senecai-consulting/30min" target="_blank" rel="noopener noreferrer" className="inline-block relative overflow-hidden px-10 py-4 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-medium rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 text-lg">
                            <span className="relative z-10">Learn more about the EU AIA - BOOK A CALL</span>
                        </a>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    );
}
