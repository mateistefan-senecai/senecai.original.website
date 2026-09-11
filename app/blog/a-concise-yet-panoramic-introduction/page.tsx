'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'A Concise Yet Panoramic Introduction to the EU AI Act',
        date: 'March 7, 2026',
        author: 'Matei Ștefan',
        backLabel: '\u2190 Back to Resource Hub',
        imageCaption: 'Johannes Vermeer \u2014 \u201CThe Geographer\u201D (1669). Vermeer\u2019s 17th-century geographer studies maps, instruments, and documents to understand the structure of the world. Analogously, the modern AI governance expert studies the AI Act to chart the legal terrain within which modern AI systems must operate.',
        body: `Hi \u2014 my name is Matei Stefan. I am a legal professional working at the intersection of law, tech and AI, and I welcome you to the second edition of The AI Act Guy, where I will provide a high-level overview of the most relevant aspects of the EU AI Act.`,
        tocLabel: 'This edition covers:',
        toc: [
            'The legislative path',
            'The world\u2019s first horizontal, risk-based AI law',
            'The actors under the EU AIA',
            'GPAIs and their systemic risk',
            'Enforcement and fines',
            'Conformity assessment and CE marking',
            'The legislative gap: agentic systems',
        ],
        note: 'Note: This edition discusses the current state of the EU AI Act as of March 2026. Please be aware that the European Commission has introduced the \u2018AI Omnibus\u2019 proposals (November 2025), which aim to adjust compliance timelines and fine structures for SMEs and SMCs. The proposal is currently debated by the EU co-legislators.',
        sections: [
            {
                heading: 'The Legislative Path',
                paragraphs: [
                    'The AIA is a Regulation, meaning a type of EU legislative act that is directly applicable in all Member States without the need for national transposition.',
                    'The Commission first released its proposal back in 2021. What followed were two years of negotiations between the European Parliament and the Council. In December 2023, political consensus was finally reached. The Regulation then entered into force in August 2024, with staggered application dates.',
                    'Before this hard law instrument, there were several soft law initiatives that effectively laid the groundwork for the AIA: The Ethics Guidelines for Trustworthy AI, the Coordinated Plan on Artificial Intelligence, and the European Strategy for Data all served as a conceptual bedrock.',
                ],
            },
            {
                heading: 'The World\u2019s First Horizontal, Risk-Based AI Law',
                paragraphs: [
                    'The EU AI Act is horizontal and comprehensive. Horizontal means it applies across sectors rather than regulating a single industry. Comprehensive means it attempts to create a complete governance framework for AI systems placed on the EU market.',
                    'Its architecture is built around a risk-based approach.',
                    'At the highest level, certain AI use cases are so dangerous for fundamental rights \u2014 privacy, dignity, non-discrimination, equality, freedom of expression \u2014 that they are prohibited outright. These are the unacceptable risk systems.',
                    'Below that sits the high-risk category. These are AI systems deployed in sensitive sectors where automated decision-making can significantly affect individuals\u2019 rights and life chances. Think healthcare, education, employment, credit scoring, law enforcement, migration, and the administration of justice (see Annex III). The common denominator is clear: protection of fundamental rights is the cornerstone of the Regulation.',
                    'There is an additional structural layer here. In its essence, the AI Act borrows heavily from EU product safety law. AI systems are treated as products. Software is explicitly recognised as a product in a liability context. Annex I lists existing product safety legislation that, when combined with AI components, triggers AI Act obligations.',
                    'Moving one layer down, we have the limited risk category. These systems are not inherently high-risk, but they raise transparency concerns. The typical example is chatbots or systems generating synthetic content: users must be informed that they are interacting with AI or that content is artificially generated.',
                    'At the bottom sits the minimal or no-risk category. The vast majority of AI applications fall here \u2014 spam filters, AI in video games, basic recommendation engines. These are largely left unregulated under the AI Act.',
                ],
            },
            {
                heading: 'The Actors Under the EU AIA',
                paragraphs: [
                    'The Regulation defines a number of operators:',
                ],
                bullets: [
                    { bold: 'Provider', text: ' \u2014 the entity that develops or has an AI system developed and places it on the market under its name.' },
                    { bold: 'Deployer', text: ' \u2014 the entity using the AI system in a professional context.' },
                    { bold: 'Importer and Distributor', text: ' \u2014 economic operators placing systems on the EU market.' },
                    { bold: 'Authorised Representative', text: ' \u2014 designated by providers established outside the EU.' },
                    { bold: 'GPAI provider and downstream provider', text: ' \u2014 specific categories for general-purpose AI models and those integrating them into downstream systems.' },
                ],
                afterBullets: [
                    'The allocation of obligations depends heavily on this qualification exercise.',
                    'The Regulation also has a clear extraterritorial dimension. Like the GDPR, it applies not only to EU-based entities, but also to actors outside the Union who place AI systems on the EU market or whose outputs are used within the EU.',
                ],
            },
            {
                heading: 'General-Purpose AI and Its Systemic Risk',
                paragraphs: [
                    'Not all rules in the AI Act are structured strictly around use-case risk categories. There is a separate regime for general-purpose AI models (GPAIs) and, more specifically, for GPAI models with systemic risk.',
                    'All GPAI providers must maintain technical documentation, instructions for use, and a policy to respect EU copyright law. For those models classified as having systemic risk \u2014 typically based on high computational power \u2014 the burden is significantly higher, requiring mandatory model evaluations, adversarial testing, and the reporting of serious incidents to the AI Office.',
                    'These obligations are tied to capability and scale, not to sectoral deployment. Enforcement and oversight for these actors are partially centralised at the EU level, under the authority of the EU AI Office \u2014 which is a recently founded structure within the EU Commission.',
                ],
            },
            {
                heading: 'Enforcement and Fines',
                paragraphs: [
                    'Enforcement follows a dual structure.',
                    'At national level, each Member State must designate a national competent authority responsible for supervising compliance, particularly for high-risk systems. These authorities mirror the enforcement logic we already know from the GDPR.',
                    'At central level, a new body within the European Commission \u2014 the European AI Office \u2014 has been created to oversee general-purpose AI models, especially those posing systemic risks.',
                    'Penalties follow a logic broadly comparable to the GDPR, reaching up to a set percentage of global annual turnover or a fixed administrative cap \u2014 whichever is higher. However, for SMEs and Small Mid-Caps (SMCs), the November 2025 amending proposal \u2014 the Digital Omnibus \u2014 introduces a critical safeguard: the applicable fine will instead be the lower of the two values, ensuring that sanctions remain proportionate to the financial reality of smaller innovators.',
                ],
            },
            {
                heading: 'Conformity Assessments and CE Marking',
                paragraphs: [
                    'For high-risk AI systems, providers must undergo a conformity assessment before placing the system on the market, which entails:',
                ],
                bullets: [
                    { bold: '', text: 'Establishing a risk management system' },
                    { bold: '', text: 'Ensuring data governance and quality' },
                    { bold: '', text: 'Implementing technical documentation' },
                    { bold: '', text: 'Guaranteeing transparency and human oversight mechanisms' },
                    { bold: '', text: 'Setting up post-market monitoring' },
                ],
                afterBullets: [
                    'Depending on the nature of the system, this assessment can be performed as an internal control (self-assessment) or through the involvement of a notified body (third-party audit). For instance, most \u2018stand-alone\u2019 high-risk systems under Annex III \u2014 such as AI used for resume filtering in recruitment or credit scoring in banking \u2014 can typically follow the internal control route, provided harmonized standards are applied. Conversely, third-party involvement is mandatory for AI systems already subject to sectoral safety laws or for specific biometric systems when harmonized standards are not fully utilized.',
                    'If the assessment is successful, the provider issues an EU Declaration of Conformity and affixes the CE marking, signalling compliance with EU law.',
                    'This reinforces the idea that the AI Act is, at its structural core, a product safety regulation adapted to algorithmic systems.',
                ],
            },
            {
                heading: 'A Legislative Gap: Agentic Systems',
                paragraphs: [
                    'The AIA classifies risk largely by reference to intended use. However, with the emergence of increasingly autonomous or agentic AI systems, risk may not remain static.',
                    'It is worth noting that the EU AIA was developed at a time when agentic AI was not yet a mainstream reality; as such, the legislation conspicuously misses directly addressing the unique challenges posed by autonomous agency.',
                    'An AI agent with broad capabilities, capable of multi-step reasoning and autonomous action, may escalate risk not because its nominal use case is listed in Annex III, but because of the scope of its operational autonomy. A system initially deployed in a low-risk environment could effectively migrate into higher-risk territory through extended capabilities or integrations.',
                    'There is already academic discussion on whether the current framework adequately captures this dynamic. A future revision of the AIA will almost certainly need to grapple with this structural tension.',
                ],
            },
            {
                heading: 'Final Thought',
                paragraphs: [
                    'The EU AI Act isn\u2019t just a new set of rules. It is a fundamental redesign of the legal framework for algorithmic systems, strengthening the still burgeoning EU tech law eco-system.',
                    'By establishing a clear hierarchy of risk and a standardized \u2018product safety\u2019 approach, the EU has provided the map, but it is up to founders and tech teams to navigate the terrain. This panoramic view is the essential baseline for any AI-driven business, yet the true work begins with individual assessment.',
                    'Stay tuned for more on the EU AI Act! The next edition will focus on the AIA\u2019s interplay with other EU legislation, in particular by framing the AIA as a primarily product legislation artefact, and will explore the practical operational consequences of the dynamic.',
                ],
            },
        ],
    },
    ro: {
        title: 'O introducere concis\u0103 dar panoramic\u0103 \u00EEn EU AI Act',
        date: '7 martie 2026',
        author: 'Matei Ștefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        imageCaption: 'Johannes Vermeer \u2014 \u201EGeograful\u201D (1669). Geograful lui Vermeer din secolul al XVII-lea studiaz\u0103 h\u0103r\u021Bi, instrumente \u0219i documente pentru a \u00EEn\u021Belege structura lumii. Analogic, expertul modern \u00EEn guvernan\u021B\u0103 AI studiaz\u0103 AI Act pentru a cartografia terenul juridic \u00EEn care trebuie s\u0103 opereze sistemele AI moderne.',
        body: `Bun\u0103 \u2014 m\u0103 numesc Matei Ștefan. Sunt un profesionist juridic care lucreaz\u0103 la intersec\u021Bia dintre drept, tehnologie \u0219i AI, \u0219i v\u0103 bine\u00EEntampin la a doua edi\u021Bie The AI Act Guy, unde voi oferi o prezentare general\u0103 a celor mai relevante aspecte ale EU AI Act.`,
        tocLabel: 'Aceast\u0103 edi\u021Bie acoper\u0103:',
        toc: [
            'Traseul legislativ',
            'Prima lege AI orizontal\u0103 \u0219i bazat\u0103 pe risc din lume',
            'Actorii sub EU AIA',
            'GPAI \u0219i riscul sistemic',
            'Aplicare \u0219i amenzi',
            'Evaluarea conformit\u0103\u021Bii \u0219i marcajul CE',
            'Gol legislativ: sistemele agentice',
        ],
        note: 'Not\u0103: Aceast\u0103 edi\u021Bie discut\u0103 starea actual\u0103 a EU AI Act la martie 2026. V\u0103 rug\u0103m s\u0103 re\u021Bine\u021Bi c\u0103 Comisia European\u0103 a introdus propunerile \u201EAI Omnibus\u201D (noiembrie 2025), care vizeaz\u0103 ajustarea termenelor de conformitate \u0219i structurii amenzilor pentru IMM-uri \u0219i SMC-uri. Propunerea este \u00EEn prezent dezbut\u0103 de co-legiuitorii UE.',
        sections: [
            {
                heading: 'Traseul legislativ',
                paragraphs: [
                    'AIA este un Regulament, adic\u0103 un tip de act legislativ UE direct aplicabil \u00EEn toate statele membre, f\u0103r\u0103 necesitatea transpunerii na\u021Bionale.',
                    'Comisia \u0219i-a publicat propunerea \u00EEn 2021. Au urmat doi ani de negocieri \u00EEntre Parlamentul European \u0219i Consiliu. \u00CEn decembrie 2023 s-a atins consensul politic. Regulamentul a intrat \u00EEn vigoare \u00EEn august 2024, cu date de aplicare e\u0219alonate.',
                    '\u00CEnainte de acest instrument de drept obligatoriu, au existat mai multe ini\u021Biative de soft law care au pus efectiv bazele AIA: Liniile directoare pentru AI de \u00EEncredere, Planul coordonat privind intligen\u021Ba artificial\u0103 \u0219i Strategia European\u0103 pentru Date au servit ca fundament conceptual.',
                ],
            },
            {
                heading: 'Prima lege AI orizontal\u0103 \u0219i bazat\u0103 pe risc din lume',
                paragraphs: [
                    'EU AI Act este orizontal \u0219i comprehensiv. Orizontal \u00EEnseamn\u0103 c\u0103 se aplic\u0103 \u00EEn toate sectoarele, nu reglementeaz\u0103 o singur\u0103 industrie. Comprehensiv \u00EEnseamn\u0103 c\u0103 \u00EEncearc\u0103 s\u0103 creeze un cadru complet de guvernan\u021B\u0103 pentru sistemele AI plasate pe pia\u021Ba UE.',
                    'Arhitectura sa este construit\u0103 pe o abordare bazat\u0103 pe risc.',
                    'La cel mai \u00EEnalt nivel, anumite utiliz\u0103ri ale AI sunt at\u00E2t de periculoase pentru drepturile fundamentale \u2014 intimitate, demnitate, nediscriminare, egalitate, libertatea de expresie \u2014 \u00EEnc\u00E2t sunt interzise direct. Acestea sunt sistemele cu risc inacceptabil.',
                    'Sub aceasta se afl\u0103 categoria de risc ridicat. Acestea sunt sisteme AI implementate \u00EEn sectoare sensibile unde deciziile automate pot afecta semnificativ drepturile \u0219i \u0219ansele individuale. G\u00E2ndi\u021Bi-v\u0103 la s\u0103n\u0103tate, educa\u021Bie, angajare, scoring de credit, aplicarea legii, migra\u021Bie \u0219i administrarea justi\u021Biei (Anexa III). Numitorul comun este clar: protec\u021Bia drepturilor fundamentale este piatra de temelie a Regulamentului.',
                    'Exist\u0103 un strat structural suplimentar. \u00CEn esen\u021Ba sa, AI Act \u00EEmprumut\u0103 mult din dreptul UE privind siguran\u021Ba produselor. Sistemele AI sunt tratate ca produse. Software-ul este recunoscut explicit ca produs \u00EEn context de r\u0103spundere. Anexa I enumer\u0103 legisla\u021Bia existent\u0103 privind siguran\u021Ba produselor care, combinat\u0103 cu componente AI, declan\u0219eaz\u0103 obliga\u021Bii AI Act.',
                    'Cobor\u00E2nd un nivel, avem categoria risc limitat. Aceste sisteme nu sunt inerent cu risc ridicat, dar ridic\u0103 probleme de transparen\u021B\u0103. Exemplul tipic sunt chatboții sau sistemele care genereaz\u0103 con\u021Binut sintetic: utilizatorii trebuie informa\u021Bi c\u0103 interac\u021Bioneaz\u0103 cu AI sau c\u0103 con\u021Binutul este generat artificial.',
                    'La baz\u0103 se afl\u0103 categoria risc minimal sau f\u0103r\u0103 risc. Marea majoritate a aplica\u021Biilor AI se \u00EEncadreaz\u0103 aici \u2014 filtre spam, AI \u00EEn jocuri video, motoare de recomandare de baz\u0103. Acestea sunt \u00EEn mare parte nereglementate de AI Act.',
                ],
            },
            {
                heading: 'Actorii sub EU AIA',
                paragraphs: [
                    'Regulamentul define\u0219te mai mul\u021Bi operatori:',
                ],
                bullets: [
                    { bold: 'Furnizor', text: ' \u2014 entitatea care dezvolt\u0103 sau comand\u0103 dezvoltarea unui sistem AI \u0219i \u00EEl plaseaz\u0103 pe pia\u021B\u0103 sub numele s\u0103u.' },
                    { bold: 'Operator', text: ' \u2014 entitatea care utilizeaz\u0103 sistemul AI \u00EEntr-un context profesional.' },
                    { bold: 'Importator \u0219i Distribuitor', text: ' \u2014 operatori economici care plaseaz\u0103 sisteme pe pia\u021Ba UE.' },
                    { bold: 'Reprezentant autorizat', text: ' \u2014 desemnat de furnizori stabili\u021Bi \u00EEn afara UE.' },
                    { bold: 'Furnizor GPAI \u0219i furnizor downstream', text: ' \u2014 categorii specifice pentru modele AI de uz general \u0219i cei care le integreaz\u0103 \u00EEn sisteme downstream.' },
                ],
                afterBullets: [
                    'Alocarea obliga\u021Biilor depinde \u00EEn mare m\u0103sur\u0103 de acest exerci\u021Biu de calificare.',
                    'Regulamentul are \u0219i o dimensiune extrateritorial\u0103 clar\u0103. Ca \u0219i GDPR, se aplic\u0103 nu doar entit\u0103\u021Bilor din UE, ci \u0219i actorilor din afara Uniunii care plaseaz\u0103 sisteme AI pe pia\u021Ba UE sau ale c\u0103ror rezultate sunt utilizate \u00EEn UE.',
                ],
            },
            {
                heading: 'AI de uz general \u0219i riscul s\u0103u sistemic',
                paragraphs: [
                    'Nu toate regulile din AI Act sunt structurate strict \u00EEn jurul categoriilor de risc ale cazului de utilizare. Exist\u0103 un regim separat pentru modelele AI de uz general (GPAI) \u0219i, mai specific, pentru modelele GPAI cu risc sistemic.',
                    'To\u021Bi furnizorii GPAI trebuie s\u0103 men\u021Bin\u0103 documenta\u021Bie tehnic\u0103, instruc\u021Biuni de utilizare \u0219i o politic\u0103 de respectare a dreptului de autor UE. Pentru acele modele clasificate ca av\u00E2nd risc sistemic \u2014 de obicei pe baza puterii de calcul ridicate \u2014 sarcina este semnificativ mai mare, necesit\u00E2nd evalu\u0103ri obligatorii ale modelelor, testare adversarial\u0103 \u0219i raportarea incidentelor grave c\u0103tre AI Office.',
                    'Aceste obliga\u021Bii sunt legate de capacitate \u0219i scal\u0103, nu de implementarea sectorial\u0103. Aplicarea \u0219i supravegherea pentru ace\u0219ti actori sunt par\u021Bial centralizate la nivel UE, sub autoritatea AI Office \u2014 o structur\u0103 recent\u0103 \u00EEn cadrul Comisiei UE.',
                ],
            },
            {
                heading: 'Aplicare \u0219i amenzi',
                paragraphs: [
                    'Aplicarea urmeaz\u0103 o structur\u0103 dual\u0103.',
                    'La nivel na\u021Bional, fiecare stat membru trebuie s\u0103 desemneze o autoritate na\u021Bional\u0103 competent\u0103 responsabil\u0103 pentru supravegherea conformit\u0103\u021Bii, \u00EEn special pentru sistemele cu risc ridicat. Aceste autorit\u0103\u021Bi oglindesc logica de aplicare deja cunoscut\u0103 din GDPR.',
                    'La nivel central, un nou organism \u00EEn cadrul Comisiei Europene \u2014 European AI Office \u2014 a fost creat pentru a supraveghea modelele AI de uz general, \u00EEn special pe cele care prezint\u0103 riscuri sistemice.',
                    'Sanc\u021Biunile urmeaz\u0103 o logic\u0103 comparabil\u0103 cu GDPR, ajung\u00E2nd p\u00E2n\u0103 la un anumit procent din cifra de afaceri global\u0103 anual\u0103 sau un plafon administrativ fix \u2014 oricare este mai mare. Totu\u0219i, pentru IMM-uri \u0219i Small Mid-Caps (SMC), propunerea de modificare din noiembrie 2025 \u2014 Digital Omnibus \u2014 introduce o garan\u021Bie critic\u0103: amenda aplicabil\u0103 va fi cea mai mic\u0103 dintre cele dou\u0103 valori, asigur\u00E2nd c\u0103 sanc\u021Biunile r\u0103m\u00E2n propor\u021Bionale cu realitatea financiar\u0103 a inovatorilor mai mici.',
                ],
            },
            {
                heading: 'Evalu\u0103ri de conformitate \u0219i marcajul CE',
                paragraphs: [
                    'Pentru sistemele AI cu risc ridicat, furnizorii trebuie s\u0103 efectueze o evaluare a conformit\u0103\u021Bii \u00EEnainte de a plasa sistemul pe pia\u021B\u0103, care implic\u0103:',
                ],
                bullets: [
                    { bold: '', text: 'Stabilirea unui sistem de management al riscului' },
                    { bold: '', text: 'Asigurarea guvernan\u021Bei \u0219i calit\u0103\u021Bii datelor' },
                    { bold: '', text: 'Implementarea documenta\u021Biei tehnice' },
                    { bold: '', text: 'Garantarea transparen\u021Bei \u0219i a mecanismelor de supraveghere uman\u0103' },
                    { bold: '', text: 'Configurarea monitoriz\u0103rii post-pia\u021B\u0103' },
                ],
                afterBullets: [
                    '\u00CEn func\u021Bie de natura sistemului, aceast\u0103 evaluare poate fi efectuat\u0103 ca un control intern (auto-evaluare) sau prin implicarea unui organism notificat (audit ter\u021B\u0103). De exemplu, majoritatea sistemelor cu risc ridicat \u201Estate autonome\u201D din Anexa III \u2014 cum ar fi AI utilizat pentru filtrarea CV-urilor \u00EEn recrutare sau scoring-ul de credit \u00EEn bancar \u2014 pot urma de obicei calea controlului intern, cu condi\u021Bia aplic\u0103rii standardelor armonizate. Dimpotriv\u0103, implicarea ter\u021Bilor este obligatorie pentru sistemele AI deja supuse legilor de siguran\u021B\u0103 sectoriale sau pentru sisteme biometrice specifice c\u00E2nd standardele armonizate nu sunt utilizate pe deplin.',
                    'Dac\u0103 evaluarea are succes, furnizorul emite o Declara\u021Bie de conformitate UE \u0219i aplic\u0103 marcajul CE, semnal\u00E2nd conformitatea cu dreptul UE.',
                    'Aceasta \u00EEnt\u0103re\u0219te ideea c\u0103 AI Act este, la nivelul s\u0103u structural de baz\u0103, un regulament privind siguran\u021Ba produselor adaptat sistemelor algoritmice.',
                ],
            },
            {
                heading: 'Un gol legislativ: sistemele agentice',
                paragraphs: [
                    'AIA clasific\u0103 riscul \u00EEn mare m\u0103sur\u0103 prin raportare la utilizarea inten\u021Bionat\u0103. Totu\u0219i, odat\u0103 cu apari\u021Bia sistemelor AI din ce \u00EEn ce mai autonome sau agentice, riscul poate s\u0103 nu r\u0103m\u00E2n\u0103 static.',
                    'Trebuie re\u021Binut c\u0103 EU AIA a fost dezvoltat \u00EEntr-un moment \u00EEn care AI agenticul nu era \u00EEnc\u0103 o realitate obi\u0219nuit\u0103; ca atare, legisla\u021Bia omite \u00EEn mod evident abordarea direct\u0103 a provoc\u0103rilor unice ridicate de autonomia agentic\u0103.',
                    'Un agent AI cu capacit\u0103\u021Bi largi, capabil de ra\u021Bionament \u00EEn mai mul\u021Bi pa\u0219i \u0219i ac\u021Biune autonom\u0103, poate s\u0103 escaladeze riscul nu deoarece cazul s\u0103u de utilizare nominal este listat \u00EEn Anexa III, ci din cauza domeniului autonomiei sale opera\u021Bionale. Un sistem ini\u021Bial implementat \u00EEntr-un mediu cu risc sc\u0103zut ar putea migra efectiv \u00EEn teritoriu cu risc mai mare prin capacit\u0103\u021Bi sau integr\u0103ri extinse.',
                    'Exist\u0103 deja discu\u021Bii academice privind dac\u0103 cadrul actual capteaz\u0103 adecvat aceast\u0103 dinamic\u0103. O revizuire viitoare a AIA va trebui aproape cu certitudine s\u0103 abordeze aceast\u0103 tensiune structural\u0103.',
                ],
            },
            {
                heading: 'G\u00E2nd final',
                paragraphs: [
                    'EU AI Act nu este doar un nou set de reguli. Este o reproiectare fundamental\u0103 a cadrului juridic pentru sistemele algoritmice, \u00EEnt\u0103rind eco-sistemul juridic tech UE \u00EEnc\u0103 \u00EEn cre\u0219tere.',
                    'Stabilind o ierarhie clar\u0103 a riscului \u0219i o abordare standardizat\u0103 de \u201Esiguran\u021B\u0103 a produselor\u201D, UE a furnizat harta, dar fondatorilor \u0219i echipelor tehnice le revine s\u0103 navigheze terenul. Aceast\u0103 viziune panoramic\u0103 este linia de baz\u0103 esen\u021Bial\u0103 pentru orice business bazat pe AI, totu\u0219i adev\u0103rata munc\u0103 \u00EEncepe cu evaluarea individual\u0103.',
                    'R\u0103m\u00E2ne\u021Bi conecta\u021Bi pentru mai multe informa\u021Bii despre EU AI Act! Urm\u0103toarea edi\u021Bie se va concentra pe interac\u021Biunea AIA cu alte legisla\u021Bii UE, \u00EEn special prin cadrul AIA ca artefact al legisla\u021Biei privind produsele, \u0219i va explora consecin\u021Bele opera\u021Bionale practice ale dinamicii.',
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

                        {/* Image caption */}
                        <RevealAnimation delay={0.05} direction="fade">
                            <div className="mb-10 p-4 bg-gray-50 border-l-4 border-gray-300 rounded-r-lg">
                                <p className="text-sm text-gray-600 italic leading-relaxed">{c.imageCaption}</p>
                            </div>
                        </RevealAnimation>

                        {/* Intro */}
                        <RevealAnimation delay={0.1} direction="fade">
                            <div className="prose prose-lg max-w-none mb-8">
                                <p className="text-gray-700 leading-relaxed mb-4">{c.body}</p>
                            </div>
                        </RevealAnimation>

                        {/* Table of Contents */}
                        <RevealAnimation delay={0.12} direction="fade">
                            <div className="mb-10 p-6 bg-primary-50 rounded-xl border border-primary-100">
                                <p className="text-sm font-semibold text-gray-700 mb-3">{c.tocLabel}</p>
                                <ol className="space-y-1">
                                    {c.toc.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                            <span className="text-primary-600 font-semibold flex-shrink-0">{i + 1}.</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </RevealAnimation>

                        {/* Note */}
                        <RevealAnimation delay={0.14} direction="fade">
                            <div className="mb-10 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <p className="text-sm text-amber-800 leading-relaxed">{c.note}</p>
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
                                                    <span>{b.bold ? <><strong>{b.bold}</strong>{b.text}</> : b.text}</span>
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
