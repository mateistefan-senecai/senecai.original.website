import Image from 'next/image';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Team() {
    const { t } = useLanguage();

    return (
        <section id="team" className="relative py-32 bg-white overflow-hidden">
            <DottedBackground />
            <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                {/* Section Header */}
                <RevealAnimation direction="up">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            {t.team.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {t.team.subtitle}
                        </p>
                    </div>
                </RevealAnimation>

                {/* Team Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {t.team.members.map((member, index) => {
                        const photo = index === 0 ? '/matei.jpeg' : '/bogdan.jpeg';
                        return (
                            <RevealAnimation key={member.name} direction="up" delay={index * 0.15}>
                                <div className="group flex flex-col h-full border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-primary-500 transition-all duration-300 hover:shadow-xl">
                                    {/* Photo */}
                                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                                        <Image
                                            src={photo}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 1024px) 90vw, 45vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                                                {member.name}
                                            </h3>
                                            <span className="inline-block text-sm font-semibold tracking-wide uppercase text-primary-400">
                                                {member.role}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bio */}
                                    <div className="p-8 flex-1">
                                        {member.bio.split('\n\n').map((paragraph, i) => (
                                            <p key={i} className={`text-gray-700 leading-relaxed ${i > 0 ? 'mt-4' : ''}`}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </RevealAnimation>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
