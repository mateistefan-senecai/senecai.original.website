import RevealAnimation from './RevealAnimation';

export default function FAQ() {
    return (
        <section id="faq" className="py-32 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                <RevealAnimation direction="up">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                            FAQ
                        </h2>
                        <p className="text-xl text-gray-600">
                            Coming Soon
                        </p>
                    </div>
                </RevealAnimation>
            </div>
        </section>
    );
}
