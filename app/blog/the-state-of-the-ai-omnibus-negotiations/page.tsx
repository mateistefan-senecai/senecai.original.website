'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The state of the “AI Omnibus” negotiations before heading into the trilogues',
        date: 'April 12, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `This edition examines key contention points ahead of trilogue negotiations, mapping the positions of three EU institutions. The Commission proposal from November 2025 meets responses from the Council and European Parliament (March 2026), offering a consolidated view of AI Act recalibration.

The baseline remains the AI Act as adopted in 2024. The Commission introduces targeted amendments facilitating implementation. The Council and Parliament respond by adjusting, narrowing, or reinforcing the original framework. Across the file, a consistent pattern emerges: simplification at Commission level, conditioning at Council level, and re-structuring through documentation and enforcement logic at Parliament level.`,
        sections: [
            {
                heading: 'Prohibited practices (Article 5)',
                paragraphs: [
                    'The Commission proposal leaves Article 5 untouched, confirming the Omnibus is not an instrument for expanding the unacceptable risk category.',
                    'Both the Council and Parliament introduce additional prohibitions, targeting systems enabling non-consensual intimate imagery and AI systems linked to CSAM. The Parliament explicitly captures nudifier applications while introducing a qualification: the prohibition does not apply where demonstrably effective technical safeguards are in place.',
                    'This represents a notable departure from original Article 5 structure. Prohibited practices were conceived as absolute. The Parliament’s formulation introduces a conditional layer, raising whether certain capabilities remain intrinsically unlawful or may, in limited cases, be rendered compliant through mitigation.',
                ],
            },
            {
                heading: 'High-risk timelines (Article 113)',
                paragraphs: [
                    'The divergence here is structural rather than incremental.',
                    'The Commission maintains the original framework logic, where high-risk obligations application links, at least partially, to harmonised standards availability, with fallback dates as safeguard.',
                    'Both the Council and Parliament move away from this approach. They introduce fixed application dates — December 2027 for Annex III systems and August 2028 for Annex I systems — explicitly decoupling high-risk obligations entry from standardisation progress.',
                    'The Parliament frames this as avoiding “moving goalposts” for industry. In practice, it replaces a standards-driven compliance model with a calendar-driven one. Delays in standard-setting will no longer translate into additional time for implementation.',
                ],
            },
            {
                heading: 'Transparency obligations (Article 50)',
                paragraphs: [
                    'On transparency, the Commission introduces a delay mechanism, extending certain obligations applicability for systems already on the market.',
                    'The Council aligns with this approach.',
                    'The Parliament shortens the extension, bringing the deadline forward to November 2026. The justification ties to addressing deepfake-related risks more rapidly. This reflects broader Parliament text tendency prioritizing risk mitigation over transitional flexibility.',
                ],
            },
            {
                heading: 'Registration (Article 6(3))',
                paragraphs: [
                    'The Commission proposes eliminating registration requirements for non-high-risk Annex III systems.',
                    'The Council retains registration but simplifies associated data requirements.',
                    'The Parliament maintains registration and adds a further layer: providers must retain internal documentation demonstrating their systems’ non-high-risk qualification for ten years.',
                    'This indicates broader Parliament approach shift. Qualification is no longer treated as static categorisation exercise, but as a decision requiring documentation, retention, and potential ex post justification.',
                ],
            },
            {
                heading: 'AI literacy (Article 4)',
                paragraphs: [
                    'The Commission removes the obligation altogether.',
                    'The Council retains it in reduced form, limiting application to personnel involved in high-risk systems.',
                    'The Parliament preserves the obligation, softening formulation by replacing strict requirement with “support” standard, effectively framing it as best-effort obligation.',
                    'What is at stake transcends mere training. It concerns whether AI governance constitutes a horizontal organisational requirement or risk-contained obligation limited to specific functions.',
                ],
            },
            {
                heading: 'Processing of sensitive data for bias (new Article 4a)',
                paragraphs: [
                    'The Commission lowers the threshold for processing special categories of data to a general “necessity” standard across AI systems.',
                    'Both the Council and Parliament reject this approach. They retain “strictly necessary” threshold and confine its use to higher-risk contexts.',
                    'This position aligns with data protection authorities’ concerns and preserves a higher bar for sensitive data use. In practical terms, it constrains bias detection and mitigation strategies’ reliance on special category data.',
                ],
            },
            {
                heading: 'AI Office powers (Article 75)',
                paragraphs: [
                    'The Commission strengthens the AI Office role as central supervisory body, particularly for general-purpose AI.',
                    'The Council accepts this direction, introducing explicit carve-outs for law enforcement and national security, preserving member state control in these areas.',
                    'The Parliament reinforces centralisation further, positioning the AI Office as de facto “one-stop-shop” for GPAI oversight and supporting resource expansion.',
                    'The underlying tension is familiar: centralised Union-level supervision versus national prerogatives preservation. The outcome determines enforcement consistency degree across jurisdictions.',
                ],
            },
            {
                heading: 'SMC proportionality (Articles 71–72)',
                paragraphs: [
                    'The Commission extends SME-style proportionality safeguards to Small Mid-Caps.',
                    'Both the Council and Parliament agree with this approach.',
                    'The Parliament adds operational element: real-world regulatory sandboxes should be made available free of charge for SMCs. This is one of few areas where three institutions converge with limited friction.',
                ],
            },
            {
                heading: 'What’s next',
                paragraphs: [
                    'The file moves into trilogue negotiations, where Commission, Council, and European Parliament will reconcile positions into single compromise text. No formal calendar has been publicly fixed, but trilogues are expected beginning in coming weeks.',
                    'As standard in EU legislative practice, the outcome will not reflect any single institutional position fully, but rather negotiated equilibrium across key fault lines. Given the Omnibus’ relatively targeted scope, the process will likely move faster than original AI Act negotiations, although politically sensitive elements may require extended discussion.',
                    'For practical purposes, this is the final phase in which the text remains fluid. Once trilogue agreement is reached, the regulation will move quickly toward formal adoption, leaving limited room for further substantive change.',
                    'The next edition of The AI Act Guy will unpack high-risk AI systems regime and practical compliance implementation.',
                ],
            },
        ],
    },
    ro: {
        title: 'Stadiul negocierilor „AI Omnibus” înainte de intrarea în trialoguri',
        date: '12 aprilie 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Această ediție examinează punctele-cheie de divergență înainte de negocierile din trialoguri, cartografiind pozițiile celor trei instituții ale UE. Propunerea Comisiei din noiembrie 2025 întâlnește răspunsurile Consiliului și ale Parlamentului European (martie 2026), oferind o viziune consolidată a recalibrării AI Act.

Punctul de plecare rămâne AI Act adoptat în 2024. Comisia introduce amendamente țintite care facilitează implementarea. Consiliul și Parlamentul răspund prin ajustarea, restrângerea sau consolidarea cadrului original. De-a lungul dosarului, apare un tipar consistent: simplificare la nivelul Comisiei, condiționare la nivelul Consiliului și restructurare prin logica de documentare și aplicare la nivelul Parlamentului.`,
        sections: [
            {
                heading: 'Practici interzise (Articolul 5)',
                paragraphs: [
                    'Propunerea Comisiei lasă Articolul 5 neatins, confirmând că Omnibus nu este un instrument pentru extinderea categoriei de risc inacceptabil.',
                    'Atât Consiliul, cât și Parlamentul introduc interdicții suplimentare, vizând sistemele care permit imaginile intime fără consimțământ și sistemele AI legate de CSAM. Parlamentul include explicit aplicațiile „nudifier”, introducând în același timp o calificare: interdicția nu se aplică acolo unde sunt implementate măsuri tehnice de protecție demonstrabil eficiente.',
                    'Aceasta reprezintă o abatere notabilă de la structura inițială a Articolului 5. Practicile interzise au fost concepute ca absolute. Formularea Parlamentului introduce un strat condițional, ridicând întrebarea dacă anumite capabilități rămân intrinsec ilegale sau pot, în cazuri limitate, să fie aduse în conformitate prin măsuri de mitigare.',
                ],
            },
            {
                heading: 'Calendare pentru risc ridicat (Articolul 113)',
                paragraphs: [
                    'Divergența aici este structurală, nu incrementală.',
                    'Comisia menține logica cadrului original, în care aplicarea obligațiilor pentru risc ridicat este legată, cel puțin parțial, de disponibilitatea standardelor armonizate, cu date de rezervă ca măsură de protecție.',
                    'Atât Consiliul, cât și Parlamentul se îndepărtează de această abordare. Ele introduc date fixe de aplicare — decembrie 2027 pentru sistemele din Anexa III și august 2028 pentru sistemele din Anexa I — decuplând explicit intrarea în vigoare a obligațiilor pentru risc ridicat de progresul standardizării.',
                    'Parlamentul prezintă acest lucru ca evitare a „mutării porților” pentru industrie. În practică, înlocuiește un model de conformitate condus de standarde cu unul condus de calendar. Întârzierile în stabilirea standardelor nu se vor mai traduce în timp suplimentar pentru implementare.',
                ],
            },
            {
                heading: 'Obligații de transparență (Articolul 50)',
                paragraphs: [
                    'În privința transparenței, Comisia introduce un mecanism de amânare, extinzând aplicabilitatea anumitor obligații pentru sistemele aflate deja pe piață.',
                    'Consiliul se aliniază acestei abordări.',
                    'Parlamentul scurtează prelungirea, aducând termenul la noiembrie 2026. Justificarea este legată de abordarea mai rapidă a riscurilor de tip deepfake. Aceasta reflectă tendința mai largă a textului Parlamentului de a prioritiza mitigarea riscurilor în detrimentul flexibilității tranzitorii.',
                ],
            },
            {
                heading: 'Înregistrare (Articolul 6(3))',
                paragraphs: [
                    'Comisia propune eliminarea cerințelor de înregistrare pentru sistemele non-risc-ridicat din Anexa III.',
                    'Consiliul păstrează înregistrarea, dar simplifică cerințele asociate de date.',
                    'Parlamentul menține înregistrarea și adaugă un nivel suplimentar: furnizorii trebuie să păstreze documentație internă care demonstrează calificarea sistemelor lor ca non-risc-ridicat pentru zece ani.',
                    'Aceasta indică o schimbare mai largă a abordării Parlamentului. Calificarea nu mai este tratată ca un exercițiu static de categorisire, ci ca o decizie care necesită documentare, păstrare și potențială justificare ex post.',
                ],
            },
            {
                heading: 'Alfabetizare AI (Articolul 4)',
                paragraphs: [
                    'Comisia elimină complet obligația.',
                    'Consiliul o păstrează într-o formă redusă, limitând aplicarea la personalul implicat în sistemele cu risc ridicat.',
                    'Parlamentul păstrează obligația, atenuând formularea prin înlocuirea cerinței stricte cu un standard de „susținere”, încadrând-o efectiv ca obligație de tip „best-effort”.',
                    'Ce este în joc depășește simpla instruire. Este vorba despre dacă guvernanța AI constituie o cerință organizațională orizontală sau o obligație limitată la funcții specifice.',
                ],
            },
            {
                heading: 'Prelucrarea datelor sensibile pentru bias (noul Articol 4a)',
                paragraphs: [
                    'Comisia coboară pragul pentru prelucrarea categoriilor speciale de date la un standard general de „necesitate” pentru toate sistemele AI.',
                    'Atât Consiliul, cât și Parlamentul resping această abordare. Ele păstrează pragul „strict necesar” și îi limitează utilizarea la contexte cu risc mai ridicat.',
                    'Această poziție se aliniază preocupărilor autorităților de protecție a datelor și păstrează o bară mai înaltă pentru utilizarea datelor sensibile. În termeni practici, restrânge dependența strategiilor de detectare și mitigare a bias-ului de categoriile speciale de date.',
                ],
            },
            {
                heading: 'Puterile Oficiului AI (Articolul 75)',
                paragraphs: [
                    'Comisia consolidează rolul Oficiului AI ca organism central de supraveghere, în special pentru AI de uz general.',
                    'Consiliul acceptă această direcție, introducând excepții explicite pentru aplicarea legii și securitatea națională, păstrând controlul statelor membre în aceste domenii.',
                    'Parlamentul accentuează și mai mult centralizarea, poziționând Oficiul AI ca „one-stop-shop” de facto pentru supravegherea GPAI și susținând extinderea resurselor.',
                    'Tensiunea de fond este familiară: supravegherea centralizată la nivelul Uniunii versus păstrarea prerogativelor naționale. Rezultatul determină gradul de consistență al aplicării între jurisdicții.',
                ],
            },
            {
                heading: 'Proporționalitate pentru SMC (Articolele 71–72)',
                paragraphs: [
                    'Comisia extinde măsurile de proporționalitate de tip IMM la Small Mid-Caps.',
                    'Atât Consiliul, cât și Parlamentul sunt de acord cu această abordare.',
                    'Parlamentul adaugă un element operațional: sandbox-urile regulatorii din lumea reală ar trebui să fie puse la dispoziție gratuit pentru SMC-uri. Acesta este unul dintre puținele domenii în care cele trei instituții converg cu fricțiune limitată.',
                ],
            },
            {
                heading: 'Ce urmează',
                paragraphs: [
                    'Dosarul intră în negocierile din trialoguri, unde Comisia, Consiliul și Parlamentul European vor reconcilia pozițiile într-un text unic de compromis. Niciun calendar oficial nu a fost stabilit public, dar trialogurile sunt așteptate să înceapă în săptămânile următoare.',
                    'Conform practicii legislative standard a UE, rezultatul nu va reflecta complet nicio poziție instituțională unică, ci mai degrabă un echilibru negociat de-a lungul liniilor de fractură principale. Având în vedere domeniul relativ țintit al Omnibus, procesul se va mișca probabil mai repede decât negocierile inițiale ale AI Act, deși elementele sensibile politic pot necesita discuții prelungite.',
                    'Din punct de vedere practic, aceasta este faza finală în care textul rămâne fluid. Odată ce se ajunge la acord în trialoguri, regulamentul se va îndrepta rapid spre adoptarea formală, lăsând puțin loc pentru modificări substanțiale ulterioare.',
                    'Următoarea ediție a The AI Act Guy va analiza regimul sistemelor AI cu risc ridicat și implementarea practică a conformității.',
                ],
            },
        ],
    },
};

type Section = {
    heading: string;
    isPartHeading?: boolean;
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
                            <div className="mb-6">
                                {c.body.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                ))}
                            </div>
                        </RevealAnimation>

                        {/* Sections */}
                        {c.sections.map((section: Section, idx: number) => (
                            <RevealAnimation key={idx} delay={0.05 * (idx + 1)} direction="fade">
                                {section.isPartHeading ? (
                                    <div className="mt-12 mb-6 pb-3 border-b-2 border-primary-200">
                                        <h2 className="text-2xl md:text-3xl font-bold text-primary-700">
                                            {section.heading}
                                        </h2>
                                    </div>
                                ) : (
                                    <div className="mb-10">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
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
                                                        <span>{b.bold ? <><strong>{b.bold}</strong>{b.text}</> : b.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {section.afterBullets?.map((p, i) => (
                                            <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                        ))}
                                    </div>
                                )}
                            </RevealAnimation>
                        ))}

                        {/* CTA */}
                        <RevealAnimation delay={0.3} direction="fade">
                            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                                <p className="text-lg text-gray-700 mb-6">
                                    {language === 'en'
                                        ? 'Want to discuss how the EU AI Act applies to your organization?'
                                        : 'Vrei să discuți cum se aplică EU AI Act organizației tale?'}
                                </p>
                                <a
                                    href="https://calendly.com/senecai-consulting/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block relative overflow-hidden px-8 py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-semibold rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100"
                                >
                                    <span className="relative z-10">
                                        {language === 'en' ? 'Book a Free Consultation' : 'Programează o consultație gratuită'}
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
