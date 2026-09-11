'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The Prohibited Practices under the AI Act (Part IV): Biometric Categorisation of Sensitive Traits and Real-Time Biometric Identification for Law Enforcement',
        date: 'March 29, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `The last article in the series covering the Prohibited AI Practices under the EU AI Act.

Hi 👋 My name is Matei Ștefan — I am a legal professional working at the intersection of law, tech and AI — and I welcome you to the sixth edition of The AI Act Guy.

In the previous article, I examined prohibitions targeting the large-scale collection of biometric data and the use of emotion recognition systems in asymmetrical environments such as workplaces and educational institutions.

This edition covers the final two prohibited practices under Article 5 of the AI Act:`,
        introBullets: [
            { bold: 'Article 5(1)(g):', text: ' Biometric categorisation systems based on sensitive characteristics' },
            { bold: 'Article 5(1)(h):', text: ' Real-time remote biometric identification systems in publicly accessible spaces for law enforcement purposes' },
        ],
        introAfter: 'These provisions operate at different levels of the AI system lifecycle. One targets the inference layer, restricting how biometric data can be used to classify individuals into protected categories. The other focuses on deployment, limiting the use of identification systems in public spaces by law enforcement authorities.\n\nAs with the previous articles, this analysis is grounded in the European Commission’s Guidelines on Prohibited AI Practices, which provide interpretative guidance on how these provisions are likely to be applied in practice.',
        sections: [
            {
                heading: 'A. Biometric Categorisation of Sensitive Traits',
                isPartHeading: true,
            },
            {
                heading: 'Rationale and Objective',
                paragraphs: [
                    'The prohibition on biometric categorisation based on sensitive characteristics targets a specific form of inference: the classification of individuals into protected categories using biometric data.',
                    'This is not a restriction on biometric systems generally, but on a particular downstream use of such systems — namely, the attribution of characteristics such as race, political opinions, religious beliefs, sexual orientation, or similar sensitive traits.',
                    'The underlying rationale is twofold.',
                    'First, these inferences are often scientifically unreliable, particularly when derived from physical appearance or behavioural signals. Second, and more fundamentally, they enable forms of profiling that are incompatible with fundamental rights, including non-discrimination and human dignity.',
                    'The prohibition therefore operates at the level of what is inferred, rather than how the data is collected or processed.',
                ],
            },
            {
                heading: 'Main Concepts and Components',
                paragraphs: [
                    'The prohibition applies where three elements are present.',
                    'First, there must be the use of biometric data. This includes facial images, voice data, gait, or other physical or behavioural characteristics that enable or support identification.',
                    'Second, the system must perform categorisation. This involves assigning individuals to specific groups or classes based on inferred attributes.',
                    'Third, the categorisation must concern sensitive characteristics. These broadly align with protected categories under EU law, including:',
                ],
                bullets: [
                    { bold: '', text: 'racial or ethnic origin' },
                    { bold: '', text: 'political opinions' },
                    { bold: '', text: 'religious or philosophical beliefs' },
                    { bold: '', text: 'sexual orientation' },
                ],
                afterBullets: [
                    'Two clarifications are relevant.',
                    'The prohibition targets inference-based categorisation, not the processing of data that is already explicitly provided by the individual. A system that classifies individuals based on self-declared information does not fall within scope of this specific prohibition, although it may still raise issues under other legal regimes.',
                    'In addition, the prohibition is not limited to systems that explicitly label individuals. Systems that generate probabilistic scores or rankings linked to sensitive traits may also fall within scope if they effectively perform categorisation.',
                ],
            },
            {
                heading: 'In-Scope and Out-of-Scope (Examples)',
                paragraphs: [
                    'The distinction between permitted and prohibited configurations depends on both the nature of the inference and the source of the data.',
                    'A system that analyses facial images to infer an individual’s ethnicity or sexual orientation, and assigns them to corresponding categories, would fall squarely within the prohibition. The same applies to systems that attempt to classify individuals’ political or religious affiliation based on biometric signals such as facial features, voice patterns, or behavioural cues.',
                    'Similarly, a model that generates scores indicating the likelihood that an individual belongs to a particular sensitive group — without explicitly assigning a label — may still be captured if the output is used to group or segment individuals accordingly.',
                    'By contrast, systems that rely on self-declared data do not fall within this prohibition. For example, a platform that allows users to voluntarily indicate their religious affiliation or political preferences, and uses that information for content personalisation, is not engaging in biometric categorisation within the meaning of Article 5.',
                    'Likewise, non-sensitive categorisation remains outside scope. Systems that classify individuals based on age range, general mood, or non-protected behavioural traits — while potentially subject to other regulatory requirements — are not captured by this specific prohibition.',
                    'More complex cases arise where biometric data is used in combination with other data sources. If a system uses facial analysis as one input among many to infer sensitive traits, the prohibition may still apply, depending on the role of biometric data in the overall inference.',
                ],
            },
            {
                heading: 'B. Real-Time Remote Biometric Identification (RBI) for Law Enforcement purposes',
                isPartHeading: true,
            },
            {
                heading: 'Rationale and Objective',
                paragraphs: [
                    'The prohibition on real-time remote biometric identification in publicly accessible spaces for law enforcement purposes addresses one of the most debated use cases under the AI Act.',
                    'Unlike other prohibitions, this is not absolute. The Regulation establishes a general prohibition, coupled with narrowly defined exceptions.',
                    'The concern is that real-time identification systems — most commonly facial recognition — enable continuous, large-scale surveillance of individuals in public spaces. This has direct implications for privacy, freedom of movement, and freedom of assembly.',
                    'At the same time, the legislator acknowledges that, in limited circumstances, such systems may serve legitimate public security objectives. The regulatory approach therefore combines prohibition with strictly delimited derogations.',
                ],
            },
            {
                heading: 'Concepts and Components',
                paragraphs: [
                    'The prohibition applies to systems that meet four cumulative criteria.',
                    'First, the system must perform biometric identification, meaning it matches biometric data against a reference database to identify an individual.',
                    'Second, the identification must be remote, i.e. carried out at a distance without the active involvement of the individual.',
                    'Third, it must occur in real time, or near real time, allowing for immediate intervention.',
                    'Fourth, the use must be for law enforcement purposes and deployed in publicly accessible spaces.',
                    'Each element is material.',
                    'The distinction between real-time and post-event identification is particularly relevant. Systems used to analyse recorded footage after an incident are not subject to the same prohibition, although they may fall under high-risk classification.',
                    'Similarly, the notion of publicly accessible space excludes controlled environments with restricted access, although the boundaries may be context-dependent.',
                ],
            },
            {
                heading: 'Exceptions to the Prohibition',
                paragraphs: [
                    'The AI Act allows the use of real-time RBI in three narrowly defined scenarios:',
                ],
                bullets: [
                    { bold: '', text: 'the targeted search for specific victims of crime, including missing persons' },
                    { bold: '', text: 'the prevention of a specific, substantial, and imminent threat to life or physical safety' },
                    { bold: '', text: 'the detection, localisation, identification, or prosecution of perpetrators of serious crimes' },
                ],
                afterBullets: [
                    'These exceptions are subject to strict conditions, including prior authorisation and proportionality requirements.',
                    'From a practical perspective, this means that real-time RBI is not generally available as a policing tool, but may be deployed in exceptional, case-specific situations.',
                    'The burden of justification lies with the deploying authority, and the use must be demonstrably necessary and proportionate to the objective pursued.',
                ],
            },
            {
                heading: 'In-Scope and Out-of-Scope (Examples)',
                paragraphs: [
                    'In practice, the prohibition captures most forms of continuous facial recognition deployed in public spaces by law enforcement authorities.',
                    'A system that scans individuals in real time in a city square or transport hub, comparing their faces against a database of suspects, would fall within the general prohibition unless it meets one of the specific exceptions.',
                    'Similarly, the use of facial recognition during public events to monitor attendees in real time would be captured.',
                    'By contrast, systems used for post-event analysis — for example, reviewing recorded footage after a crime has occurred — are not subject to the same prohibition, although they remain regulated under other parts of the AI Act.',
                    'Likewise, non-law enforcement uses fall outside the scope of this specific prohibition. A private entity using biometric identification within a controlled environment (e.g., access control systems) is not captured here, although other legal frameworks may apply.',
                    'More complex cases arise where systems operate in near real time or where the distinction between public and private space is blurred. In such cases, the classification may depend on how quickly identification results are acted upon and the degree of accessibility of the space.',
                ],
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'These two prohibitions further illustrate the layered logic of Article 5.',
                    'The restriction on biometric categorisation addresses the nature of the inference, preventing AI systems from assigning individuals to sensitive categories based on biometric data.',
                    'The framework for real-time biometric identification, by contrast, focuses on deployment context, limiting the use of powerful identification tools in public spaces by law enforcement authorities.',
                    'For companies and public bodies alike, the implication is that compliance cannot be assessed at a single point in the system lifecycle. It requires a combined analysis of:',
                ],
                bullets: [
                    { bold: '', text: 'the type of data used,' },
                    { bold: '', text: 'the nature of the outputs generated, and' },
                    { bold: '', text: 'the context in which the system is deployed.' },
                ],
                afterBullets: [
                    'As with the previous prohibitions, the boundary between permitted and prohibited practices is ultimately operational. It attaches directly to system design choices and deployment decisions, rather than abstract technical capabilities.',
                    'In the next edition, I will move beyond prohibited practices and begin unpacking the high-risk classification under the AI Act, focusing on how systems are assessed, classified, and brought into compliance in practice.',
                ],
            },
        ],
    },
    ro: {
        title: 'Practicile interzise sub AI Act (Partea IV): Categorizarea biometrică a trăsăturilor sensibile și identificarea biometrică în timp real pentru aplicarea legii',
        date: '29 martie 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Ultimul articol din seria care acoperă Practicile AI interzise sub EU AI Act.

Bună 👋 Mă numesc Matei Ștefan — sunt un profesionist juridic care lucrează la intersecția dintre drept, tehnologie și AI — și vă bineîntampin la a șasea ediție The AI Act Guy.

În articolul anterior, am examinat interdicțiile care vizează colectarea la scară largă a datelor biometrice și utilizarea sistemelor de recunoaștere a emoțiilor în medii asimetrice precum locurile de muncă și instituțiile educaționale.

Această ediție acoperă ultimele două practici interzise sub Articolul 5 al AI Act:`,
        introBullets: [
            { bold: 'Articolul 5(1)(g):', text: ' Sisteme de categorizare biometrică bazate pe caracteristici sensibile' },
            { bold: 'Articolul 5(1)(h):', text: ' Sisteme de identificare biometrică la distanță în timp real în spații accesibile publicului, pentru aplicarea legii' },
        ],
        introAfter: 'Aceste prevederi operează la niveluri diferite ale ciclului de viață al unui sistem AI. Una vizează stratul de inferență, restricționând modul în care datele biometrice pot fi folosite pentru a clasifica persoane în categorii protejate. Cealaltă se concentrează pe implementare, limitând utilizarea sistemelor de identificare în spații publice de către autoritățile de aplicare a legii.\n\nCa și în articolele anterioare, analiza este fundamentată pe Ghidurile Comisiei Europene privind Practicile AI Interzise, care oferă îndrumări interpretative privind modul în care aceste prevederi sunt probabile să fie aplicate în practică.',
        sections: [
            {
                heading: 'A. Categorizarea biometrică a trăsăturilor sensibile',
                isPartHeading: true,
            },
            {
                heading: 'Rațiune și obiectiv',
                paragraphs: [
                    'Interdicția privind categorizarea biometrică bazată pe caracteristici sensibile vizează o formă specifică de inferență: clasificarea persoanelor în categorii protejate folosind date biometrice.',
                    'Aceasta nu este o restricție privind sistemele biometrice în general, ci privind o utilizare downstream particulară a unor astfel de sisteme — anume, atribuirea de caracteristici precum rasă, opinii politice, convingeri religioase, orientare sexuală sau trăsături sensibile similare.',
                    'Rațiunea de bază este dublă.',
                    'În primul rând, aceste inferențe sunt adesea nesigure din punct de vedere științific, mai ales când sunt derivate din aspectul fizic sau semnale comportamentale. În al doilea rând, și mai fundamental, ele permit forme de profilare incompatibile cu drepturile fundamentale, inclusiv non-discriminarea și demnitatea umană.',
                    'Interdicția operează prin urmare la nivelul a ceea ce este inferat, mai degrabă decât cum sunt colectate sau procesate datele.',
                ],
            },
            {
                heading: 'Concepte și componente principale',
                paragraphs: [
                    'Interdicția se aplică acolo unde sunt prezente trei elemente.',
                    'În primul rând, trebuie să existe utilizarea de date biometrice. Aceasta include imagini faciale, date vocale, mers sau alte caracteristici fizice ori comportamentale care permit sau susțin identificarea.',
                    'În al doilea rând, sistemul trebuie să realizeze categorizare. Aceasta implică atribuirea persoanelor unor grupuri sau clase specifice pe baza unor atribute inferate.',
                    'În al treilea rând, categorizarea trebuie să vizeze caracteristici sensibile. Acestea se aliniază în linii mari cu categoriile protejate în dreptul UE, inclusiv:',
                ],
                bullets: [
                    { bold: '', text: 'origine rasială sau etnică' },
                    { bold: '', text: 'opinii politice' },
                    { bold: '', text: 'convingeri religioase sau filozofice' },
                    { bold: '', text: 'orientare sexuală' },
                ],
                afterBullets: [
                    'Două clarificări sunt relevante.',
                    'Interdicția vizează categorizarea bazată pe inferență, nu prelucrarea datelor furnizate explicit de către persoană. Un sistem care clasifică persoanele pe baza informațiilor auto-declarate nu intră în sfera acestei interdicții specifice, deși poate ridica probleme în alte regimuri juridice.',
                    'În plus, interdicția nu este limitată la sistemele care etichetează explicit persoanele. Sistemele care generează scoruri probabilistice sau clasamente legate de trăsături sensibile pot intra și ele în sfera de aplicare dacă efectuează categorizare în mod efectiv.',
                ],
            },
            {
                heading: 'Exemple în domeniu și în afara domeniului',
                paragraphs: [
                    'Distincția dintre configurațiile permise și interzise depinde atât de natura inferenței, cât și de sursa datelor.',
                    'Un sistem care analizează imagini faciale pentru a infera etnia sau orientarea sexuală a unei persoane și o atribuie unor categorii corespunzătoare ar intra direct în sfera interdicției. Același lucru se aplică sistemelor care încearcă să clasifice afilierea politică sau religioasă a persoanelor pe baza semnalelor biometrice precum trăsăturile faciale, tiparele vocale sau indicii comportamentali.',
                    'Similar, un model care generează scoruri ce indică probabilitatea ca o persoană să aparțină unui anumit grup sensibil — fără a-i atribui explicit o etichetă — poate fi totuși în sfera de aplicare dacă ieșirea este folosită pentru a grupa sau segmenta persoanele în consecință.',
                    'Prin contrast, sistemele care se bazează pe date auto-declarate nu intră în această interdicție. De exemplu, o platformă care le permite utilizatorilor să indice voluntar afilierea religioasă sau preferințele politice, și folosește acele informații pentru personalizarea conținutului, nu se angajează în categorizare biometrică în sensul Articolului 5.',
                    'De asemenea, categorizarea non-sensibilă rămâne în afara sferei. Sistemele care clasifică persoane pe baza intervalului de vârstă, dispoziției generale sau trăsăturilor comportamentale neprotejate — deși pot fi supuse altor cerințe de reglementare — nu sunt acoperite de această interdicție specifică.',
                    'Cazuri mai complexe apar când datele biometrice sunt folosite în combinație cu alte surse de date. Dacă un sistem folosește analiza facială ca o intrare printre multe altele pentru a infera trăsături sensibile, interdicția se poate aplica totuși, în funcție de rolul datelor biometrice în inferența globală.',
                ],
            },
            {
                heading: 'B. Identificarea biometrică la distanță (RBI) în timp real pentru aplicarea legii',
                isPartHeading: true,
            },
            {
                heading: 'Rațiune și obiectiv',
                paragraphs: [
                    'Interdicția privind identificarea biometrică la distanță în timp real în spații accesibile publicului pentru aplicarea legii abordează unul dintre cele mai dezbătute cazuri de utilizare sub AI Act.',
                    'Spre deosebire de alte interdicții, aceasta nu este absolută. Regulamentul stabilește o interdicție generală, însoțită de excepții definite restrictiv.',
                    'Preocuparea este că sistemele de identificare în timp real — cel mai adesea recunoaștere facială — permit supraveghere continuă la scară largă a persoanelor în spații publice. Aceasta are implicații directe asupra intimității, libertății de mișcare și libertății de întrunire.',
                    'În același timp, legiuitorul recunoaște că, în circumstanțe limitate, astfel de sisteme pot servi obiective legitime de securitate publică. Abordarea de reglementare combină prin urmare interdicția cu derogări strict delimitate.',
                ],
            },
            {
                heading: 'Concepte și componente',
                paragraphs: [
                    'Interdicția se aplică sistemelor care întrunesc patru criterii cumulative.',
                    'În primul rând, sistemul trebuie să efectueze identificare biometrică, adică să compare date biometrice cu o bază de date de referință pentru a identifica o persoană.',
                    'În al doilea rând, identificarea trebuie să fie la distanță, adică efectuată la distanță fără implicarea activă a persoanei.',
                    'În al treilea rând, trebuie să aibă loc în timp real, sau aproape în timp real, permițând intervenție imediată.',
                    'În al patrulea rând, utilizarea trebuie să fie în scopul aplicării legii și implementată în spații accesibile publicului.',
                    'Fiecare element contează.',
                    'Distincția dintre identificarea în timp real și post-eveniment este deosebit de relevantă. Sistemele folosite pentru a analiza filmare înregistrată după un incident nu sunt supuse aceleași interdicții, deși pot intra în clasificarea de risc ridicat.',
                    'Similar, noțiunea de spațiu accesibil publicului exclude mediile controlate cu acces restricționat, deși granițele pot depinde de context.',
                ],
            },
            {
                heading: 'Excepții de la interdicție',
                paragraphs: [
                    'AI Act permite utilizarea RBI în timp real în trei scenarii definite restrictiv:',
                ],
                bullets: [
                    { bold: '', text: 'căutarea țintită a unor victime specifice ale infracțiunilor, inclusiv persoane dispărute' },
                    { bold: '', text: 'prevenirea unei amenințări specifice, substanțiale și iminente la adresa vieții sau a integrității fizice' },
                    { bold: '', text: 'detectarea, localizarea, identificarea sau urmărirea penală a autorilor unor infracțiuni grave' },
                ],
                afterBullets: [
                    'Aceste excepții sunt supuse unor condiții stricte, inclusiv autorizare prealabilă și cerințe de proporționalitate.',
                    'Din perspectivă practică, aceasta înseamnă că RBI în timp real nu este în general disponibil ca instrument polițienesc, dar poate fi implementat în situații excepționale, specifice cazului.',
                    'Sarcina justificării revine autorității care implementează, iar utilizarea trebuie să fie demonstrabil necesară și proporțională cu obiectivul urmărit.',
                ],
            },
            {
                heading: 'Exemple în domeniu și în afara domeniului',
                paragraphs: [
                    'În practică, interdicția acoperă cele mai multe forme de recunoaștere facială continuă implementate în spații publice de către autoritățile de aplicare a legii.',
                    'Un sistem care scanează persoane în timp real într-o piață sau hub de transport, comparându-le fețele cu o bază de date de suspecți, ar intra în interdicția generală, cu excepția cazului în care întrunește una dintre excepțiile specifice.',
                    'Similar, utilizarea recunoașterii faciale în timpul evenimentelor publice pentru a monitoriza participanții în timp real ar fi capturată.',
                    'Prin contrast, sistemele utilizate pentru analiza post-eveniment — de exemplu, revizuirea filmare înregistrată după ce a avut loc o infracțiune — nu sunt supuse aceleași interdicții, deși rămân reglementate în alte părți ale AI Act.',
                    'De asemenea, utilizările care nu țin de aplicarea legii cad în afara sferei acestei interdicții specifice. O entitate privată care folosește identificarea biometrică într-un mediu controlat (de ex., sisteme de control al accesului) nu este captată aici, deși pot fi aplicabile alte cadre juridice.',
                    'Cazuri mai complexe apar când sistemele operează aproape în timp real sau acolo unde distincția dintre spațiul public și privat este nedefinită. În astfel de cazuri, clasificarea poate depinde de cât de rapid sunt valorificate rezultatele identificării și de gradul de accesibilitate al spațiului.',
                ],
            },
            {
                heading: 'Concluzie',
                paragraphs: [
                    'Aceste două interdicții ilustrează în continuare logica stratificată a Articolului 5.',
                    'Restricția privind categorizarea biometrică abordează natura inferenței, împiedicând sistemele AI să atribuie persoane unor categorii sensibile pe baza datelor biometrice.',
                    'Cadrul pentru identificarea biometrică în timp real, prin contrast, se concentrează pe contextul de implementare, limitând utilizarea instrumentelor de identificare puternice în spații publice de către autoritățile de aplicare a legii.',
                    'Pentru companii și organisme publice deopotrivă, implicația este că conformitatea nu poate fi evaluată într-un singur punct al ciclului de viață al sistemului. Aceasta necesită o analiză combinată a:',
                ],
                bullets: [
                    { bold: '', text: 'tipului de date utilizate,' },
                    { bold: '', text: 'naturii rezultatelor generate, și' },
                    { bold: '', text: 'contextului în care sistemul este implementat.' },
                ],
                afterBullets: [
                    'Ca și în cazul interdicțiilor anterioare, granița dintre practicile permise și cele interzise este în cele din urmă operațională. Ea se atașează direct alegerilor de proiectare a sistemului și deciziilor de implementare, mai degrabă decât capacităților tehnice abstracte.',
                    'În ediția următoare, voi merge dincolo de practicile interzise și voi începe să desfășor clasificarea de risc ridicat sub AI Act, concentrându-mă pe modul în care sistemele sunt evaluate, clasificate și aduse în conformitate în practică.',
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
