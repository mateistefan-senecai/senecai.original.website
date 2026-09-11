import RevealAnimation from './RevealAnimation';

export default function PlaceholderSection({
    id,
    title,
    subtitle
}: {
    id: string;
    title: string;
    subtitle: string;
}) {
    return (
        <section id={id} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                {/* Section Header */}
                <RevealAnimation direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </div>
                </RevealAnimation>

                {/* Placeholder Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <RevealAnimation key={item} delay={item * 0.1} direction="up">
                            <div className="p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white">
                                {/* Icon Placeholder */}
                                <div className="w-16 h-16 rounded-2xl bg-primary-100 mb-6 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-lg bg-primary-500" />
                                </div>

                                {/* Content Placeholder */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    Feature {item}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Placeholder content for feature {item}. This will be enhanced with actual content later.
                                </p>

                                {/* Link Placeholder */}
                                <button className="mt-6 text-primary-600 hover:text-primary-700 font-medium inline-flex items-center group">
                                    Learn more
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </RevealAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
}
