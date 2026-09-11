'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The New Normal in AI Governance: Adjusting to life under the EU AI Act',
        date: 'March 1, 2026',
        author: 'Matei Ștefan',
        backLabel: '\u2190 Back to Resource Hub',
        body: `I\u2019m launching this blog series in order to dissect the complexities of the EU AI Act (AIA) and translate them into actionable business intelligence and practical guidance. As the world\u2019s first comprehensive, risk-based regulatory framework for AI, the AIA\u2019s entry into force in August 2024 triggered a structural shift in AI governance for organizations building or using AI systems within the EU.

In this \u201Cnew normal,\u201D technical professionals must remain closely attuned to regulatory trends that shape technical design and operational decision-making, while executives must architect comprehensive governance frameworks with AIA compliance at their core.

If you are a startup founder, executive, developer, or part of a product, legal, or compliance team working with AI \u2013 this is for you!`,
        sections: [
            {
                heading: 'The AI Governance Shift: From \u201CNice-to-Have\u201D to \u201CSine Qua Non\u201D',
                paragraphs: [
                    'The landscape of AI governance has fundamentally shifted. As of last year, it transitioned from a voluntary \u201Cnice-to-have\u201D into a binding legal obligation \u2014 with the applicability of the AIA (our focus here), ISO 42001, NIST AI RMF, and a plethora of other sectoral or territorial laws across the world.',
                    'What was only a couple of years ago a niche research and policy field has turned into a fully-fledged corporate function, encompassing many distinct capabilities and sub-fields \u2014 akin to established fields like privacy, cybersecurity, and data governance.',
                    'Today, AI governance intersects \u2014 and materially affects \u2014 product development, legal, compliance, risk management, executive decision-making, and investor relations.',
                ],
            },
            {
                heading: 'The Rationale for \u201CThe AI Act Guy\u201D',
                paragraphs: [
                    'Based on this premise, I am creating this blog series to explain the AI Act, outline its obligations, and discuss its practical implications for businesses.',
                    'Most founders have little to no clarity on what the EU AI Act actually is, whether it applies to them, and where the concrete obligations arise.',
                    'The regulation is complex and disorienting \u2014 it\u2019s twice as dense as GDPR \u2014 which is precisely why, through this platform, I will provide expert analysis of the EU AI Act.',
                    'Moreover, the AIA has not yet reached its final shape; additional uncertainty stems from the Commission\u2019s proposed amendment of November 2025, and as of March 2026, the EU co-legislators are still negotiating the revised text, leaving certain aspects of the regulation subject to further adjustment.',
                    'To begin with \u2014 and this is the short-term vision, as the project may evolve \u2014 I will focus on explaining the EU AI Act in a structured manner: from its definitions and risk layers to high-risk classifications, prohibited practices, GPAIs, regulatory sandboxes, penalties and enforcement, Commission guidelines, and codes of practice.',
                    'While maintaining rigorous legal and regulatory analysis, I intend to go beyond traditional legal commentary by anchoring the requirements in operational realities and providing as many concrete examples as possible. My goal is to clarify what these requirements will look like in practice \u2014 and what founders, executives, developers, and technical and legal teams must do to achieve compliance.',
                ],
            },
            {
                heading: 'What Will Be Covered',
                paragraphs: [
                    'In the short term, I will dismantle the Act piece-by-piece, focusing on:',
                ],
                bullets: [
                    { bold: 'Definitions & Scoping:', text: ' Does your \u201Calgorithm\u201D actually count as an \u201CAI System\u201D under the AIA?' },
                    { bold: 'The Risk Layers:', text: ' Navigating the spectrum from Prohibited Practices to Limited and High-Risk classifications.' },
                    { bold: 'The Roles:', text: ' Explaining the difference between a provider and a deployer.' },
                    { bold: 'GPAI Models:', text: ' Understanding the specific burdens on General Purpose AI providers.' },
                    { bold: 'Innovation Facilitators:', text: ' How to leverage Regulatory Sandboxes to build without compliance anxiety.' },
                    { bold: 'Enforcement:', text: ' A deep dive into the AI Office\u2019s guidelines, Codes of Practice, and the reality of the penalty regime.' },
                    { bold: 'Legislative Monitoring:', text: ' Keeping track of all the legislative updates from Brussels as the EU co-legislators are negotiating the current amended proposal, as well as commentaries on the Commission secondary and soft law (implementing & delegated acts and guidelines).' },
                ],
                afterBullets: [
                    'The idea for the initial phase of this blog series is to focus on the most consequential aspects of the EU AI Act and their practical impact. This represents the short- to medium-term vision. Over time, the scope may expand to cover broader AI governance topics, moving beyond the EU AI Act itself.',
                    'What will remain outside the scope are discussions of new model features or releases, news across the AI value chain and hyperscalers, geopolitical debates, and granular technical details.',
                ],
            },
            {
                heading: 'Who Is This For?',
                bullets: [
                    { bold: 'Founders & Executives:', text: ' To embed AIA compliance into governance, protecting valuation, reputation, and regulatory position.' },
                    { bold: 'Developers & Tech Teams:', text: ' To implement AIA compliance through compliance-by-design across the AI lifecycle.' },
                    { bold: 'Legal & Governance Practitioners:', text: ' To stay ahead of AIA compliance obligations, supervision, and enforcement trends.' },
                ],
            },
        ],
    },
    ro: {
        title: 'Noua normalitate \u00EEn guvernan\u021Ba AI: Adaptarea la via\u021Ba sub EU AI Act',
        date: '1 martie 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        body: `Lansez aceast\u0103 serie de articole pentru a analiza complexit\u0103\u021Bile EU AI Act (AIA) \u0219i a le traduce \u00EEn informa\u021Bii de business ac\u021Bionabile \u0219i ghidare practic\u0103. Ca prim cadru legislativ comprehensiv \u0219i bazat pe risc pentru AI din lume, intrarea \u00EEn vigoare a AIA \u00EEn august 2024 a declan\u0219at o schimbare structural\u0103 \u00EEn guvernan\u021Ba AI pentru organiza\u021Biile care construiesc sau utilizeaz\u0103 sisteme AI \u00EEn UE.

\u00CEn aceast\u0103 \u201Enou\u0103 normalitate\u201D, profesioni\u0219tii tehnici trebuie s\u0103 r\u0103m\u00E2n\u0103 atent conecta\u021Bi la tendin\u021Bele de reglementare care modeleaz\u0103 designul tehnic \u0219i deciziile opera\u021Bionale, \u00EEn timp ce executivii trebuie s\u0103 construiasc\u0103 cadre comprehensive de guvernan\u021B\u0103 cu conformitatea AIA \u00EEn centru.

Dac\u0103 e\u0219ti fondator de startup, executiv, dezvoltator sau faci parte dintr-o echip\u0103 de produs, juridic\u0103 sau de conformitate care lucreaz\u0103 cu AI \u2013 aceasta este pentru tine!`,
        sections: [
            {
                heading: 'Schimbarea \u00EEn guvernan\u021Ba AI: De la \u201ENice-to-Have\u201D la \u201ESine Qua Non\u201D',
                paragraphs: [
                    'Peisajul guvernan\u021Bei AI s-a schimbat fundamental. De anul trecut, a trecut de la o practic\u0103 voluntar\u0103 \u201Enice-to-have\u201D la o obliga\u021Bie legal\u0103 obligatorie \u2014 prin aplicabilitatea AIA (focusul nostru aici), ISO 42001, NIST AI RMF \u0219i o multitudine de alte legi sectoriale sau teritoriale din \u00EEntreaga lume.',
                    'Ceea ce era acum doar c\u00E2\u021Biva ani un domeniu de cercetare \u0219i politici de ni\u0219\u0103 s-a transformat \u00EEntr-o func\u021Bie corporativ\u0103 complet\u0103, cuprinz\u00E2nd multe capabilit\u0103\u021Bi \u0219i sub-domenii distincte \u2014 similar domeniilor consacrate precum confiden\u021Bialitatea, securitatea cibernetic\u0103 \u0219i guvernan\u021Ba datelor.',
                    'Ast\u0103zi, guvernan\u021Ba AI intersecteaz\u0103 \u2014 \u0219i afecteaz\u0103 material \u2014 dezvoltarea de produse, juridicul, conformitatea, managementul riscului, deciziile executive \u0219i rela\u021Biile cu investitorii.',
                ],
            },
            {
                heading: 'Ra\u021Biunea pentru \u201EThe AI Act Guy\u201D',
                paragraphs: [
                    'Pornind de la aceast\u0103 premis\u0103, creez aceast\u0103 serie de articole pentru a explica AI Act, a-i schematiza obliga\u021Biile \u0219i a discuta implica\u021Biile practice pentru business.',
                    'Majoritatea fondatorilor au pu\u021Bin\u0103 sau nicio claritate cu privire la ceea ce este de fapt EU AI Act, dac\u0103 li se aplic\u0103 \u0219i unde apar obliga\u021Biile concrete.',
                    'Regulamentul este complex \u0219i derutant \u2014 este de dou\u0103 ori mai dens dec\u00E2t GDPR \u2014 motiv pentru care, prin aceast\u0103 platform\u0103, voi oferi analize de expert ale EU AI Act.',
                    'Mai mult, AIA nu a atins \u00EEnc\u0103 forma sa final\u0103; incertitudine suplimentar\u0103 provine din amendamentul propus de Comisie \u00EEn noiembrie 2025, iar la martie 2026, co-legiuitorii UE negociaz\u0103 \u00EEnc\u0103 textul revizuit, l\u0103s\u00E2nd anumite aspecte ale regulamentului supuse unor ajust\u0103ri suplimentare.',
                    'Pentru \u00EEnceput \u2014 \u0219i aceasta este viziunea pe termen scurt, deoarece proiectul poate evolua \u2014 m\u0103 voi concentra pe explicarea EU AI Act \u00EEntr-un mod structurat: de la defini\u021Bii \u0219i niveluri de risc la clasific\u0103ri de risc ridicat, practici interzise, GPAI, sandbox-uri de reglementare, sanc\u021Biuni \u0219i aplicare, linii directoare ale Comisiei \u0219i coduri de practic\u0103.',
                    'Men\u021Bin\u00E2nd o analiz\u0103 juridic\u0103 \u0219i de reglementare riguroas\u0103, inten\u021Bionez s\u0103 dep\u0103\u0219esc comentariul juridic tradi\u021Bional, ancor\u00E2nd cerin\u021Bele \u00EEn realit\u0103\u021Bi opera\u021Bionale \u0219i oferind c\u00E2t mai multe exemple concrete posibil. Scopul meu este s\u0103 clarific cum vor ar\u0103ta aceste cerin\u021Be \u00EEn practic\u0103 \u2014 \u0219i ce trebuie s\u0103 fac\u0103 fondatorii, executivii, dezvoltatorii \u0219i echipele tehnice \u0219i juridice pentru a atinge conformitatea.',
                ],
            },
            {
                heading: 'Ce va fi acoperit',
                paragraphs: [
                    'Pe termen scurt, voi demonta Actul pies\u0103 cu pies\u0103, concentr\u00E2ndu-m\u0103 pe:',
                ],
                bullets: [
                    { bold: 'Defini\u021Bii \u0219i domeniu de aplicare:', text: ' \u201EAlgoritmul\u201D t\u0103u conteaz\u0103 de fapt ca \u201ESistem AI\u201D \u00EEn temeiul AIA?' },
                    { bold: 'Nivelurile de risc:', text: ' Navigarea spectrului de la Practici Interzise la clasific\u0103ri de Risc Limitat \u0219i Risc Ridicat.' },
                    { bold: 'Rolurile:', text: ' Explicarea diferen\u021Bei dintre un provider \u0219i un deployer.' },
                    { bold: 'Modele GPAI:', text: ' \u00CEn\u021Belegerea obliga\u021Biilor specifice ale furnizorilor de AI de uz general.' },
                    { bold: 'Facilitatori de inovare:', text: ' Cum s\u0103 folose\u0219ti Sandbox-urile de Reglementare pentru a construi f\u0103r\u0103 anxietatea conformit\u0103\u021Bii.' },
                    { bold: 'Aplicare:', text: ' O analiz\u0103 aprofundat\u0103 a liniilor directoare ale AI Office, Codurilor de Practic\u0103 \u0219i realitatea regimului de sanc\u021Biuni.' },
                    { bold: 'Monitorizare legislativ\u0103:', text: ' Urm\u0103rirea tuturor actualiz\u0103rilor legislative din Bruxelles pe m\u0103sur\u0103 ce co-legiuitorii UE negociaz\u0103 propunerea amendat\u0103 curent\u0103, precum \u0219i comentarii asupra dreptului secundar \u0219i soft law al Comisiei (acte de implementare \u0219i delegate \u0219i linii directoare).' },
                ],
                afterBullets: [
                    'Ideea pentru faza ini\u021Bial\u0103 a acestei serii de articole este s\u0103 m\u0103 concentrez pe cele mai importante aspecte ale EU AI Act \u0219i impactul lor practic. Aceasta reprezint\u0103 viziunea pe termen scurt \u0219i mediu. \u00CEn timp, domeniul se poate extinde pentru a acoperi subiecte mai largi de guvernan\u021B\u0103 AI, dep\u0103\u0219ind EU AI Act \u00EEn sine.',
                    'Ce va r\u0103m\u00E2ne \u00EEn afara domeniului sunt discu\u021Biile despre noi func\u021Bionalit\u0103\u021Bi sau lans\u0103ri de modele, \u0219tiri din lan\u021Bul valoric AI \u0219i hyperscaleri, dezbateri geopolitice \u0219i detalii tehnice granulare.',
                ],
            },
            {
                heading: 'Cui se adreseaz\u0103?',
                bullets: [
                    { bold: 'Fondatori \u0219i executivi:', text: ' Pentru a integra conformitatea AIA \u00EEn guvernan\u021B\u0103, protej\u00E2nd valoarea, reputa\u021Bia \u0219i pozi\u021Bia de reglementare.' },
                    { bold: 'Dezvoltatori \u0219i echipe tehnice:', text: ' Pentru a implementa conformitatea AIA prin compliance-by-design pe \u00EEntreg ciclul de via\u021B\u0103 AI.' },
                    { bold: 'Practicieni juridici \u0219i de guvernan\u021B\u0103:', text: ' Pentru a r\u0103m\u00E2ne \u00EEnaintea obliga\u021Biilor de conformitate AIA, superviz\u0103rii \u0219i tendin\u021Belor de aplicare.' },
                ],
            },
        ],
    },
};

type Section = {
    heading: string;
    paragraphs?: string[];
    bullets?: { bold: string; text: string }[];
    afterBullets?: string[];
};

export default function BlogPostPage() {
    const { language } = useLanguage();
    const c = content[language];

    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative py-16 md:py-24 bg-white">
                    <DottedBackground />
                    <div className="max-w-4xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        {/* Back link */}
                        <RevealAnimation direction="fade">
                            <a href="/#resources-blog" className="inline-block text-sm text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors">
                                {c.backLabel}
                            </a>
                        </RevealAnimation>

                        {/* Header */}
                        <RevealAnimation direction="up">
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-sm text-gray-500">{c.date}</span>
                                </div>
                                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                    {c.title}
                                </h1>
                                <div className="flex items-center gap-3">
                                    <img src="/matei.jpeg" alt="Matei Ștefan" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">{c.author}</p>
                                        <p className="text-xs text-gray-500">Founder & AI Act Compliance Consultant</p>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>

                        {/* Intro */}
                        <RevealAnimation delay={0.1} direction="fade">
                            <div className="prose prose-lg max-w-none mb-12">
                                {c.body.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                ))}
                            </div>
                        </RevealAnimation>

                        {/* Sections */}
                        {c.sections.map((section: Section, idx: number) => (
                            <RevealAnimation key={idx} delay={0.05 * (idx + 1)} direction="fade">
                                <div className="mb-10">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        {section.heading}
                                    </h2>
                                    {section.paragraphs?.map((p, i) => (
                                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                    ))}
                                    {section.bullets && (
                                        <ul className="space-y-3 mb-4">
                                            {section.bullets.map((b, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                                    <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                    <span><strong>{b.bold}</strong>{b.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.afterBullets?.map((p, i) => (
                                        <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                    ))}
                                </div>
                            </RevealAnimation>
                        ))}

                        {/* CTA */}
                        <RevealAnimation delay={0.3} direction="fade">
                            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                <p className="text-lg text-gray-700 mb-6">
                                    {language === 'en'
                                        ? 'Want to discuss how the EU AI Act applies to your organization?'
                                        : 'Vrei s\u0103 discu\u021Bi cum se aplic\u0103 EU AI Act organiza\u021Biei tale?'}
                                </p>
                                <a
                                    href="https://calendly.com/senecai-consulting/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block relative overflow-hidden px-8 py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-semibold rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100"
                                >
                                    <span className="relative z-10">
                                        {language === 'en' ? 'Book a Free Consultation' : 'Programeaz\u0103 o consulta\u021Bie gratuit\u0103'}
                                    </span>
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
