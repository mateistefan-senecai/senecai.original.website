import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';

const testimonials = [
    {
        quote: 'I highly recommend SenecAI Consulting. As a fellow founder, working with them on our AI Act compliance strategy was seamless. He guided us step by step, offered full support, great resources and helped us draft a comprehensive AI governance policy that we feature on our website.',
        name: 'Cristi Irimiea',
        role: 'Ed-tech entrepreneur, founder of ClassMap',
    },
    {
        quote: 'As builders, we move fast and often overlook the compliance implications of what we ship. It’s great to Matei Ștefan and his SenecAI team in our community helping make those conversations more accessible, practical, and founder-friendly.',
        name: 'Bogdan Iasinovschi & Matei Oprea',
        role: 'co-founders of DevNights - AI developers community',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-32 bg-gray-50 overflow-hidden">
            <DottedBackground />
            <div className="max-w-7xl mx-auto relative z-10" style={{ width: '90%', margin: '0 auto' }}>
                {/* Section Header */}
                <RevealAnimation direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Testimonials
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            What founders say about working with us.
                        </p>
                    </div>
                </RevealAnimation>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {testimonials.map((item, index) => (
                        <RevealAnimation key={item.name} delay={index * 0.15} direction="up">
                            <div className="group relative h-full bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex flex-col">
                                {/* Quote Icon */}
                                <div className="absolute -top-5 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-md">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M7.17 6A5.17 5.17 0 002 11.17V18a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1H5.5a1.67 1.67 0 011.67-1.67 1 1 0 001-1V7a1 1 0 00-1-1zm10 0A5.17 5.17 0 0012 11.17V18a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1h-2.5a1.67 1.67 0 011.67-1.67 1 1 0 001-1V7a1 1 0 00-1-1z" />
                                    </svg>
                                </div>

                                {/* Quote */}
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic flex-1 mb-6 mt-4">
                                    &ldquo;{item.quote}&rdquo;
                                </p>

                                {/* Attribution */}
                                <div className="border-t border-gray-200 pt-6">
                                    <p className="font-bold text-gray-900 text-lg">
                                        {item.name}
                                    </p>
                                    <p className="text-sm text-primary-600 font-medium mt-1">
                                        {item.role}
                                    </p>
                                </div>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
