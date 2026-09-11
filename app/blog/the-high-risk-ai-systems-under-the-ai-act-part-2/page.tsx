'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The High-Risk AI Systems under the AI Act (Part II): Biometrics and Critical Infrastructure',
        date: 'May 14, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `The second article in the high-risk sub-series — examining the first two categories of the high-risk use-cases under Annex III: biometric systems and AI in critical infrastructure.

Hi 👋

My name is Matei Ștefan — I am a legal professional working at the intersection of law, tech and AI — and I welcome you to the next edition of The AI Act Guy.

In the previous edition, I laid out the classification framework for high-risk AI systems under Article 6 of the AI Act and walked through the Annex I route — the product-safety pathway covering AI systems embedded in regulated products such as medical devices, machinery, and motor vehicles. This edition opens the analysis of the Annex III route, which lists eight standalone high-risk use-case areas. The first two — biometrics and critical infrastructure — are the subject of this edition.

These two categories sit back-to-back in Annex III, but the regulatory rationale for each is different. Biometric systems are high-risk because of their direct interaction with individuals and the fundamental rights implications of identifying, categorising, or inferring traits from a person. Critical infrastructure systems are high-risk because of the systemic consequences of AI failure on essential services that society depends on.`,
        sections: [
            {
                heading: '1. Annex III, Point 1: Biometric Systems',
                paragraphs: [
                    'Annex III, point 1 lists three sub-categories of biometric AI systems that are high-risk:',
                ],
                bullets: [
                    { bold: '(a) Remote biometric identification systems', text: ', excluding those used for biometric verification (i.e., one-to-one identity confirmation).' },
                    { bold: '(b) AI systems intended to be used for biometric categorisation', text: ', according to sensitive or protected attributes or characteristics based on the inference of those attributes or characteristics.' },
                    { bold: '(c) AI systems intended to be used for emotion recognition.', text: '' },
                ],
                afterBullets: [
                    'Each of these sub-categories sits in close proximity to a specific Article 5 prohibition — real-time remote biometric identification for law enforcement under Article 5(1)(h), biometric categorisation based on sensitive attributes under Article 5(1)(g), and emotion recognition in the workplace and education under Article 5(1)(f) — and reading point 1 in isolation, without the Article 5 context developed in earlier editions of this newsletter, risks misclassification.',
                ],
            },
            {
                heading: '(a) Remote Biometric Identification (RBI)',
                paragraphs: [
                    'Remote biometric identification refers to AI systems that identify individuals at a distance, typically by comparing their biometric data (most commonly facial features) against a reference database, without the active participation of the individual. The paradigmatic example is a system that scans a crowd in a public space and matches faces against a watchlist.',
                    'The line between high-risk and prohibited under Article 5 is determined by who uses the system, where, and when:',
                ],
                bullets: [
                    { bold: 'Real-time RBI in publicly accessible spaces for law enforcement purposes', text: ' is, as a rule, prohibited under Article 5(1)(h), with narrowly defined exceptions (targeted searches for victims of certain crimes, prevention of imminent threats, identification of suspects of specific serious offences). Where the exceptions apply, the system is high-risk and subject to additional procedural safeguards under Article 5(2)–(7).' },
                    { bold: 'Post-remote RBI', text: ' (operating on previously acquired material) for law enforcement is high-risk under Annex III but not prohibited, subject to authorisation requirements under Article 26(10).' },
                    { bold: 'RBI by private actors, or by public authorities for non-law-enforcement purposes', text: ', is generally high-risk under Annex III without falling within the Article 5 prohibition.' },
                ],
                afterBullets: [
                    'The exclusion of biometric verification from the high-risk category is important. Verification is a one-to-one comparison — the system confirms whether a person is who they claim to be, typically by comparing a live capture against a stored template (unlocking a phone, accessing a bank account). Because the individual is actively participating and the comparison is bounded, the systemic risk profile is materially different from one-to-many identification. Verification systems are therefore not high-risk under this point, although they may attract obligations under other regimes (the GDPR, in particular).',
                ],
            },
            {
                heading: '(b) Biometric Categorisation',
                paragraphs: [
                    'Biometric categorisation systems infer or assign individuals to categories based on biometric data. Annex III, point 1(b) captures categorisation systems that operate on sensitive or protected attributes or characteristics, based on the inference of those attributes from biometric data.',
                    'Again, the Article 5 boundary matters. Article 5(1)(g) prohibits biometric categorisation systems that categorise individuals based on biometric data to deduce or infer race, political opinions, trade union membership, religious or philosophical beliefs, sex life, or sexual orientation, with a narrow law-enforcement carve-out. Annex III, point 1(b) operates as the high-risk catchment for categorisation systems that are not within the Article 5 prohibition — for example, categorisation systems used in commercial contexts that infer non-prohibited sensitive attributes, or systems used by public authorities outside the law-enforcement carve-out.',
                    'The interpretive challenge for providers is that "sensitive or protected attributes or characteristics" in Annex III is not strictly co-extensive with the closed list in Article 5(1)(g). The Annex III formulation is broader — it can capture, for instance, categorisation by age bracket, gender, or other characteristics that are not necessarily prohibited but are sufficiently sensitive to warrant high-risk treatment.',
                ],
            },
            {
                heading: '(c) Emotion Recognition',
                paragraphs: [
                    'Emotion recognition AI — systems that infer emotions or intentions from biometric data — is high-risk under Annex III, point 1(c). The Article 5 boundary here is set by context of use: Article 5(1)(f) prohibits the use of emotion recognition systems in the workplace and in educational institutions, except for medical or safety reasons.',
                    'This produces a tiered structure: emotion recognition in the workplace and in education is prohibited (subject to the medical/safety exception); emotion recognition in any other context where it is deployed is high-risk under Annex III. The category captures, for example, emotion recognition in customer service, in market research, or in border-related contexts (subject to point 7 considerations on migration).',
                    'A practical consequence: a provider placing an emotion recognition system on the EU market cannot simply rely on Article 5 carve-outs to escape the regulatory perimeter. Even where the deployment context is not prohibited, the high-risk regime applies in full, including conformity assessment, technical documentation, and post-market monitoring.',
                ],
            },
            {
                heading: 'Practical examples',
                paragraphs: [],
                bullets: [
                    { bold: 'Remote biometric identification:', text: ' A municipality deploys facial recognition cameras in a central square to identify wanted persons against a police watchlist, operating in real time on live video feeds. Used in real time by law enforcement in a publicly accessible space, this is prohibited under Article 5(1)(h) unless one of the narrow exceptions applies; the same system applied retrospectively to recorded footage (post-remote RBI) is high-risk under point 1(a) and subject to authorisation under Article 26(10). By contrast, a smartphone unlock feature that compares the user’s face to a stored template is biometric verification — outside the high-risk category entirely.' },
                    { bold: 'Biometric categorisation:', text: ' A retailer installs in-store cameras to estimate customers’ age range and gender for marketing analytics. Because age and gender are sensitive characteristics inferred from biometric data, the system is high-risk under point 1(b). The same system upgraded to infer customers’ religion or sexual orientation (for example, to "personalise" displays) crosses the line into the Article 5(1)(g) prohibition and is unlawful regardless of the conformity assessment performed.' },
                    { bold: 'Emotion recognition:', text: ' A call centre operator deploys AI that analyses voice signals to flag "frustrated" callers for supervisor intervention. In the customer-service context, this is high-risk under point 1(c). The same system deployed to monitor the call centre’s employees (for instance, scoring agents on perceived empathy) shifts into the workplace and is prohibited under Article 5(1)(f), absent a medical or safety justification.' },
                ],
            },
            {
                heading: '2. Annex III, Point 2: Critical Infrastructure',
                paragraphs: [
                    'Annex III, point 2 covers AI systems intended to be used as safety components in the management and operation of critical digital infrastructure, road traffic, or in the supply of water, gas, heating, or electricity.',
                    'Three elements of this scope deserve close attention.',
                ],
            },
            {
                heading: '(a) "Safety Component"',
                paragraphs: [
                    'The classification turns on the AI system functioning as a safety component. Article 3(14) defines a safety component as a component of a product or system that fulfils a safety function, or whose failure or malfunction endangers the health and safety of persons or property.',
                    'This is a functional test, not a product-category test. The question is what the AI system does in the operational chain, not where it sits in the product hierarchy. An AI system that optimises grid load distribution for commercial efficiency is not, on its face, a safety component. The same model deployed to trigger automated load-shedding to prevent grid collapse is a safety component — its failure has direct consequences for the integrity of the supply system.',
                    'In practice, the same AI may sit on either side of the line depending on its intended purpose as defined by the provider. The intended-purpose framing under Article 3(12) is therefore decisive: providers must be precise in defining whether the system is offered as a safety-relevant component, because that framing drives the high-risk classification and the full obligation set that follows.',
                ],
            },
            {
                heading: '(b) The Sectoral List',
                paragraphs: [
                    'The list in point 2 is closed:',
                ],
                bullets: [
                    { bold: 'Critical digital infrastructure', text: ' (within the meaning of Annex 1, point 8 of the NIS2 Directive — essentially, internet exchange points, DNS service providers, top-level domain name registries, cloud computing service providers, data centre service providers, content delivery networks, trust service providers, and providers of public electronic communications networks).' },
                    { bold: 'Road traffic.', text: '' },
                    { bold: 'Supply of water, gas, heating, or electricity.', text: '' },
                ],
                afterBullets: [
                    'Sectors covered by the broader NIS2 framework but not in this list (for example, banking, financial market infrastructures, healthcare, postal services, waste management, food production) are not automatically captured under Annex III, point 2. They may, however, fall within Annex III through other points — healthcare AI through the Annex I route via the Medical Device Regulation, financial AI through point 5 on essential services (covered in the next edition of this sub-series), and so on.',
                ],
            },
            {
                heading: '(c) The Article 6(3) Filter',
                paragraphs: [
                    'The Article 6(3) filter introduced in the previous edition applies to Annex III, point 2 as it applies to the other Annex III categories. A safety-component AI system in critical infrastructure is presumptively high-risk; the provider may rebut that presumption only by demonstrating that the system does not pose a significant risk of harm to health, safety, or fundamental rights, by reference to the four cumulative conditions in Article 6(3).',
                    'In practice, the filter is narrower for critical infrastructure than for many other Annex III categories. The cumulative conditions require, among other things, that the AI system be intended to perform a narrow procedural task or improve the result of a previously completed human activity, without being intended to replace or influence human assessment. A system that triggers automated grid responses, autonomously routes traffic, or controls water-treatment dosing rarely fits within those conditions. The presumption of high-risk classification under point 2 therefore tends to hold in practice.',
                ],
            },
            {
                heading: 'Practical examples',
                paragraphs: [],
                bullets: [
                    { bold: 'In scope (safety component):', text: ' An AI system that monitors grid frequency in real time and automatically triggers load-shedding to prevent cascading blackouts is a safety component under Article 3(14): its failure or malfunction directly endangers the integrity of electricity supply. The system is high-risk under point 2, and the Article 6(3) filter is unlikely to rebut the presumption.' },
                    { bold: 'Out-of-scope (commercial optimisation):', text: ' An AI system used by the same grid operator to forecast day-ahead demand and optimise generator dispatch for cost efficiency is not a safety component: its failure would produce financial loss, not a safety risk. It sits outside point 2 — although it may attract obligations under other parts of the EU electricity acquis.' },
                    { bold: 'The intended-purpose pivot:', text: ' A traffic-light optimisation AI offered to municipalities purely to reduce average journey times is not, on its face, a safety component. The same model, marketed and configured to override signal timings in response to detected hazards (e.g. emergency-vehicle priority, collision-imminent intervention), is performing a safety function and falls within point 2. The provider’s declared intended purpose under Article 3(12) is decisive — which is why precision in the technical documentation matters operationally, not just formally.' },
                ],
            },
            {
                heading: '3. Practical Implications for Providers and Deployers',
                paragraphs: [
                    'For providers, three priorities follow from the analysis above:',
                ],
                bullets: [
                    { bold: '', text: 'Define the intended purpose of the system with precision, particularly for systems in critical infrastructure, where the safety-component characterisation drives classification.' },
                    { bold: '', text: 'Map the system’s functions against both Article 5 and Annex III, point 1, before assuming a "high-risk" outcome — a system designed for the wrong context may be prohibited rather than merely high-risk.' },
                    { bold: '', text: 'Plan for layered compliance: the AI Act’s high-risk obligations integrate with, but do not replace, the GDPR (for biometrics) and NIS2/sectoral safety regimes (for critical infrastructure).' },
                ],
                afterBullets: [
                    'For deployers, the central question is the deployment context. The same biometric categorisation system can shift from high-risk to prohibited depending on where and how it is used; the same critical-infrastructure AI can sit inside or outside Annex III depending on whether it performs a safety function in the deployer’s operational chain. Deployer-side controls — on context, on data, on monitoring — are not optional add-ons; they determine the regulatory category that applies.',
                ],
            },
            {
                heading: '4. Looking Ahead',
                paragraphs: [
                    'In the next edition of The AI Act Guy, I will turn to the next three categories of standalone high-risk systems under Annex III: education and vocational training (point 3), employment, workers management and access to self-employment (point 4), and access to and enjoyment of essential private services and essential public services and benefits (point 5). Together, these three categories form what can usefully be described as the "life chances" cluster — AI systems that affect individuals’ access to opportunities, livelihood, and basic services, and whose regulatory treatment is shaped by anti-discrimination, social-protection, and consumer-protection considerations as much as by AI Act-specific concerns.',
                ],
            },
        ],
    },
    ro: {
        title: 'Sistemele AI cu risc ridicat sub AI Act (Partea II): Biometrice și infrastructură critică',
        date: '14 mai 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Al doilea articol din sub-seria privind riscul ridicat — examinând primele două categorii ale cazurilor de utilizare cu risc ridicat sub Anexa III: sistemele biometrice și AI în infrastructura critică.

Bună 👋

Mă numesc Matei Ștefan — sunt un profesionist juridic care lucrează la intersecția dintre drept, tehnologie și AI — și vă bineîntampin la următoarea ediție The AI Act Guy.

În ediția anterioară, am așezat cadrul de clasificare pentru sistemele AI cu risc ridicat sub Articolul 6 al AI Act și am parcurs ruta Anexei I — calea de siguranță a produselor care acoperă sistemele AI integrate în produse reglementate precum dispozitive medicale, utilaje și autovehicule. Această ediție deschide analiza rutei Anexei III, care listează opt domenii de utilizare cu risc ridicat de sine stătătoare. Primele două — biometrice și infrastructură critică — fac obiectul acestei ediții.

Aceste două categorii stau spate în spate în Anexa III, dar raționamentul regulatoriu pentru fiecare este diferit. Sistemele biometrice sunt cu risc ridicat datorită interacțiunii lor directe cu persoanele și implicațiilor asupra drepturilor fundamentale ale identificării, categorizării sau inferenței trăsăturilor de la o persoană. Sistemele de infrastructură critică sunt cu risc ridicat datorită consecințelor sistemice ale eșecului AI asupra serviciilor esențiale de care depinde societatea.`,
        sections: [
            {
                heading: '1. Anexa III, Punctul 1: Sisteme biometrice',
                paragraphs: [
                    'Anexa III, punctul 1 listează trei sub-categorii de sisteme AI biometrice care sunt cu risc ridicat:',
                ],
                bullets: [
                    { bold: '(a) Sisteme de identificare biometrică la distanță', text: ', excluzând pe cele utilizate pentru verificare biometrică (adică confirmare unu-la-unu a identității).' },
                    { bold: '(b) Sisteme AI destinate să fie utilizate pentru categorizare biometrică', text: ', conform atributelor sau caracteristicilor sensibile sau protejate bazate pe inferența acelor atribute sau caracteristici.' },
                    { bold: '(c) Sisteme AI destinate să fie utilizate pentru recunoașterea emoțiilor.', text: '' },
                ],
                afterBullets: [
                    'Fiecare dintre aceste sub-categorii stă în proximitate apropiată cu o interdicție specifică a Articolului 5 — identificarea biometrică la distanță în timp real pentru aplicarea legii sub Articolul 5(1)(h), categorizarea biometrică bazată pe atribute sensibile sub Articolul 5(1)(g) și recunoașterea emoțiilor la locul de muncă și în educație sub Articolul 5(1)(f) — iar citirea punctului 1 în izolare, fără contextul Articolului 5 dezvoltat în edițiile anterioare ale acestui newsletter, riscă o clasificare greșită.',
                ],
            },
            {
                heading: '(a) Identificarea biometrică la distanță (RBI)',
                paragraphs: [
                    'Identificarea biometrică la distanță se referă la sistemele AI care identifică persoane la distanță, de obicei prin compararea datelor lor biometrice (cel mai adesea trăsăturile faciale) cu o bază de date de referință, fără participarea activă a persoanei. Exemplul paradigmatic este un sistem care scanează o mulțime într-un spațiu public și potrivește fețele cu o listă de urmărire.',
                    'Linia dintre risc ridicat și interzis sub Articolul 5 este determinată de cine utilizează sistemul, unde și când:',
                ],
                bullets: [
                    { bold: 'RBI în timp real în spații accesibile publicului în scopul aplicării legii', text: ' este, ca regulă, interzisă sub Articolul 5(1)(h), cu excepții definite restrictiv (căutări țintite ale victimelor anumitor infracțiuni, prevenirea amenințărilor iminente, identificarea suspecților unor infracțiuni grave specifice). Acolo unde se aplică excepțiile, sistemul este cu risc ridicat și supus unor măsuri procedurale de protecție suplimentare sub Articolul 5(2)–(7).' },
                    { bold: 'RBI post-eveniment', text: ' (operând pe materiale dobândite anterior) pentru aplicarea legii este cu risc ridicat sub Anexa III, dar nu interzisă, supusă cerințelor de autorizare sub Articolul 26(10).' },
                    { bold: 'RBI de către actori privați sau de către autorități publice în scopuri non-de-aplicare a legii', text: ', este în general cu risc ridicat sub Anexa III fără a intra în interdicția Articolului 5.' },
                ],
                afterBullets: [
                    'Excluderea verificării biometrice din categoria cu risc ridicat este importantă. Verificarea este o comparație unu-la-unu — sistemul confirmă dacă o persoană este cine pretinde că este, de obicei prin compararea unei capturi live cu un șablon stocat (deblocarea unui telefon, accesarea unui cont bancar). Deoarece persoana participă activ și comparația este delimitată, profilul de risc sistemic este material diferit de identificarea unu-la-mulți. Sistemele de verificare nu sunt prin urmare cu risc ridicat sub acest punct, deși pot atrage obligații sub alte regimuri (GDPR, în particular).',
                ],
            },
            {
                heading: '(b) Categorizarea biometrică',
                paragraphs: [
                    'Sistemele de categorizare biometrică inferă sau atribuie persoane unor categorii bazate pe date biometrice. Anexa III, punctul 1(b) acoperă sistemele de categorizare care operează pe atribute sau caracteristici sensibile sau protejate, bazate pe inferența acelor atribute din date biometrice.',
                    'Din nou, granița Articolului 5 contează. Articolul 5(1)(g) interzice sistemele de categorizare biometrică care clasifică persoane bazate pe date biometrice pentru a deduce sau inferi rasă, opinii politice, apartenență sindicală, convingeri religioase sau filozofice, viață sexuală sau orientare sexuală, cu o excepție îngustă pentru aplicarea legii. Anexa III, punctul 1(b) operează ca punctul de captare cu risc ridicat pentru sistemele de categorizare care nu se află în interdicția Articolului 5 — de exemplu, sistemele de categorizare utilizate în contexte comerciale care inferă atribute sensibile neinterzise sau sistemele utilizate de autorități publice în afara excepției pentru aplicarea legii.',
                    'Provocarea interpretativă pentru furnizori este că „atributele sau caracteristicile sensibile sau protejate" din Anexa III nu este strict co-extensiv cu lista închisă din Articolul 5(1)(g). Formularea Anexei III este mai largă — poate capta, de exemplu, categorizarea după interval de vârstă, gen sau alte caracteristici care nu sunt neapărat interzise, dar sunt suficient de sensibile pentru a justifica tratamentul cu risc ridicat.',
                ],
            },
            {
                heading: '(c) Recunoașterea emoțiilor',
                paragraphs: [
                    'AI-ul de recunoaștere a emoțiilor — sisteme care inferă emoții sau intenții din date biometrice — este cu risc ridicat sub Anexa III, punctul 1(c). Granița Articolului 5 aici este stabilită prin contextul de utilizare: Articolul 5(1)(f) interzice utilizarea sistemelor de recunoaștere a emoțiilor la locul de muncă și în instituții educaționale, cu excepția motivelor medicale sau de siguranță.',
                    'Aceasta produce o structură pe niveluri: recunoașterea emoțiilor la locul de muncă și în educație este interzisă (sub rezerva excepției medicale/de siguranță); recunoașterea emoțiilor în orice alt context în care este implementată este cu risc ridicat sub Anexa III. Categoria acoperă, de exemplu, recunoașterea emoțiilor în servicii pentru clienți, în cercetare de piață sau în contexte legate de frontieră (sub rezerva considerațiilor punctului 7 privind migrația).',
                    'O consecință practică: un furnizor care introduce un sistem de recunoaștere a emoțiilor pe piața UE nu se poate baza pur și simplu pe excepțiile Articolului 5 pentru a scăpa perimetrul regulatoriu. Chiar și acolo unde contextul de implementare nu este interzis, regimul cu risc ridicat se aplică integral, inclusiv evaluarea conformității, documentația tehnică și monitorizarea post-piață.',
                ],
            },
            {
                heading: 'Exemple practice',
                paragraphs: [],
                bullets: [
                    { bold: 'Identificare biometrică la distanță:', text: ' O municipalitate implementează camere de recunoaștere facială într-o piață centrală pentru a identifica persoane căutate în comparație cu o listă de urmărire a poliției, operând în timp real pe fluxuri video live. Utilizat în timp real de aplicarea legii într-un spațiu accesibil publicului, acesta este interzis sub Articolul 5(1)(h), cu excepția cazului în care se aplică una dintre excepțiile înguste; același sistem aplicat retrospectiv pe filmare înregistrată (RBI post-eveniment) este cu risc ridicat sub punctul 1(a) și supus autorizării sub Articolul 26(10). Prin contrast, o funcție de deblocare a telefonului care compară fața utilizatorului cu un șablon stocat este verificare biometrică — în afara categoriei cu risc ridicat în întregime.' },
                    { bold: 'Categorizare biometrică:', text: ' Un retailer instalează camere în magazin pentru a estima intervalul de vârstă și genul clienților pentru analitică de marketing. Deoarece vârsta și genul sunt caracteristici sensibile inferate din date biometrice, sistemul este cu risc ridicat sub punctul 1(b). Același sistem upgradat să infere religia sau orientarea sexuală a clienților (de exemplu, pentru a „personaliza" afișările) trece linia în interdicția Articolului 5(1)(g) și este ilegal indiferent de evaluarea conformității efectuată.' },
                    { bold: 'Recunoaștere a emoțiilor:', text: ' Un operator de call center implementează AI care analizează semnale vocale pentru a semnala apelanții „frustrați" pentru intervenția supervizorului. În contextul serviciilor pentru clienți, acesta este cu risc ridicat sub punctul 1(c). Același sistem implementat pentru a monitoriza angajații call center-ului (de exemplu, scorând agenții pe empatia percepută) se mută la locul de muncă și este interzis sub Articolul 5(1)(f), în absența unei justificări medicale sau de siguranță.' },
                ],
            },
            {
                heading: '2. Anexa III, Punctul 2: Infrastructură critică',
                paragraphs: [
                    'Anexa III, punctul 2 acoperă sistemele AI destinate să fie utilizate ca componente de siguranță în managementul și operarea infrastructurii digitale critice, traficul rutier sau în furnizarea de apă, gaz, încălzire sau electricitate.',
                    'Trei elemente ale acestei sfere merită atenție atentă.',
                ],
            },
            {
                heading: '(a) „Componentă de siguranță"',
                paragraphs: [
                    'Clasificarea se învârte în jurul funcționării sistemului AI ca o componentă de siguranță. Articolul 3(14) definește o componentă de siguranță ca o componentă a unui produs sau sistem care îndeplinește o funcție de siguranță sau al cărei eșec sau funcționare defectuoasă pune în pericol sănătatea și siguranța persoanelor sau proprietății.',
                    'Acesta este un test funcțional, nu un test al categoriei de produs. Întrebarea este ce face sistemul AI în lanțul operațional, nu unde stă în ierarhia produsului. Un sistem AI care optimizează distribuția sarcinii rețelei pentru eficiență comercială nu este, la prima vedere, o componentă de siguranță. Același model implementat pentru a declanșa eliberarea automată a sarcinii pentru a preveni colapsul rețelei este o componentă de siguranță — eșecul său are consecințe directe asupra integrității sistemului de furnizare.',
                    'În practică, același AI poate sta de o parte sau de cealaltă a liniei, în funcție de scopul său intenționat așa cum este definit de furnizor. Încadrarea scopului intenționat sub Articolul 3(12) este prin urmare decisivă: furnizorii trebuie să fie preciși în definirea dacă sistemul este oferit ca o componentă relevantă pentru siguranță, deoarece acea încadrare determină clasificarea cu risc ridicat și întregul set de obligații care urmează.',
                ],
            },
            {
                heading: '(b) Lista sectorială',
                paragraphs: [
                    'Lista din punctul 2 este închisă:',
                ],
                bullets: [
                    { bold: 'Infrastructură digitală critică', text: ' (în sensul Anexei 1, punctul 8 al Directivei NIS2 — în esență, puncte de schimb internet, furnizori de servicii DNS, registre de nume de domeniu de nivel superior, furnizori de servicii cloud computing, furnizori de servicii de centre de date, rețele de livrare conținut, furnizori de servicii de încredere și furnizori de rețele publice de comunicații electronice).' },
                    { bold: 'Trafic rutier.', text: '' },
                    { bold: 'Furnizare de apă, gaz, încălzire sau electricitate.', text: '' },
                ],
                afterBullets: [
                    'Sectoarele acoperite de cadrul mai larg NIS2, dar nu în această listă (de exemplu, bancar, infrastructuri ale pieței financiare, sănătate, servicii poștale, gestionarea deșeurilor, producția de alimente) nu sunt automat capturate sub Anexa III, punctul 2. Pot, totuși, intra sub Anexa III prin alte puncte — AI-ul în sănătate prin ruta Anexei I prin Regulamentul privind dispozitivele medicale, AI-ul financiar prin punctul 5 privind serviciile esențiale (acoperit în ediția următoare a acestei sub-serii), și așa mai departe.',
                ],
            },
            {
                heading: '(c) Filtrul Articolului 6(3)',
                paragraphs: [
                    'Filtrul Articolului 6(3) introdus în ediția anterioară se aplică Anexei III, punctul 2 așa cum se aplică celorlalte categorii ale Anexei III. Un sistem AI de componentă de siguranță în infrastructura critică este prezumtiv cu risc ridicat; furnizorul poate respinge acea prezumție doar prin demonstrarea faptului că sistemul nu prezintă un risc semnificativ de daune asupra sănătății, siguranței sau drepturilor fundamentale, prin referire la cele patru condiții cumulative din Articolul 6(3).',
                    'În practică, filtrul este mai îngust pentru infrastructura critică decât pentru multe alte categorii ale Anexei III. Condițiile cumulative necesită, printre altele, ca sistemul AI să fie destinat să îndeplinească o sarcină procedurală îngustă sau să îmbunătățească rezultatul unei activități umane finalizate anterior, fără a fi destinat să înlocuiască sau să influențeze evaluarea umană. Un sistem care declanșează răspunsuri automate ale rețelei, rutează autonom traficul sau controlează dozarea de tratare a apei se potrivește rar cu acele condiții. Prezumția clasificării cu risc ridicat sub punctul 2 tinde prin urmare să se mențină în practică.',
                ],
            },
            {
                heading: 'Exemple practice',
                paragraphs: [],
                bullets: [
                    { bold: 'În sferă (componentă de siguranță):', text: ' Un sistem AI care monitorizează frecvența rețelei în timp real și declanșează automat eliberarea sarcinii pentru a preveni căderile în cascadă este o componentă de siguranță sub Articolul 3(14): eșecul sau funcționarea defectuoasă a sa pune în pericol direct integritatea furnizării de electricitate. Sistemul este cu risc ridicat sub punctul 2, iar filtrul Articolului 6(3) este improbabil să respingă prezumția.' },
                    { bold: 'În afara sferei (optimizare comercială):', text: ' Un sistem AI utilizat de același operator de rețea pentru a prognoza cererea zilei anterioare și a optimiza expedierea generatorului pentru eficiența costurilor nu este o componentă de siguranță: eșecul său ar produce pierderi financiare, nu un risc de siguranță. Se află în afara punctului 2 — deși poate atrage obligații sub alte părți ale acquis-ului UE de electricitate.' },
                    { bold: 'Pivotul scopului intenționat:', text: ' Un AI de optimizare a semaforului oferit municipalităților pur și simplu pentru a reduce timpii medii de călătorie nu este, la prima vedere, o componentă de siguranță. Același model, comercializat și configurat să anuleze sincronizările semnalelor ca răspuns la pericole detectate (de exemplu, prioritatea vehiculelor de urgență, intervenția imediată în coliziune), îndeplinește o funcție de siguranță și se încadrează în punctul 2. Scopul intenționat declarat al furnizorului sub Articolul 3(12) este decisiv — motiv pentru care precizia în documentația tehnică contează operațional, nu doar formal.' },
                ],
            },
            {
                heading: '3. Implicații practice pentru furnizori și deployeri',
                paragraphs: [
                    'Pentru furnizori, trei priorități rezultă din analiza de mai sus:',
                ],
                bullets: [
                    { bold: '', text: 'Definește scopul intenționat al sistemului cu precizie, în special pentru sistemele din infrastructura critică, unde caracterizarea componentei de siguranță determină clasificarea.' },
                    { bold: '', text: 'Cartografiază funcțiile sistemului în comparație cu atât Articolul 5, cât și Anexa III, punctul 1, înainte de a presupune un rezultat „cu risc ridicat" — un sistem proiectat pentru contextul greșit poate fi interzis mai degrabă decât doar cu risc ridicat.' },
                    { bold: '', text: 'Planifică pentru conformitate pe niveluri: obligațiile cu risc ridicat ale AI Act se integrează cu, dar nu înlocuiesc, GDPR (pentru biometrice) și regimurile NIS2/sectoriale de siguranță (pentru infrastructura critică).' },
                ],
                afterBullets: [
                    'Pentru deployeri, întrebarea centrală este contextul de implementare. Același sistem de categorizare biometrică se poate muta de la risc ridicat la interzis în funcție de unde și cum este utilizat; același AI de infrastructură critică poate sta în interiorul sau în afara Anexei III în funcție de faptul dacă îndeplinește o funcție de siguranță în lanțul operațional al deployer-ului. Controalele din partea deployer-ului — asupra contextului, asupra datelor, asupra monitorizării — nu sunt suplimente opționale; ele determină categoria regulatorie care se aplică.',
                ],
            },
            {
                heading: '4. Privind înainte',
                paragraphs: [
                    'În ediția următoare a The AI Act Guy, mă voi îndrepta către următoarele trei categorii de sisteme cu risc ridicat de sine stătătoare sub Anexa III: educație și formare profesională (punctul 3), ocuparea forței de muncă, managementul lucrătorilor și accesul la activități independente (punctul 4) și acces la și beneficierea de servicii private esențiale și servicii și beneficii publice esențiale (punctul 5). Împreună, aceste trei categorii formează ceea ce poate fi descris util ca clusterul „șanselor de viață" — sisteme AI care afectează accesul persoanelor la oportunități, mijloace de trai și servicii de bază și al căror tratament regulatoriu este modelat de considerații anti-discriminare, protecție socială și protecție a consumatorilor la fel de mult ca de preocupări specifice AI Act.',
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
