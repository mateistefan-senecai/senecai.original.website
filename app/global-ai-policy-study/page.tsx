'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const PDF_URL = '/SenecAI-Global-AI-Policy-Report-2026.pdf';

const content = {
    en: {
        eyebrow: 'Global AI Policy Report · First Edition, August 2026',
        title: 'What Awaits Organizations Deploying AI Globally',
        lead: 'The full study behind the jurisdiction map: 22 jurisdictions scored on a 15-criterion rubric across five weighted pillars, with a one-pager for every jurisdiction covered.',
        open: 'Open in a new tab',
        download: 'Download the PDF',
        backToMap: '← Back to the Jurisdiction Map',
        viewerLabel: 'SenecAI Global AI Policy Report 2026',
        fallbackTitle: 'Open the report',
        fallbackText:
            'Your browser cannot display the PDF inline. Open it in a new tab or download it to read the full study.',
    },
    ro: {
        eyebrow: 'Raportul Global de Politici AI · Prima ediție, august 2026',
        title: 'Ce așteaptă organizațiile care implementează AI la nivel global',
        lead: 'Studiul complet din spatele hărții jurisdicțiilor: 22 de jurisdicții evaluate pe o grilă de 15 criterii, grupate în cinci piloni ponderați, cu o fișă dedicată pentru fiecare jurisdicție analizată.',
        open: 'Deschide într-o filă nouă',
        download: 'Descarcă PDF-ul',
        backToMap: '← Înapoi la Harta jurisdicțiilor',
        viewerLabel: 'SenecAI Global AI Policy Report 2026',
        fallbackTitle: 'Deschide raportul',
        fallbackText:
            'Browserul tău nu poate afișa PDF-ul direct în pagină. Deschide-l într-o filă nouă sau descarcă-l pentru a citi studiul complet.',
    },
};

export default function GlobalAIPolicyStudyPage() {
    const { language } = useLanguage();
    const copy = content[language];

    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative overflow-hidden bg-white pb-8 pt-10">
                    <DottedBackground />
                    <div className="relative mx-auto max-w-7xl" style={{ width: '90%' }}>
                        <RevealAnimation direction="up">
                            <a
                                href="/global-ai-policy-map/"
                                className="text-sm text-gray-500 transition-colors hover:text-primary-600"
                            >
                                {copy.backToMap}
                            </a>
                            <div className="mb-3 mt-6 flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-primary-600">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                                {copy.eyebrow}
                            </div>
                            <h1 className="max-w-4xl text-3xl font-bold leading-[1.12] text-gray-900 sm:text-4xl md:text-5xl">
                                {copy.title}
                            </h1>
                        </RevealAnimation>

                        <RevealAnimation direction="fade" delay={0.12}>
                            <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                                <p className="max-w-2xl text-base leading-relaxed text-gray-600">{copy.lead}</p>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={PDF_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
                                    >
                                        {copy.open}
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href={PDF_URL}
                                        download
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-700"
                                    >
                                        {copy.download}
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-5l-4 4m0 0l-4-4m4 4V4"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>

                <section className="bg-white pb-16">
                    <div className="mx-auto max-w-7xl" style={{ width: '90%' }}>
                        <RevealAnimation direction="fade" delay={0.2}>
                            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-sm">
                                <object
                                    data={PDF_URL}
                                    type="application/pdf"
                                    aria-label={copy.viewerLabel}
                                    className="block h-[75vh] min-h-[520px] w-full"
                                >
                                    {/* Rendered when the browser cannot embed PDFs (most mobile browsers). */}
                                    <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
                                        <svg
                                            className="h-10 w-10 text-primary-500"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                        <h2 className="text-lg font-semibold text-gray-900">{copy.fallbackTitle}</h2>
                                        <p className="max-w-md text-sm text-gray-600">{copy.fallbackText}</p>
                                        <a
                                            href={PDF_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block rounded-full bg-gradient-to-br from-primary-400 to-primary-600 px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
                                        >
                                            {copy.open}
                                        </a>
                                    </div>
                                </object>
                            </div>
                        </RevealAnimation>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
