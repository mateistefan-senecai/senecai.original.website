'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The Prohibited Practices under the AI Act (Part 3): Untargeted Scraping of Facial Images and Emotion Recognition',
        date: 'March 28, 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 Back to Resource Hub',
        body: `Hi \u2014 my name is Matei Stefan. I am a legal professional working at the intersection of law, tech and AI, and I welcome you to the sixth edition of The AI Act Guy.

In the previous article, I examined prohibitions targeting the use of AI for systemic social control and speculative law enforcement, namely social scoring and predictive policing.

This edition turns to two different, but equally consequential, practices regulated under Article 5 of the AI Act:`,
        introBullets: [
            { bold: 'Article 5(1)(e):', text: ' Untargeted scraping of facial images for the purpose of building or expanding facial recognition databases' },
            { bold: 'Article 5(1)(f):', text: ' Emotion recognition systems in the workplace and educational institutions' },
        ],
        introAfter: 'These prohibitions shift the focus from how AI is used to how it is built and applied in constrained environments. One targets the large-scale accumulation of biometric data without individual awareness; the other restricts the inference of emotional states in contexts defined by structural imbalance.\n\nAs with the previous article, the analysis is grounded in the European Commission\u2019s Guidelines on Prohibited AI Practices, which provide the closest approximation, at this stage, of how these provisions will be interpreted and enforced in practice.',
        sections: [
            {
                heading: 'A. Scraping of Facial Images',
                isPartHeading: true,
            },
            {
                heading: 'Rationale and Objective',
                paragraphs: [
                    'The prohibition on the untargeted scraping of facial images from the internet or CCTV footage addresses a specific risk vector: the large-scale creation of biometric databases without the knowledge or consent of the individuals concerned.',
                    'Unlike other AI use-cases involving facial recognition techniques, this practice is not regulated \u2014 it is excluded entirely from the market. The underlying rationale is that such datasets enable downstream applications (notably facial recognition systems) that can be deployed at scale in ways that are incompatible with fundamental rights, particularly privacy and data protection.',
                    'The prohibition therefore targets the data acquisition layer, rather than a specific deployment context.',
                ],
            },
            {
                heading: 'Main Concepts and Components',
                paragraphs: [
                    'The prohibition applies where three elements are cumulatively present.',
                    'First, there must be scraping or collection of images. This includes automated extraction from publicly accessible online sources, as well as ingestion of video streams (e.g., CCTV).',
                    'Second, the images must be facial images, meaning data that can be used to identify or verify a natural person through biometric processing.',
                    'Third, the purpose \u2014 or at least the functional outcome \u2014 must be the creation or expansion of a facial recognition database.',
                    'Two aspects are worth clarifying:',
                ],
                bullets: [
                    { bold: '', text: 'The prohibition is purpose-oriented but technologically neutral. It is not limited to specific scraping techniques or model architectures.' },
                    { bold: '', text: 'The database need not be immediately deployed. The act of building or expanding such a dataset is sufficient.' },
                ],
                afterBullets: [
                    'This is structurally different from GDPR-style analysis, where lawfulness may depend on legal basis. Under the AI Act, the practice itself is disallowed irrespective of potential justifications.',
                ],
            },
            {
                heading: 'In-Scope and Out-of-Scope Examples',
                paragraphs: [
                    'The boundary of the prohibition becomes clearer when applied to concrete configurations.',
                    'A system that systematically collects profile pictures from social media platforms, extracts facial embeddings, and stores them in a searchable database intended for identification purposes would fall squarely within the prohibition. The same applies to aggregating CCTV footage from multiple sources to build a training dataset for facial recognition models, even if the system is not yet deployed commercially.',
                    'By contrast, targeted and consent-based data collection is not captured. For example, a company building a facial authentication system using images provided directly by users for that specific purpose would fall outside the prohibition, provided the dataset is not repurposed into a broader identification database.',
                    'Similarly, non-biometric image processing remains outside scope. A system that scrapes images for purposes unrelated to identifying individuals \u2014 such as object detection or scene classification \u2014 does not trigger the prohibition, even if faces are incidentally present, provided no biometric identification functionality is developed.',
                    'More nuanced cases arise where datasets are initially collected for one purpose and later repurposed. If a general image dataset is subsequently used to extract facial embeddings and build a recognition database, the activity may fall within scope at that later stage.',
                ],
            },
            {
                heading: 'B. Emotion Recognition Systems',
                isPartHeading: true,
            },
            {
                heading: 'Rationale and Objective',
                paragraphs: [
                    'The prohibition on emotion recognition systems reflects a different regulatory concern. Here, the issue is not large-scale data collection, but the inference of internal states \u2014 emotions, intentions, or psychological traits \u2014 from biometric data.',
                    'The legislator takes the view that such systems are both scientifically contested and highly intrusive, particularly when deployed in asymmetrical environments such as workplaces or educational institutions.',
                    'The objective is therefore not to ban emotion recognition universally, but to restrict its use in contexts where individuals cannot meaningfully opt out and where the consequences of misclassification are material.',
                ],
            },
            {
                heading: 'Concepts and Components',
                paragraphs: [
                    'An emotion recognition system, for the purposes of the AI Act, involves:',
                ],
                bullets: [
                    { bold: '', text: 'The use of biometric data (e.g., facial expressions, voice, physiological signals)' },
                    { bold: '', text: 'To infer or classify emotional states (such as happiness, stress, anger, or fatigue)' },
                    { bold: '', text: 'Typically through machine learning models trained on labeled behavioral or physiological datasets' },
                ],
                afterBullets: [
                    'Two clarifications are important.',
                    'First, the concept extends beyond facial analysis. Voice analysis, keystroke dynamics, or multimodal systems may also fall within scope if they are used to infer emotions.',
                    'Second, the prohibition targets inference, not mere detection of observable features. Systems that simply detect facial landmarks or vocal patterns without attributing emotional meaning are not covered.',
                ],
            },
            {
                heading: 'Limitation to Workplace and Education',
                paragraphs: [
                    'The prohibition is explicitly limited to two environments: workplaces and educational institutions.',
                    'This limitation is not arbitrary. Both contexts are characterized by structural imbalance \u2014 employees and students are subject to authority, evaluation, and potential sanction.',
                    'In these settings, even nominal consent is unlikely to be considered meaningful. The use of emotion recognition systems can therefore lead to indirect coercion, behavioral manipulation, or unjustified performance assessments.',
                    'From a compliance perspective, this means that the same system may be lawful or unlawful depending on the deployment context.',
                    'A vendor offering a general-purpose emotion recognition API is not, in itself, engaging in a prohibited practice. However, deploying that system within an employee monitoring tool or a classroom analytics platform would trigger the prohibition.',
                ],
            },
            {
                heading: 'Exceptions for Medical and Safety Reasons',
                paragraphs: [
                    'The AI Act provides a limited exception where emotion recognition systems are used for medical or safety purposes.',
                    'This exception is narrow and should be interpreted conservatively.',
                    'Medical use cases may include systems designed to detect signs of distress, depression, or neurological conditions, provided they are deployed within a clinical or healthcare framework and subject to appropriate safeguards.',
                    'Safety-related applications may include monitoring systems intended to detect fatigue or loss of attention in high-risk environments, such as transportation or industrial operations.',
                    'However, two constraints remain critical:',
                ],
                bullets: [
                    { bold: '', text: 'The purpose must be genuinely medical or safety-related, not a pretext for performance monitoring or productivity analysis.' },
                    { bold: '', text: 'The system must be proportionate to the risk addressed. Broad, continuous monitoring of emotional states in low-risk environments is unlikely to qualify.' },
                ],
            },
            {
                heading: 'In-Scope and Out-of-Scope Examples',
                paragraphs: [
                    'Applied in practice, the prohibition captures a range of increasingly common product configurations.',
                    'An employee monitoring platform that uses webcam data to assess engagement, stress, or attentiveness during working hours would fall within scope. The same applies to educational software that tracks students\u2019 facial expressions to evaluate concentration or emotional response to course material.',
                    'Similarly, call center analytics tools that classify customer service agents\u2019 emotional states in real time, for performance scoring or feedback, would be captured when deployed in an employment context.',
                    'By contrast, systems used in clinical diagnostics, where emotional inference is part of a medical assessment conducted under professional supervision, may fall within the exception.',
                    'Likewise, driver monitoring systems designed to detect fatigue for safety purposes may be permissible, provided they are narrowly scoped and not repurposed for broader behavioral analysis.',
                    'More ambiguous cases arise in consumer applications. For example, an app that provides users with feedback on their own emotional state based on voice or facial input is not, in itself, prohibited. However, if the same functionality is integrated into workplace tools or educational platforms, the regulatory classification changes.',
                    'This context-dependence is operationally significant. It requires not only technical assessment of the system, but also control over downstream deployment scenarios, which in practice may be difficult for providers operating through APIs or SDKs.',
                ],
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'Both prohibitions illustrate a broader pattern in the AI Act: certain practices are restricted not because of their technical architecture, but because of their systemic impact when deployed at scale or in sensitive contexts.',
                    'For companies, the compliance question is therefore not limited to model design. It extends to:',
                ],
                bullets: [
                    { bold: '', text: 'How data is sourced' },
                    { bold: '', text: 'How functionality is framed' },
                    { bold: '', text: 'And critically, where and by whom the system is ultimately used' },
                ],
                afterBullets: [
                    'In both cases, the line between permitted and prohibited is not abstract \u2014 it is operational, and it attaches directly to product and deployment decisions.',
                    'In the next edition, I will cover the final set of prohibited practices under Article 5 of the AI Act, focusing on AI systems that perform biometric categorization for certain \u2018sensitive\u2019 characteristics and Real-Time Remote Biometric Identification for Law-Enforcement purposes.',
                ],
            },
        ],
    },
    ro: {
        title: 'Practicile interzise sub AI Act (Partea 3): Colectarea neorientat\u0103 a imaginilor faciale \u0219i recunoa\u0219terea emo\u021Biilor',
        date: '28 martie 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        body: `Bun\u0103 \u2014 m\u0103 numesc Matei Stefan. Sunt un profesionist juridic care lucreaz\u0103 la intersec\u021Bia dintre drept, tehnologie \u0219i AI, \u0219i v\u0103 bine\u00EEntampin la a \u0219asea edi\u021Bie The AI Act Guy.

\u00CEn articolul anterior, am examinat interdic\u021Biile care vizeaz\u0103 utilizarea AI pentru controlul social sistemic \u0219i aplicarea speculativ\u0103 a legii, respectiv scoring-ul social \u0219i poli\u021Bia predictiv\u0103.

Aceast\u0103 edi\u021Bie se \u00EEndreapt\u0103 c\u0103tre dou\u0103 practici diferite, dar la fel de importante, reglementate \u00EEn temeiul Articolului 5 al AI Act:`,
        introBullets: [
            { bold: 'Articolul 5(1)(e):', text: ' Colectarea neorientat\u0103 a imaginilor faciale \u00EEn scopul construirii sau extinderii bazelor de date de recunoa\u0219tere facial\u0103' },
            { bold: 'Articolul 5(1)(f):', text: ' Sisteme de recunoa\u0219tere a emo\u021Biilor la locul de munc\u0103 \u0219i \u00EEn institu\u021Bii educa\u021Bionale' },
        ],
        introAfter: 'Aceste interdic\u021Bii mut\u0103 focusul de la modul \u00EEn care AI este utilizat la modul \u00EEn care este construit \u0219i aplicat \u00EEn medii restric\u021Bionate. Una vizeaz\u0103 acumularea la scar\u0103 larg\u0103 a datelor biometrice f\u0103r\u0103 con\u0219tientizarea persoanelor; cealalt\u0103 restric\u021Bioneaz\u0103 inferen\u021Ba st\u0103rilor emo\u021Bionale \u00EEn contexte definite de dezechilibru structural.\n\nCa \u0219i \u00EEn articolul anterior, analiza este fundamentat\u0103 pe Ghidurile Comisiei Europene privind Practicile AI Interzise, care ofer\u0103 cea mai bun\u0103 aproximare, \u00EEn aceast\u0103 etap\u0103, a modului \u00EEn care aceste prevederi vor fi interpretate \u0219i aplicate \u00EEn practic\u0103.',
        sections: [
            {
                heading: 'A. Colectarea imaginilor faciale',
                isPartHeading: true,
            },
            {
                heading: 'Ra\u021Biune \u0219i obiectiv',
                paragraphs: [
                    'Interdic\u021Bia privind colectarea neorientat\u0103 a imaginilor faciale de pe internet sau din camerele CCTV abordeaz\u0103 un vector de risc specific: crearea la scar\u0103 larg\u0103 a bazelor de date biometrice f\u0103r\u0103 cuno\u0219tin\u021Ba sau consim\u021B\u0103m\u00E2ntul persoanelor vizate.',
                    'Spre deosebire de alte cazuri de utilizare AI care implic\u0103 tehnici de recunoa\u0219tere facial\u0103, aceast\u0103 practic\u0103 nu este reglementat\u0103 \u2014 este exclus\u0103 complet de pe pia\u021B\u0103. Ra\u021Biunea de baz\u0103 este c\u0103 astfel de seturi de date permit aplica\u021Bii downstream (mai ales sisteme de recunoa\u0219tere facial\u0103) care pot fi implementate la scar\u0103 \u00EEn moduri incompatibile cu drepturile fundamentale, \u00EEn special intimitatea \u0219i protec\u021Bia datelor.',
                    'Interdic\u021Bia vizeaz\u0103 prin urmare stratul de achizi\u021Bie a datelor, mai degrab\u0103 dec\u00E2t un context de implementare specific.',
                ],
            },
            {
                heading: 'Concepte \u0219i componente principale',
                paragraphs: [
                    'Interdic\u021Bia se aplic\u0103 c\u00E2nd trei elemente sunt prezente cumulativ.',
                    'Mai \u00EEnt\u00E2i, trebuie s\u0103 existe colectare sau extragere de imagini. Aceasta include extragerea automat\u0103 din surse online accesibile public, precum \u0219i ingestia fluxurilor video (de ex., CCTV).',
                    '\u00CEn al doilea r\u00E2nd, imaginile trebuie s\u0103 fie imagini faciale, adic\u0103 date care pot fi utilizate pentru a identifica sau verifica o persoan\u0103 fizic\u0103 prin procesare biometric\u0103.',
                    '\u00CEn al treilea r\u00E2nd, scopul \u2014 sau cel pu\u021Bin rezultatul func\u021Bional \u2014 trebuie s\u0103 fie crearea sau extinderea unei baze de date de recunoa\u0219tere facial\u0103.',
                    'Dou\u0103 aspecte merit\u0103 clarificat:',
                ],
                bullets: [
                    { bold: '', text: 'Interdic\u021Bia este orientat\u0103 spre scop, dar neutru\u0103 din punct de vedere tehnologic. Nu este limitat\u0103 la tehnici specifice de colectare sau arhitecturi de model.' },
                    { bold: '', text: 'Baza de date nu trebuie implementat\u0103 imediat. Actul de construire sau extindere a unui astfel de set de date este suficient.' },
                ],
                afterBullets: [
                    'Aceasta este structural diferit\u0103 de analiza GDPR, unde legalitatea poate depinde de baza juridic\u0103. Sub AI Act, practica \u00EEn sine este interzis\u0103 indiferent de justific\u0103rile poten\u021Biale.',
                ],
            },
            {
                heading: 'Exemple \u00EEn domeniu \u0219i \u00EEn afara domeniului',
                paragraphs: [
                    'Grani\u021Ba interdic\u021Biei devine mai clar\u0103 c\u00E2nd este aplicat\u0103 la configura\u021Bii concrete.',
                    'Un sistem care colecteaz\u0103 sistematic imagini de profil de pe platformele de social media, extrage amprente faciale \u0219i le stocheaz\u0103 \u00EEntr-o baz\u0103 de date c\u0103utabil\u0103 destinat\u0103 scopurilor de identificare ar intra \u00EEn totalitate \u00EEn sfera interdic\u021Biei. Acela\u0219i lucru se aplic\u0103 agreg\u0103rii de filmare CCTV din mai multe surse pentru a construi un set de date de antrenare pentru modele de recunoa\u0219tere facial\u0103, chiar dac\u0103 sistemul nu este \u00EEnc\u0103 implementat comercial.',
                    'Prin contrast, colectarea de date orientat\u0103 \u0219i bazat\u0103 pe consim\u021B\u0103m\u00E2nt nu este cap turat\u0103. De exemplu, o companie care construie\u0219te un sistem de autentificare facial\u0103 utiliz\u00E2nd imagini furnizate direct de utilizatori \u00EEn acel scop specific ar c\u0103dea \u00EEn afara interdic\u021Biei, cu condi\u021Bia ca setul de date s\u0103 nu fie reutilizat \u00EEntr-o baz\u0103 de date de identificare mai larg\u0103.',
                    'Similar, procesarea nebiometric\u0103 a imaginilor r\u0103m\u00E2ne \u00EEn afara domeniului. Un sistem care colecteaz\u0103 imagini \u00EEn scopuri nerelevante pentru identificarea persoanelor \u2014 cum ar fi detec\u021Bia obiectelor sau clasificarea scenelor \u2014 nu declan\u0219eaz\u0103 interdic\u021Bia, chiar dac\u0103 fe\u021Bele sunt prezente incidental, cu condi\u021Bia ca nicio func\u021Bionalitate de identificare biometric\u0103 s\u0103 nu fie dezvoltat\u0103.',
                    'Cazuri mai nuantate apar c\u00E2nd seturile de date sunt ini\u021Bial colectate \u00EEntr-un scop \u0219i ulterior reutilizate. Dac\u0103 un set de date general de imagini este ulterior utilizat pentru a extrage amprente faciale \u0219i a construi o baz\u0103 de date de recunoa\u0219tere, activitatea poate intra \u00EEn domeniu la acea etap\u0103 ulterioar\u0103.',
                ],
            },
            {
                heading: 'B. Sisteme de recunoa\u0219tere a emo\u021Biilor',
                isPartHeading: true,
            },
            {
                heading: 'Ra\u021Biune \u0219i obiectiv',
                paragraphs: [
                    'Interdic\u021Bia privind sistemele de recunoa\u0219tere a emo\u021Biilor reflect\u0103 o preocupare de reglementare diferit\u0103. Aici, problema nu este colectarea de date la scar\u0103 larg\u0103, ci inferen\u021Ba st\u0103rilor interne \u2014 emo\u021Bii, inten\u021Bii sau tr\u0103s\u0103turi psihologice \u2014 din date biometrice.',
                    'Legiuitorul consider\u0103 c\u0103 astfel de sisteme sunt at\u00E2t contestate \u0219tiin\u021Bific, c\u00E2t \u0219i extrem de intruzive, \u00EEn special c\u00E2nd sunt implementate \u00EEn medii asimetrice precum locurile de munc\u0103 sau institu\u021Biile educa\u021Bionale.',
                    'Obiectivul nu este prin urmare interzicerea universal\u0103 a recunoa\u0219terii emo\u021Biilor, ci restric\u021Bionarea utiliz\u0103rii sale \u00EEn contexte \u00EEn care persoanele nu se pot retrage \u00EEn mod semnificativ \u0219i unde consecin\u021Bele clasific\u0103rii incorecte sunt materiale.',
                ],
            },
            {
                heading: 'Concepte \u0219i componente',
                paragraphs: [
                    'Un sistem de recunoa\u0219tere a emo\u021Biilor, \u00EEn sensul AI Act, implic\u0103:',
                ],
                bullets: [
                    { bold: '', text: 'Utilizarea datelor biometrice (de ex., expresii faciale, voce, semnale fiziologice)' },
                    { bold: '', text: 'Pentru a inferi sau clasifica st\u0103ri emo\u021Bionale (cum ar fi fericire, stres, furie sau oboseal\u0103)' },
                    { bold: '', text: 'De obicei prin modele de machine learning antrenate pe seturi de date comportamentale sau fiziologice etichettate' },
                ],
                afterBullets: [
                    'Dou\u0103 clarific\u0103ri sunt importante.',
                    '\u00CEn primul r\u00E2nd, conceptul dep\u0103\u0219e\u0219te analiza facial\u0103. Analiza vocii, dinamica ap\u0103s\u0103rii tastelor sau sistemele multimodale pot intra, de asemenea, \u00EEn domeniu dac\u0103 sunt utilizate pentru a inferi emo\u021Bii.',
                    '\u00CEn al doilea r\u00E2nd, interdic\u021Bia vizeaz\u0103 inferen\u021Ba, nu simpla detec\u021Bie a tr\u0103s\u0103turilor observabile. Sistemele care detecteaz\u0103 pur \u0219i simplu puncte de reper faciale sau tipare vocale f\u0103r\u0103 a atribui semnifica\u021Bie emo\u021Bional\u0103 nu sunt acoperite.',
                ],
            },
            {
                heading: 'Limitarea la locul de munc\u0103 \u0219i educa\u021Bie',
                paragraphs: [
                    'Interdic\u021Bia este limitat\u0103 explicit la dou\u0103 medii: locurile de munc\u0103 \u0219i institu\u021Biile educa\u021Bionale.',
                    'Aceast\u0103 limitare nu este arbitrar\u0103. Ambele contexte sunt caracterizate de dezechilibru structural \u2014 angaja\u021Bii \u0219i studen\u021Bii sunt supus\u021Bi autorit\u0103\u021Bii, evalu\u0103rii \u0219i poten\u021Bialei sanc\u021Biuni.',
                    '\u00CEn aceste medii, chiar \u0219i consim\u021B\u0103m\u00E2ntul nominal este improbabil s\u0103 fie considerat semnificativ. Utilizarea sistemelor de recunoa\u0219tere a emo\u021Biilor poate duce prin urmare la coer\u021Bie indirect\u0103, manipulare comportamental\u0103 sau evalu\u0103ri de performan\u021B\u0103 nejustificate.',
                    'Din perspectiva conformit\u0103\u021Bii, aceasta \u00EEnseamn\u0103 c\u0103 acela\u0219i sistem poate fi legal sau ilegal \u00EEn func\u021Bie de contextul de implementare.',
                    'Un furnizor care ofer\u0103 un API de recunoa\u0219tere a emo\u021Biilor de uz general nu se angajeaz\u0103, \u00EEn sine, \u00EEntr-o practic\u0103 interzis\u0103. Totu\u0219i, implementarea acelui sistem \u00EEntr-un instrument de monitorizare a angaja\u021Bilor sau o platform\u0103 de analitic\u0103 \u00EEn sal\u0103 de clas\u0103 ar declan\u0219a interdic\u021Bia.',
                ],
            },
            {
                heading: 'Excep\u021Bii pentru motive medicale \u0219i de siguran\u021B\u0103',
                paragraphs: [
                    'AI Act prevede o excep\u021Bie limitat\u0103 acolo unde sistemele de recunoa\u0219tere a emo\u021Biilor sunt utilizate \u00EEn scopuri medicale sau de siguran\u021B\u0103.',
                    'Aceast\u0103 excep\u021Bie este restr\u00E2ns\u0103 \u0219i trebuie interpretat\u0103 conservator.',
                    'Cazurile de utilizare medical\u0103 pot include sisteme proiectate s\u0103 detecteze semne de detres\u0103, depresie sau afec\u021Biuni neurologice, cu condi\u021Bia s\u0103 fie implementate \u00EEntr-un cadru clinic sau de s\u0103n\u0103tate \u0219i supuse m\u0103surilor de protec\u021Bie adecvate.',
                    'Aplica\u021Biile legate de siguran\u021B\u0103 pot include sisteme de monitorizare menite s\u0103 detecteze oboseala sau pierderea aten\u021Biei \u00EEn medii cu risc ridicat, cum ar fi transportul sau opera\u021Biunile industriale.',
                    'Cu toate acestea, dou\u0103 constr\u00E2ngeri r\u0103m\u00E2n critice:',
                ],
                bullets: [
                    { bold: '', text: 'Scopul trebuie s\u0103 fie cu adev\u0103rat medical sau legat de siguran\u021B\u0103, nu un pretext pentru monitorizarea performan\u021Bei sau analiza productivit\u0103\u021Bii.' },
                    { bold: '', text: 'Sistemul trebuie s\u0103 fie propor\u021Bional cu riscul abordat. Monitorizarea broad\u0103, continu\u0103 a st\u0103rilor emo\u021Bionale \u00EEn medii cu risc sc\u0103zut este improbabil s\u0103 se califice.' },
                ],
            },
            {
                heading: 'Exemple \u00EEn domeniu \u0219i \u00EEn afara domeniului',
                paragraphs: [
                    'Aplicat\u0103 \u00EEn practic\u0103, interdic\u021Bia acoper\u0103 o serie de configura\u021Bii de produse din ce \u00EEn ce mai comune.',
                    'O platform\u0103 de monitorizare a angaja\u021Bilor care utilizeaz\u0103 date de la webcam pentru a evalua implicarea, stresul sau aten\u021Bia \u00EEn timpul orelor de lucru ar intra \u00EEn domeniu. Acela\u0219i lucru se aplic\u0103 software-ului educa\u021Bional care urm\u0103re\u0219te expresiile faciale ale studen\u021Bilor pentru a evalua concentrarea sau r\u0103spunsul emo\u021Bional la materialul de curs.',
                    'Similar, instrumentele de analitic\u0103 pentru call center care clasific\u0103 st\u0103rile emo\u021Bionale ale agen\u021Bilor de servicii clien\u021Bi \u00EEn timp real, pentru scoring de performan\u021B\u0103 sau feedback, ar fi captate c\u00E2nd sunt implementate \u00EEntr-un context de angajare.',
                    'Prin contrast, sistemele utilizate \u00EEn diagnosticul clinic, unde inferen\u021Ba emo\u021Bional\u0103 face parte dintr-o evaluare medical\u0103 condus\u0103 sub supraveghere profesional\u0103, pot intra \u00EEn excep\u021Bie.',
                    'De asemenea, sistemele de monitorizare a \u0219oferilor proiectate pentru a detecta oboseala \u00EEn scopuri de siguran\u021B\u0103 pot fi permisibile, cu condi\u021Bia s\u0103 fie \u00EEncadrate \u00EEngust \u0219i s\u0103 nu fie reutilizate pentru analiz\u0103 comportamental\u0103 mai larg\u0103.',
                    'Cazuri mai ambigue apar \u00EEn aplica\u021Biile de consum. De exemplu, o aplica\u021Bie care ofer\u0103 utilizatorilor feedback despre propria stare emo\u021Bional\u0103 pe baza vocii sau input-ului facial nu este, \u00EEn sine, interzis\u0103. Totu\u0219i, dac\u0103 aceea\u0219i func\u021Bionalitate este integrat\u0103 \u00EEn instrumente de lucru sau platforme educa\u021Bionale, clasificarea de reglementare se schimb\u0103.',
                    'Aceast\u0103 dependen\u021B\u0103 de context este semnificativ\u0103 din punct de vedere opera\u021Bional. Necesit\u0103 nu doar evaluarea tehnic\u0103 a sistemului, ci \u0219i controlul asupra scenariilor de implementare downstream, care \u00EEn practic\u0103 poate fi dificil pentru furnizorii care opereaz\u0103 prin API-uri sau SDK-uri.',
                ],
            },
            {
                heading: 'Concluzie',
                paragraphs: [
                    'Ambele interdic\u021Bii ilustreaz\u0103 un tipar mai larg \u00EEn AI Act: anumite practici sunt restric\u021Bionate nu din cauza arhitecturii lor tehnice, ci din cauza impactului lor sistemic c\u00E2nd sunt implementate la scar\u0103 sau \u00EEn contexte sensibile.',
                    'Pentru companii, \u00EEntrebarea de conformitate nu este prin urmare limitat\u0103 la designul modelului. Se extinde la:',
                ],
                bullets: [
                    { bold: '', text: 'Modul \u00EEn care datele sunt ob\u021Binute' },
                    { bold: '', text: 'Modul \u00EEn care func\u021Bionalitatea este formulat\u0103' },
                    { bold: '', text: '\u0218i critic, unde \u0219i de c\u0103tre cine este utilizat\u0103 \u00EEn final sistemul' },
                ],
                afterBullets: [
                    '\u00CEn ambele cazuri, linia dintre permis \u0219i interzis nu este abstract\u0103 \u2014 este opera\u021Bional\u0103 \u0219i se ata\u0219eaz\u0103 direct la deciziile de produs \u0219i implementare.',
                    '\u00CEn urm\u0103toarea edi\u021Bie, voi acoperi setul final de practici interzise din Articolul 5 al AI Act, concentr\u00E2ndu-m\u0103 pe sistemele AI care efectueaz\u0103 categorizare biometric\u0103 pentru anumite caracteristici \u201Esensibile\u201D \u0219i Identificarea Biometric\u0103 de la Distan\u021B\u0103 \u00EEn Timp Real \u00EEn scopuri de aplicare a legii.',
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
                            <ul className="space-y-2 mb-4">
                                {c.introBullets.map((b, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                        <span><strong>{b.bold}</strong>{b.text}</span>
                                    </li>
                                ))}
                            </ul>
                            {c.introAfter.split('\n\n').map((p, i) => (
                                <p key={i} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                            ))}
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
