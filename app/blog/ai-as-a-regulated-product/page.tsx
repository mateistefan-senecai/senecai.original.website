'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'AI as a Regulated Product: How the AI Act and the Product Liability Directive Work Together',
        date: 'March 9, 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 Back to Resource Hub',
        body: `Hi \u2014 my name is Matei Stefan. I am a legal professional working at the intersection of law, tech and AI, and I welcome you to the third edition of The AI Act Guy.

The AI Act operates within a broader regulatory context. For companies deploying AI systems in Europe, compliance with the AI Act alone doesn\u2019t fully address legal exposure. The EU has created a dual regulatory architecture: the AI Act establishes ex ante product safety obligations, while the revised Product Liability Directive governs post-harm responsibility allocation.

This represents a fundamental shift in how EU law treats software. Rather than occupying a distinct regulatory category governed primarily through data protection or platform regulation, AI systems now fall under the same framework historically applied to industrial products like medical devices, elevators, and automobiles.`,
        sections: [
            {
                heading: 'The First Pillar: AI Act as Product Safety Framework',
                paragraphs: [
                    'The AI Act derives from Article 114 of the Treaty on the Functioning of the European Union, the standard legal basis for internal market harmonization measures. It follows the New Legislative Framework model, which establishes essential requirements for products before market placement, with detailed technical specifications developed by European standardization bodies (CEN and CENELEC).',
                    'Applied to AI, this framework creates prescriptive obligations for high-risk system providers, covering risk management, data governance, documentation, human oversight, and post-market monitoring. High-risk systems must comply with these requirements, undergo conformity assessment, and obtain CE marking before market placement.',
                    'The AI Act functions as the ex ante safety layer, defining conditions for legal market placement.',
                ],
            },
            {
                heading: 'The Second Pillar: Product Liability in the AI Age',
                paragraphs: [
                    'The revised Product Liability Directive, becoming applicable in December 2026, addresses harm caused by AI systems. It explicitly clarifies that software \u2014 including AI systems \u2014 qualifies as a product under EU product liability law, subjecting AI to strict liability regimes regardless of negligence demonstration.',
                    'Importantly, the directive\u2019s scope extends beyond high-risk systems as defined by the AI Act. Any AI system causing compensable damage may trigger liability.',
                    'Together, these instruments create complementary regulatory layers: the AI Act establishes ex ante safety obligations, while the Product Liability Directive determines ex post liability allocation when safeguards fail.',
                ],
            },
            {
                heading: 'Evidentiary Challenges and the \u201CBlack Box\u201D Problem',
                paragraphs: [
                    'The revised directive introduces significant changes to evidentiary frameworks for AI-related cases:',
                ],
                bullets: [
                    { bold: 'Software Classification:', text: ' The directive explicitly confirms that software qualifies as a product, ensuring AI falls within EU product liability law\u2019s strict liability regime.' },
                    { bold: 'Evidence Disclosure:', text: ' Injured parties presenting plausible claims may request access to technical documentation, logs, and other evidence assessing whether defects caused damage. Courts must balance these requests against trade secret and intellectual property protections.' },
                    { bold: 'Burden of Proof Reversal:', text: ' Courts may shift the burden to producers when defects in AI systems likely caused damage \u2014 particularly in technically complex cases. Producers must then demonstrate non-defectiveness or alternative causation.' },
                    { bold: 'Critical Link to AI Act:', text: ' Non-compliance with AI Act safety or transparency requirements \u2014 such as inadequate logging or documentation \u2014 allows courts to presume AI system defects, converting regulatory failure into liability exposure.' },
                ],
                afterBullets: [
                    'Documentation and traceability obligations gain additional significance. Logging mechanisms and technical documentation function both as compliance elements and central components of liability defense strategy.',
                ],
            },
            {
                heading: 'The Broader Regulatory Ecosystem',
                paragraphs: [
                    'AI deployment triggers multiple concurrent regulatory regimes:',
                ],
                bullets: [
                    { bold: 'GDPR:', text: ' Governs personal data processing; concurrent application requires additional assessments like Data Protection Impact Assessments.' },
                    { bold: 'Cyber Resilience Act:', text: ' Cybersecurity-by-design obligations reinforce AI Act requirements regarding robustness and resilience.' },
                    { bold: 'Cybersecurity Act:', text: ' Certification schemes support conformity presumptions.' },
                    { bold: 'Digital Services Act and Digital Markets Act:', text: ' For large platforms and gatekeepers, AI Act transparency controls layer onto existing systemic risk, competition, and transparency obligations.' },
                    { bold: 'Medical Device Regulation:', text: ' AI components integrate into existing conformity assessment ecosystems, often requiring parallel audits.' },
                ],
                afterBullets: [
                    'Additional applicable legislation may include the Data Act, NIS2 Directive, consumer protection law, and sector-specific frameworks governing financial services and other industries.',
                    'AI compliance typically requires multi-regime mapping rather than single-regulation review.',
                ],
            },
            {
                heading: 'Strategic Recommendations to Reduce Liability Exposure',
                paragraphs: [
                    'Companies should treat compliance as risk management and liability mitigation rather than mere regulatory exercise.',
                    'For Founders and Executives:',
                ],
                bullets: [
                    { bold: 'Provider Qualification Assessment:', text: ' Companies placing AI systems under their own name \u2014 including white-label products \u2014 may qualify as providers under the AI Act, assuming full regulatory responsibility regardless of underlying model development.' },
                    { bold: 'Supply-Chain Due Diligence:', text: ' Evaluate upstream model providers, data suppliers, and system integrators from technical and contractual perspectives. While contracts allocate inter-partner risk, they don\u2019t eliminate statutory liability to injured parties.' },
                    { bold: 'Organizational AI Literacy:', text: ' Article 4 requires providers and deployers ensure adequate AI literacy among personnel interacting with systems, extending beyond engineering teams to operational and managerial staff.' },
                    { bold: 'System Change Monitoring:', text: ' Systems pre-dating AI Act application benefit from transitional arrangements, but protections disappear upon \u201Csignificant change.\u201D Product updates require regulatory evaluation before deployment.' },
                ],
                afterBullets: [
                    'For Technical and Engineering Teams:',
                ],
                bullets2: [
                    { bold: 'Design Traceability:', text: ' Maintain structured records explaining key architectural decisions and trade-offs, particularly affecting performance, interpretability, or risk mitigation.' },
                    { bold: 'Logging and Monitoring Architecture:', text: ' High-risk systems must incorporate logging mechanisms supporting lifecycle monitoring, incident investigation, and performance evaluation.' },
                    { bold: 'Continuous Technical Documentation:', text: ' Documentation should evolve alongside system development and versioning rather than retrospective production during compliance assessments.' },
                ],
                afterBullets2: [
                    'These measures serve dual functions: supporting regulatory compliance while providing evidentiary foundations for liability defense.',
                ],
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'The EU has integrated AI systems into longstanding product safety and liability frameworks, representing structural recalibration of software regulation within the internal market.',
                    'The AI Act establishes market placement conditions. The revised Product Liability Directive determines responsibility allocation when systems cause damage.',
                    'For founders, CTOs, and product teams, the implication is clear: AI systems are no longer assessed solely as code artifacts or digital services. They represent regulated products subject to both ex ante compliance requirements and ex post liability exposure.',
                    'Early recognition of this shift \u2014 with integrated compliance, engineering practice, and risk management \u2014 positions companies better for navigating emerging regulatory landscapes.',
                ],
            },
        ],
    },
    ro: {
        title: 'AI ca produs reglementat: Cum func\u021Bioneaz\u0103 \u00EEmpreun\u0103 AI Act \u0219i Directiva privind R\u0103spunderea pentru Produse',
        date: '9 martie 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        body: `Bun\u0103 \u2014 m\u0103 numesc Matei Stefan. Sunt un profesionist juridic care lucreaz\u0103 la intersec\u021Bia dintre drept, tehnologie \u0219i AI, \u0219i v\u0103 bine\u00EEntampin la a treia edi\u021Bie The AI Act Guy.

AI Act opereaz\u0103 \u00EEntr-un context de reglementare mai larg. Pentru companiile care implementeaz\u0103 sisteme AI \u00EEn Europa, conformitatea cu AI Act singur nu acoper\u0103 complet expunerea juridic\u0103. UE a creat o arhitectur\u0103 regulatorie dual\u0103: AI Act stabileste obliga\u021Bii de siguran\u021B\u0103 ex ante, \u00EEn timp ce Directiva revizuit\u0103 privind R\u0103spunderea pentru Produse guverneaz\u0103 alocarea responsabilit\u0103\u021Bii post-prejudiciu.

Aceasta reprezint\u0103 o schimbare fundamental\u0103 \u00EEn modul \u00EEn care dreptul UE trateaz\u0103 software-ul. \u00CEn loc s\u0103 ocupe o categorie de reglementare distinct\u0103 guvernat\u0103 \u00EEn principal prin protec\u021Bia datelor sau reglementarea platformelor, sistemele AI intr\u0103 acum sub acela\u0219i cadru aplicat istoric produselor industriale precum dispozitivele medicale, lifturile \u0219i automobilele.`,
        sections: [
            {
                heading: 'Primul pilon: AI Act ca cadru de siguran\u021B\u0103 a produselor',
                paragraphs: [
                    'AI Act deriv\u0103 din Articolul 114 al Tratatului privind Func\u021Bionarea Uniunii Europene, baza juridic\u0103 standard pentru m\u0103surile de armonizare a pie\u021Bei interne. Urmeaz\u0103 modelul Noului Cadru Legislativ, care stabile\u0219te cerin\u021Be esen\u021Biale pentru produse \u00EEnainte de plasarea pe pia\u021B\u0103, cu specifica\u021Bii tehnice detaliate elaborate de organismele europene de standardizare (CEN \u0219i CENELEC).',
                    'Aplicat AI-ului, acest cadru creeaz\u0103 obliga\u021Bii prescriptive pentru furnizorii de sisteme cu risc ridicat, acoper\u00E2nd managementul riscului, guvernan\u021Ba datelor, documenta\u021Bia, supravegherea uman\u0103 \u0219i monitorizarea post-pia\u021B\u0103. Sistemele cu risc ridicat trebuie s\u0103 respecte aceste cerin\u021Be, s\u0103 efectueze o evaluare a conformit\u0103\u021Bii \u0219i s\u0103 ob\u021Bin\u0103 marcajul CE \u00EEnainte de plasarea pe pia\u021B\u0103.',
                    'AI Act func\u021Bioneaz\u0103 ca stratul de siguran\u021B\u0103 ex ante, definind condi\u021Biile pentru plasarea legal\u0103 pe pia\u021B\u0103.',
                ],
            },
            {
                heading: 'Al doilea pilon: R\u0103spunderea pentru produse \u00EEn era AI',
                paragraphs: [
                    'Directiva revizuit\u0103 privind R\u0103spunderea pentru Produse, care devine aplicabil\u0103 \u00EEn decembrie 2026, abordeaz\u0103 prejudiciile cauzate de sistemele AI. Clarific\u0103 explicit c\u0103 software-ul \u2014 inclusiv sistemele AI \u2014 se calific\u0103 ca produs \u00EEn temeiul dreptului UE privind r\u0103spunderea pentru produse, supun\u00E2nd AI regimurilor de r\u0103spundere strict\u0103 indiferent de demonstrarea neglijen\u021Bei.',
                    'Important, domeniul de aplicare al directivei dep\u0103\u0219e\u0219te sistemele cu risc ridicat a\u0219a cum sunt definite de AI Act. Orice sistem AI care cauzeaz\u0103 daune compensabile poate declan\u0219a r\u0103spunderea.',
                    '\u00CEmpreun\u0103, aceste instrumente creeaz\u0103 straturi de reglementare complementare: AI Act stabileste obliga\u021Bii de siguran\u021B\u0103 ex ante, \u00EEn timp ce Directiva privind R\u0103spunderea pentru Produse determin\u0103 alocarea r\u0103spunderii ex post atunci c\u00E2nd m\u0103surile de protec\u021Bie e\u0219ueaz\u0103.',
                ],
            },
            {
                heading: 'Provoc\u0103ri probatorii \u0219i problema \u201Ecutiei negre\u201D',
                paragraphs: [
                    'Directiva revizuit\u0103 introduce schimb\u0103ri semnificative la cadrul probatoriu pentru cazurile legate de AI:',
                ],
                bullets: [
                    { bold: 'Clasificarea software-ului:', text: ' Directiva confirm\u0103 explicit c\u0103 software-ul se calific\u0103 ca produs, asigur\u00E2nd c\u0103 AI intr\u0103 sub regimul de r\u0103spundere strict\u0103 al dreptului UE privind r\u0103spunderea pentru produse.' },
                    { bold: 'Divulgarea probelor:', text: ' P\u0103r\u021Bile v\u0103t\u0103mate care prezint\u0103 cereri plauzibile pot solicita acces la documenta\u021Bia tehnic\u0103, jurnale \u0219i alte probe care evalueaz\u0103 dac\u0103 defectele au cauzat daune. Instan\u021Bele trebuie s\u0103 echilibreze aceste solicit\u0103ri \u00EEmpotriva protec\u021Biei secretelor comerciale \u0219i a propriet\u0103\u021Bii intelectuale.' },
                    { bold: 'Inversarea sarcinii probei:', text: ' Instan\u021Bele pot transfera sarcina produc\u0103torilor atunci c\u00E2nd defectele sistemelor AI au cauzat probabil daune \u2014 \u00EEn special \u00EEn cazuri tehnic complexe. Produc\u0103torii trebuie s\u0103 demonstreze then lipsa defectelor sau cauzalitatea alternativ\u0103.' },
                    { bold: 'Leg\u0103tura critic\u0103 cu AI Act:', text: ' Neconformitatea cu cerin\u021Bele de siguran\u021B\u0103 sau transparen\u021B\u0103 ale AI Act \u2014 cum ar fi jurnalele sau documenta\u021Bia inadecvate \u2014 permite instan\u021Belor s\u0103 presupun\u0103 defecte ale sistemului AI, transformand e\u0219ecul de reglementare \u00EEn expunere la r\u0103spundere.' },
                ],
                afterBullets: [
                    'Obliga\u021Biile de documentare \u0219i trasabilitate c\u00E2\u0219tig\u0103 o semnifica\u021Bie suplimentar\u0103. Mecanismele de \u00EEnregistrare \u0219i documenta\u021Bia tehnic\u0103 func\u021Bioneaz\u0103 at\u00E2t ca elemente de conformitate, c\u00E2t \u0219i ca componente centrale ale strategiei de ap\u0103rare \u00EEn materie de r\u0103spundere.',
                ],
            },
            {
                heading: 'Ecosistemul de reglementare mai larg',
                paragraphs: [
                    'Implementarea AI declan\u0219eaz\u0103 mai multe regimuri de reglementare concurente:',
                ],
                bullets: [
                    { bold: 'GDPR:', text: ' Guverneaz\u0103 prelucrarea datelor personale; aplicarea concurent\u0103 necesit\u0103 evalu\u0103ri suplimentare precum Evalu\u0103rile de Impact asupra Protec\u021Biei Datelor.' },
                    { bold: 'Actul privind Rezilien\u021Ba Cibernetic\u0103:', text: ' Obliga\u021Biile de securitate cibernetic\u0103 prin proiectare consolideaz\u0103 cerin\u021Bele AI Act privind robuste\u021Bea \u0219i rezilien\u021Ba.' },
                    { bold: 'Actul privind Securitatea Cibernetic\u0103:', text: ' Schemele de certificare sprijin\u0103 prezum\u021Biile de conformitate.' },
                    { bold: 'Actul privind Serviciile Digitale \u0219i Actul privind Pie\u021Bele Digitale:', text: ' Pentru platformele mari \u0219i gardienii de acces, controalele de transparen\u021B\u0103 ale AI Act se suprapun cu obliga\u021Biile existente privind riscul sistemic, concuren\u021Ba \u0219i transparen\u021Ba.' },
                    { bold: 'Regulamentul privind Dispozitivele Medicale:', text: ' Componentele AI se integreaz\u0103 \u00EEn ecosistemele existente de evaluare a conformit\u0103\u021Bii, necesit\u00E2nd adesea audituri paralele.' },
                ],
                afterBullets: [
                    'Legisla\u021Bia aplicabil\u0103 suplimentar\u0103 poate include Actul privind Datele, Directiva NIS2, dreptul protec\u021Biei consumatorilor \u0219i cadrele sectoriale specifice care guverneaz\u0103 serviciile financiare \u0219i alte industrii.',
                    'Conformitatea AI necesit\u0103 de obicei cartografierea multi-regim, nu revizuirea unui singur regulament.',
                ],
            },
            {
                heading: 'Recomand\u0103ri strategice pentru reducerea expunerii la r\u0103spundere',
                paragraphs: [
                    'Companiile ar trebui s\u0103 trateze conformitatea ca gestionare a riscului \u0219i atenuare a r\u0103spunderii, nu ca simplu exerci\u021Biu de reglementare.',
                    'Pentru fondatori \u0219i executivi:',
                ],
                bullets: [
                    { bold: 'Evaluarea calit\u0103\u021Bii de furnizor:', text: ' Companiile care plaseaz\u0103 sisteme AI sub numele lor \u2014 inclusiv produsele white-label \u2014 se pot califica drept furnizori \u00EEn temeiul AI Act, asumandu-\u0219i toat\u0103 responsabilitatea de reglementare, indiferent de dezvoltarea modelului de baz\u0103.' },
                    { bold: 'Due diligence \u00EEn lan\u021Bul de aprovizionare:', text: ' Evalua\u021Bi furnizorii de modele din amonte, furnizorii de date \u0219i integratorii de sisteme din perspectiv\u0103 tehnic\u0103 \u0219i contractual\u0103. De\u0219i contractele aloc\u0103 riscul \u00EEntre parteneri, ele nu elimin\u0103 r\u0103spunderea legal\u0103 fa\u021B\u0103 de p\u0103r\u021Bile v\u0103t\u0103mate.' },
                    { bold: 'Alfabetizarea AI organiza\u021Bional\u0103:', text: ' Articolul 4 impune furnizorilor \u0219i operatorilor s\u0103 asigure alfabetizarea AI adecvat\u0103 a personalului care interac\u021Bioneaz\u0103 cu sistemele, extinz\u00E2ndu-se dincolo de echipele de inginerie la personalul opera\u021Bional \u0219i managerial.' },
                    { bold: 'Monitorizarea modific\u0103rilor sistemului:', text: ' Sistemele anterioare datei de aplicare a AI Act beneficiaz\u0103 de aranjamente tranzitorii, dar protec\u021Biile dispar odat\u0103 cu \u201Eschimbarea semnificativ\u0103\u201D. Actualiz\u0103rile de produse necesit\u0103 evaluare de reglementare \u00EEnainte de implementare.' },
                ],
                afterBullets: [
                    'Pentru echipele tehnice \u0219i de inginerie:',
                ],
                bullets2: [
                    { bold: 'Trasabilitatea proiect\u0103rii:', text: ' Men\u021Bine\u021Bi \u00EEnregistr\u0103ri structurate care explic\u0103 deciziile arhitecturale cheie \u0219i compromisurile, \u00EEn special cele care afecteaz\u0103 performan\u021Ba, interpretabilitatea sau atenuarea riscului.' },
                    { bold: 'Arhitectura de \u00EEnregistrare \u0219i monitorizare:', text: ' Sistemele cu risc ridicat trebuie s\u0103 incorporate mecanisme de \u00EEnregistrare care sprijin\u0103 monitorizarea ciclului de via\u021B\u0103, investigarea incidentelor \u0219i evaluarea performan\u021Bei.' },
                    { bold: 'Documenta\u021Bie tehnic\u0103 continu\u0103:', text: ' Documenta\u021Bia ar trebui s\u0103 evolueze al\u0103turi de dezvoltarea \u0219i versionarea sistemului, nu produc\u021Bia retrospectiv\u0103 \u00EEn timpul evalu\u0103rilor de conformitate.' },
                ],
                afterBullets2: [
                    'Aceste m\u0103suri servesc func\u021Bii duale: sprijinind conformitatea de reglementare \u00EEn timp ce ofer\u0103 funda\u021Bie probatorie pentru ap\u0103rarea \u00EEmpotriva r\u0103spunderii.',
                ],
            },
            {
                heading: 'Concluzie',
                paragraphs: [
                    'UE a integrat sistemele AI \u00EEn cadrele consacrate de siguran\u021B\u0103 a produselor \u0219i r\u0103spundere, reprezent\u00E2nd o recalibrare structural\u0103 a reglement\u0103rii software-ului pe pia\u021Ba intern\u0103.',
                    'AI Act stabileste condi\u021Biile de plasare pe pia\u021B\u0103. Directiva revizuit\u0103 privind R\u0103spunderea pentru Produse determin\u0103 alocarea responsabilit\u0103\u021Bii atunci c\u00E2nd sistemele cauzeaz\u0103 daune.',
                    'Pentru fondatori, CTO-uri \u0219i echipele de produs, implica\u021Bia este clar\u0103: sistemele AI nu mai sunt evaluate exclusiv ca artefacte de cod sau servicii digitale. Ele reprezint\u0103 produse reglementate supuse at\u00E2t cerin\u021Belor de conformitate ex ante, c\u00E2t \u0219i expunerii la r\u0103spundere ex post.',
                    'Recunoa\u0219terea timpurie a acestei schimb\u0103ri \u2014 cu conformitate integrat\u0103, practic\u0103 de inginerie \u0219i gestionare a riscului \u2014 pozi\u021Bioneaz\u0103 companiile mai bine pentru navigarea peisajelor de reglementare emergente.',
                ],
            },
        ],
    },
};

type Bullet = { bold: string; text: string };
type Section = {
    heading: string;
    paragraphs?: string[];
    bullets?: Bullet[];
    afterBullets?: string[];
    bullets2?: Bullet[];
    afterBullets2?: string[];
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
                            <div className="prose prose-lg max-w-none mb-10">
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
                                    {section.bullets2 && (
                                        <ul className="space-y-3 mb-4">
                                            {section.bullets2.map((b, i) => (
                                                <li key={i} className="flex items-start gap-3 text-gray-700">
                                                    <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                    <span><strong>{b.bold}</strong>{b.text}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    {section.afterBullets2?.map((p, i) => (
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
