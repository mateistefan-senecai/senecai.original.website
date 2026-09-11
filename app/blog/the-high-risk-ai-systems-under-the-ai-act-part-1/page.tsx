'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The High-Risk AI Systems under the AI Act (Part I): The Classification Framework and Annex I',
        date: 'May 6, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `The first article in a four-part series examining the AI Act’s high-risk classification regime — starting with the architectural logic of Article 6 and the product-safety route under Annex I.

High-risk classification under the AI Act is not intuitive. It is built through routes, thresholds, and exceptions that must be navigated with care.

Hi 👋

My name is Matei Ștefan — I am a legal professional working at the intersection of law, tech and AI — and I welcome you to the tenth edition of The AI Act Guy.

In the previous editions, I worked through the prohibited practices under Article 5 and, most recently, the regulatory contours of agentic AI systems. This edition opens a new sub-series within the newsletter, dedicated to the high-risk regime under the AI Act.

The high-risk category sits at the centre of the AI Act’s regulatory architecture. It is where the bulk of the Regulation’s substantive obligations apply — risk management, data governance, technical documentation, transparency, human oversight, accuracy, robustness, cybersecurity, conformity assessment, post-market monitoring, and CE marking. Most operational compliance work for providers and deployers of AI systems in the EU is, in practice, work on high-risk systems.

The sub-series will be structured in four parts:`,
        introBullets: [
            { bold: 'Part I (this edition)', text: ' — the classification framework under Article 6 and the Annex I route (product-safety legislation).' },
            { bold: 'Part II', text: ' — Annex III, points 1 and 2: biometrics and critical infrastructure.' },
            { bold: 'Part III', text: ' — Annex III, points 3 to 5: education, employment, and access to essential services.' },
            { bold: 'Part IV', text: ' — Annex III, points 6 to 8: law enforcement, migration and border control, and administration of justice and democratic processes.' },
        ],
        introAfter: 'The aim of this opening edition is to lay down the structural scaffolding. Before walking through specific Annex III categories in later articles, it is worth understanding how a system becomes high-risk in the first place, and what the consequences of that classification are.',
        sections: [
            {
                heading: 'The Two Routes to High-Risk Classification',
                paragraphs: [
                    'Article 6 of the AI Act provides two distinct routes through which an AI system can be classified as high-risk. The two routes operate independently. A system can fall into one without falling into the other, but a system needs to fall into only one to be subject to the full high-risk obligation set.',
                    'The two routes are:',
                ],
                bullets: [
                    { bold: 'Route 1 (Article 6(1)) — the Annex I route.', text: ' The AI system is a safety component of, or is itself, a product covered by EU harmonisation legislation listed in Annex I, and that product is required to undergo a third-party conformity assessment under that legislation.' },
                    { bold: 'Route 2 (Article 6(2)) — the Annex III route.', text: ' The AI system is intended to be used in one of the use-case areas listed in Annex III (biometrics, critical infrastructure, education, employment, access to essential services, law enforcement, migration, administration of justice and democratic processes).' },
                ],
                afterBullets: [
                    'This dual structure reflects the AI Act’s hybrid regulatory nature. The Regulation simultaneously functions as a product safety law (Annex I) and as a fundamental rights law (Annex III). The two routes track these two regulatory rationales.',
                ],
            },
            {
                heading: 'Route 1: Annex I — AI Systems Embedded in Regulated Products',
                paragraphs: [
                    'Annex I lists the EU harmonisation legislation that triggers the first route. The list is split into two sections:',
                ],
                bullets: [
                    { bold: 'Section A', text: ' — instruments based on the New Legislative Framework (NLF), covering machinery, toys, recreational craft, lifts, equipment in potentially explosive atmospheres, radio equipment, pressure equipment, cableway installations, personal protective equipment, gas appliances, medical devices, and in vitro diagnostic medical devices.' },
                    { bold: 'Section B', text: ' — other Union harmonisation legislation, covering civil aviation security, two- and three-wheel vehicles, agricultural and forestry vehicles, marine equipment, rail systems, motor vehicles and their trailers, and unmanned aircraft.' },
                ],
                afterBullets: [
                    'For Route 1 to apply, two cumulative conditions must be met:',
                    '1. The AI system is either a safety component of a product, or is itself a product, covered by one of the instruments listed in Annex I.',
                    '2. That product must be required to undergo a third-party conformity assessment under the relevant Annex I instrument.',
                    'The second condition is critical. Not every product covered by Annex I legislation requires third-party assessment — many can be self-certified by the manufacturer. The AI Act’s Annex I route only attaches to products that already require third-party scrutiny under sectoral law. The logic is straightforward: where the EU legislator has already determined that a product category is sufficiently sensitive to require third-party conformity assessment, an AI component embedded in that product inherits that sensitivity.',
                    'A medical diagnostic AI integrated into a Class IIa or higher medical device is a paradigmatic example. So is an AI safety component in industrial machinery, or an AI system controlling lift safety functions.',
                ],
            },
            {
                heading: 'Why This Route Matters: Integration with Existing Conformity Ecosystems',
                paragraphs: [
                    'The practical consequence of Route 1 is that the AI Act does not create a parallel conformity assessment process. Instead, the AI-specific requirements are integrated into the existing sectoral assessment under the relevant Annex I instrument.',
                    'This has several implications. First, the notified body that already assesses conformity under the sectoral legislation — under the Medical Device Regulation, for example — will also assess compliance with the AI Act’s essential requirements. There is no separate AI Act notified body for these systems. Second, the timing follows the sectoral framework: the AI Act gives Annex I systems an extended transition period, with high-risk obligations becoming applicable by August 2027 (rather than August 2026 for Annex III systems). Third, for systems falling under Section B of Annex I, Article 2(2) provides a partial carve-out: only specific articles apply, with the substantive high-risk requirements integrating into the sectoral regime rather than applying directly.',
                    'For providers, this means Route 1 is rarely a stand-alone exercise. Compliance is built on top of an existing sectoral compliance trajectory, not designed in isolation.',
                ],
            },
            {
                heading: 'Route 2: Annex III — Standalone High-Risk Systems',
                paragraphs: [
                    'The second route covers AI systems whose risk profile derives not from the product they are embedded in, but from the use case they are deployed in. Annex III lists eight categories of such use cases:',
                ],
                bullets: [
                    { bold: '1. Biometrics', text: ' (where their use is permitted under Union or national law).' },
                    { bold: '2. Critical infrastructure', text: '.' },
                    { bold: '3. Education and vocational training', text: '.' },
                    { bold: '4. Employment, workers management and access to self-employment', text: '.' },
                    { bold: '5. Access to and enjoyment of essential private services and essential public services and benefits', text: '.' },
                    { bold: '6. Law enforcement', text: '.' },
                    { bold: '7. Migration, asylum and border control management', text: '.' },
                    { bold: '8. Administration of justice and democratic processes', text: '.' },
                ],
                afterBullets: [
                    'Each of these will be examined in detail across Parts II to IV. For now, the key structural point is that an AI system intended for use in any of these areas is presumptively high-risk — with one important exception, discussed in the next section.',
                ],
            },
            {
                heading: 'The Article 6(3) Filter: When Annex III Does Not Mean High-Risk',
                paragraphs: [
                    'The presumption created by Annex III is rebuttable. Article 6(3) introduces a filter: an AI system that falls within an Annex III category is not classified as high-risk where it does not pose a significant risk of harm to the health, safety or fundamental rights of natural persons, including by not materially influencing the outcome of decision-making.',
                    'The filter applies only where one of four cumulative conditions is met:',
                ],
                bullets: [
                    { bold: '1.', text: ' The AI system performs a narrow procedural task.' },
                    { bold: '2.', text: ' The AI system is intended to improve the result of a previously completed human activity.' },
                    { bold: '3.', text: ' The AI system is intended to detect decision-making patterns or deviations from prior decision-making patterns, and is not meant to replace or influence the previously completed human assessment without proper human review.' },
                    { bold: '4.', text: ' The AI system is intended to perform a preparatory task to an assessment relevant for the purposes of the Annex III use cases.' },
                ],
                afterBullets: [
                    'The filter has a hard-coded exception: an AI system that performs profiling of natural persons is always considered high-risk, regardless of whether one of the four conditions is otherwise met.',
                    'The filter is narrower than it appears. Many AI tools that nominally "assist" human decisions still materially influence the outcome and therefore fall outside the four conditions. An AI system that ranks job candidates "for review" is not performing a narrow procedural task — it shapes the decision space the human reviewer operates in.',
                    'Importantly, the filter is not a self-executing exemption. Under Article 6(4), a provider relying on it must document the assessment in writing before the system is placed on the market, register the system in the EU database under Article 49(2), and make the documentation available to national competent authorities upon request.',
                    'The Commission was required to publish, by 2 February 2026, guidelines specifying the practical implementation of Article 6 and providing a list of practical examples of high-risk and non-high-risk use cases. These guidelines are an important reference point for any Article 6(3) assessment.',
                ],
            },
            {
                heading: 'Substantial Modification: When the Classification Changes',
                paragraphs: [
                    'Classification under Article 6 is not necessarily permanent. Under Article 25, where an AI system is substantially modified, the modification can trigger a re-classification — and the entity making the modification may itself qualify as a new provider, inheriting the full compliance burden.',
                    'This is structurally significant. A system that initially falls outside the high-risk category may move into it through modification — for example, by extending its intended purpose into an Annex III use case. Equally, a system that initially relies on the Article 6(3) filter may lose that status if the modification alters its functional role in the decision-making process: a system originally designed to perform a narrow procedural task that is later modified to actively shape outcomes is no longer protected by the filter.',
                    'For providers, this means classification cannot be treated as a one-off exercise at market placement. It is a lifecycle assessment that must be re-performed whenever the system is materially changed.',
                ],
            },
            {
                heading: 'What High-Risk Classification Triggers',
                paragraphs: [
                    'Once a system is classified as high-risk — under either Route 1 or Route 2 — the substantive obligations under Chapter III, Section 2 of the AI Act apply. These will be examined in detail throughout the remaining articles in this sub-series, but it is useful to flag the main blocks now as a roadmap: a risk management system (Article 9), data governance (Article 10), technical documentation (Article 11 and Annex IV), logging (Article 12), transparency to deployers (Article 13), human oversight (Article 14), accuracy, robustness and cybersecurity (Article 15), followed by conformity assessment (Article 43), EU Declaration of Conformity (Article 47), CE marking (Article 48), registration in the EU database (Article 49), post-market monitoring (Article 72), and serious incident reporting (Article 73).',
                    'For systems on the Annex I route, these obligations integrate with the existing sectoral conformity assessment process. For systems on the Annex III route, providers can typically follow an internal conformity assessment procedure (Annex VI) — a self-assessment route — with third-party involvement required only in specific cases, primarily for certain biometric systems where harmonised standards have not been fully applied.',
                ],
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'The high-risk regime is the operational heart of the AI Act. Most providers placing AI systems on the EU market will spend the bulk of their compliance effort on the requirements that follow from a high-risk classification. Understanding how a system becomes high-risk — through which route, under which conditions, and with which exceptions — is therefore the necessary starting point for any compliance trajectory.',
                    'Two practical takeaways follow.',
                    'First, classification is a structured exercise, not an intuition. Article 6 provides two clearly defined routes, an Article 6(3) filter with four cumulative conditions, and a substantial modification rule that runs through the lifecycle. Each element requires separate analysis, and conclusions must be documented.',
                    'Second, the Annex I route is rarely a stand-alone matter. For providers operating in regulated product sectors — medical devices, machinery, automotive, aviation — AI Act compliance is layered onto an existing sectoral compliance architecture. Integrating these regimes will, in practice, be the central operational challenge of the next two years.',
                    'In the next edition of The AI Act Guy, I will turn to the first two categories of standalone high-risk systems under Annex III: biometric systems (point 1) and AI used in critical infrastructure (point 2).',
                ],
            },
        ],
    },
    ro: {
        title: 'Sistemele AI cu risc ridicat sub AI Act (Partea I): Cadrul de clasificare și Anexa I',
        date: '6 mai 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Primul articol dintr-o serie de patru părți care examinează regimul de clasificare cu risc ridicat al AI Act — începând cu logica arhitecturală a Articolului 6 și ruta de siguranță a produselor sub Anexa I.

Clasificarea ca risc ridicat sub AI Act nu este intuitivă. Este construită prin rute, praguri și excepții care trebuie navigate cu atenție.

Bună 👋

Mă numesc Matei Ștefan — sunt un profesionist juridic care lucrează la intersecția dintre drept, tehnologie și AI — și vă bineîntampin la a zecea ediție The AI Act Guy.

În edițiile anterioare, am parcurs practicile interzise sub Articolul 5 și, cel mai recent, contururile regulatorii ale sistemelor AI agentice. Această ediție deschide o nouă sub-serie în cadrul newsletter-ului, dedicată regimului cu risc ridicat sub AI Act.

Categoria de risc ridicat se află în centrul arhitecturii regulatorii a AI Act. Aici se aplică majoritatea obligațiilor substanțiale ale Regulamentului — management al riscului, guvernanța datelor, documentație tehnică, transparență, supraveghere umană, acuratețe, robustețe, cibersecuritate, evaluare a conformității, monitorizare post-piață și marcaj CE. Cea mai mare parte a muncii operaționale de conformitate pentru furnizorii și deployerii de sisteme AI în UE este, în practică, muncă pe sisteme cu risc ridicat.

Sub-seria va fi structurată în patru părți:`,
        introBullets: [
            { bold: 'Partea I (această ediție)', text: ' — cadrul de clasificare sub Articolul 6 și ruta Anexei I (legislația de siguranță a produselor).' },
            { bold: 'Partea II', text: ' — Anexa III, punctele 1 și 2: biometrice și infrastructură critică.' },
            { bold: 'Partea III', text: ' — Anexa III, punctele 3 până la 5: educație, ocuparea forței de muncă și accesul la servicii esențiale.' },
            { bold: 'Partea IV', text: ' — Anexa III, punctele 6 până la 8: aplicarea legii, migrație și control la frontieră și administrarea justiției și a proceselor democratice.' },
        ],
        introAfter: 'Scopul acestei ediții de deschidere este de a pune jos schelăria structurală. Înainte de a parcurge categoriile specifice ale Anexei III în articolele ulterioare, merită înțeles cum un sistem devine cu risc ridicat în primul rând și care sunt consecințele acelei clasificări.',
        sections: [
            {
                heading: 'Cele două rute spre clasificarea cu risc ridicat',
                paragraphs: [
                    'Articolul 6 al AI Act prevede două rute distincte prin care un sistem AI poate fi clasificat ca având risc ridicat. Cele două rute operează independent. Un sistem poate intra într-una fără a intra în cealaltă, dar este suficient să intre într-o singură rută pentru a fi supus setului complet de obligații de risc ridicat.',
                    'Cele două rute sunt:',
                ],
                bullets: [
                    { bold: 'Ruta 1 (Articolul 6(1)) — ruta Anexei I.', text: ' Sistemul AI este o componentă de siguranță a, sau este el însuși, un produs acoperit de legislația de armonizare UE listată în Anexa I, iar acel produs trebuie să fie supus unei evaluări de conformitate de către o terță parte conform acelei legislații.' },
                    { bold: 'Ruta 2 (Articolul 6(2)) — ruta Anexei III.', text: ' Sistemul AI este destinat utilizării într-unul dintre domeniile de utilizare listate în Anexa III (biometrice, infrastructură critică, educație, ocuparea forței de muncă, acces la servicii esențiale, aplicarea legii, migrație, administrarea justiției și a proceselor democratice).' },
                ],
                afterBullets: [
                    'Această structură duală reflectă natura regulatorie hibridă a AI Act. Regulamentul funcționează simultan ca o lege de siguranță a produselor (Anexa I) și ca o lege a drepturilor fundamentale (Anexa III). Cele două rute urmăresc aceste două raționamente regulatorii.',
                ],
            },
            {
                heading: 'Ruta 1: Anexa I — Sisteme AI integrate în produse reglementate',
                paragraphs: [
                    'Anexa I listează legislația de armonizare UE care declanșează prima rută. Lista este împărțită în două secțiuni:',
                ],
                bullets: [
                    { bold: 'Secțiunea A', text: ' — instrumente bazate pe Noul Cadru Legislativ (NLF), acoperind utilaje, jucării, ambarcațiuni de agrement, lifturi, echipamente în atmosfere potențial explozive, echipamente radio, echipamente sub presiune, instalații pe cablu, echipamente individuale de protecție, aparate cu gaz, dispozitive medicale și dispozitive medicale de diagnostic in vitro.' },
                    { bold: 'Secțiunea B', text: ' — alte legislații de armonizare a Uniunii, acoperind securitatea aviației civile, vehiculele cu două și trei roți, vehiculele agricole și forestiere, echipamentele marine, sistemele feroviare, autovehiculele și remorcile lor și aeronavele fără pilot.' },
                ],
                afterBullets: [
                    'Pentru ca Ruta 1 să se aplice, două condiții cumulative trebuie îndeplinite:',
                    '1. Sistemul AI este fie o componentă de siguranță a unui produs, fie el însuși un produs, acoperit de unul dintre instrumentele listate în Anexa I.',
                    '2. Acel produs trebuie să fie supus unei evaluări de conformitate de către o terță parte conform instrumentului relevant din Anexa I.',
                    'A doua condiție este critică. Nu fiecare produs acoperit de legislația din Anexa I necesită evaluare de către o terță parte — multe pot fi auto-certificate de către producător. Ruta Anexei I a AI Act se atașează doar produselor care necesită deja examinare de către o terță parte conform legii sectoriale. Logica este directă: acolo unde legiuitorul UE a stabilit deja că o categorie de produse este suficient de sensibilă pentru a necesita evaluare de conformitate de către o terță parte, o componentă AI integrată în acel produs moștenește acea sensibilitate.',
                    'Un AI de diagnostic medical integrat într-un dispozitiv medical de Clasa IIa sau superioară este un exemplu paradigmatic. La fel este o componentă AI de siguranță în utilajele industriale sau un sistem AI care controlează funcțiile de siguranță ale unui lift.',
                ],
            },
            {
                heading: 'De ce contează această rută: Integrarea cu ecosistemele existente de conformitate',
                paragraphs: [
                    'Consecința practică a Rutei 1 este că AI Act nu creează un proces paralel de evaluare a conformității. În schimb, cerințele specifice AI sunt integrate în evaluarea sectorială existentă conform instrumentului relevant din Anexa I.',
                    'Aceasta are mai multe implicații. În primul rând, organismul notificat care evaluează deja conformitatea conform legislației sectoriale — sub Regulamentul privind Dispozitivele Medicale, de exemplu — va evalua și conformitatea cu cerințele esențiale ale AI Act. Nu există un organism notificat separat pentru AI Act pentru aceste sisteme. În al doilea rând, timpul urmează cadrul sectorial: AI Act acordă sistemelor din Anexa I o perioadă de tranziție prelungită, obligațiile de risc ridicat devenind aplicabile până în august 2027 (mai degrabă decât august 2026 pentru sistemele din Anexa III). În al treilea rând, pentru sistemele care se încadrează sub Secțiunea B a Anexei I, Articolul 2(2) prevede o excepție parțială: doar articole specifice se aplică, iar cerințele substanțiale de risc ridicat se integrează în regimul sectorial, mai degrabă decât să se aplice direct.',
                    'Pentru furnizori, aceasta înseamnă că Ruta 1 este rareori un exercițiu de sine stătător. Conformitatea este construită deasupra unei traiectorii sectoriale existente de conformitate, nu proiectată în izolare.',
                ],
            },
            {
                heading: 'Ruta 2: Anexa III — Sisteme cu risc ridicat de sine stătătoare',
                paragraphs: [
                    'A doua rută acoperă sistemele AI al căror profil de risc derivă nu din produsul în care sunt integrate, ci din cazul de utilizare în care sunt implementate. Anexa III listează opt categorii de astfel de cazuri de utilizare:',
                ],
                bullets: [
                    { bold: '1. Biometrice', text: ' (acolo unde utilizarea lor este permisă sub legea Uniunii sau națională).' },
                    { bold: '2. Infrastructură critică', text: '.' },
                    { bold: '3. Educație și formare profesională', text: '.' },
                    { bold: '4. Ocuparea forței de muncă, managementul lucrătorilor și accesul la activități independente', text: '.' },
                    { bold: '5. Acces la și beneficierea de servicii private esențiale și servicii și beneficii publice esențiale', text: '.' },
                    { bold: '6. Aplicarea legii', text: '.' },
                    { bold: '7. Migrație, azil și managementul controlului la frontieră', text: '.' },
                    { bold: '8. Administrarea justiției și a proceselor democratice', text: '.' },
                ],
                afterBullets: [
                    'Fiecare dintre acestea va fi examinată în detaliu în Părțile II până la IV. Pentru moment, punctul structural cheie este că un sistem AI destinat utilizării în oricare dintre aceste domenii este prezumtiv de risc ridicat — cu o excepție importantă, discutată în secțiunea următoare.',
                ],
            },
            {
                heading: 'Filtrul Articolului 6(3): Când Anexa III nu înseamnă risc ridicat',
                paragraphs: [
                    'Prezumția creată de Anexa III este refutabilă. Articolul 6(3) introduce un filtru: un sistem AI care se încadrează într-o categorie din Anexa III nu este clasificat ca având risc ridicat acolo unde nu prezintă un risc semnificativ de daune asupra sănătății, siguranței sau drepturilor fundamentale ale persoanelor fizice, inclusiv prin neinfluentarea materială a rezultatului procesului decizional.',
                    'Filtrul se aplică doar acolo unde una dintre patru condiții cumulative este îndeplinită:',
                ],
                bullets: [
                    { bold: '1.', text: ' Sistemul AI îndeplinește o sarcină procedurală îngustă.' },
                    { bold: '2.', text: ' Sistemul AI este destinat să îmbunătățească rezultatul unei activități umane finalizate anterior.' },
                    { bold: '3.', text: ' Sistemul AI este destinat să detecteze tipare decizionale sau abateri de la tipare decizionale anterioare și nu este menit să înlocuiască sau să influențeze evaluarea umană finalizată anterior fără o revizuire umană adecvată.' },
                    { bold: '4.', text: ' Sistemul AI este destinat să îndeplinească o sarcină pregătitoare pentru o evaluare relevantă în scopurile cazurilor de utilizare din Anexa III.' },
                ],
                afterBullets: [
                    'Filtrul are o excepție hard-coded: un sistem AI care efectuează profilarea persoanelor fizice este întotdeauna considerat cu risc ridicat, indiferent dacă una dintre cele patru condiții este altfel îndeplinită.',
                    'Filtrul este mai îngust decât pare. Multe instrumente AI care nominal „asistă" deciziile umane influențează totuși material rezultatul și prin urmare se află în afara celor patru condiții. Un sistem AI care clasifică candidații pentru angajare „pentru revizuire" nu îndeplinește o sarcină procedurală îngustă — modelează spațiul de decizie în care operează revizorul uman.',
                    'În mod important, filtrul nu este o exceptare auto-executabilă. Sub Articolul 6(4), un furnizor care se bazează pe acesta trebuie să documenteze evaluarea în scris înainte ca sistemul să fie introdus pe piață, să înregistreze sistemul în baza de date UE conform Articolului 49(2) și să pună documentația la dispoziția autorităților naționale competente la cerere.',
                    'Comisia a fost obligată să publice, până la 2 februarie 2026, ghiduri care specifică implementarea practică a Articolului 6 și care furnizează o listă de exemple practice de cazuri de utilizare cu risc ridicat și non-risc ridicat. Aceste ghiduri sunt un punct de referință important pentru orice evaluare în baza Articolului 6(3).',
                ],
            },
            {
                heading: 'Modificarea substanțială: Când se schimbă clasificarea',
                paragraphs: [
                    'Clasificarea conform Articolului 6 nu este neapărat permanentă. Conform Articolului 25, atunci când un sistem AI este modificat substanțial, modificarea poate declanșa o reclasificare — iar entitatea care face modificarea poate ea însăși să se califice ca un nou furnizor, moștenind întreaga sarcină de conformitate.',
                    'Aceasta este semnificativ din punct de vedere structural. Un sistem care se află inițial în afara categoriei cu risc ridicat se poate muta în ea prin modificare — de exemplu, prin extinderea scopului său intenționat la un caz de utilizare din Anexa III. La fel, un sistem care se bazează inițial pe filtrul Articolului 6(3) poate pierde acel statut dacă modificarea modifică rolul său funcțional în procesul decizional: un sistem proiectat inițial să îndeplinească o sarcină procedurală îngustă care este ulterior modificat pentru a modela activ rezultatele nu mai este protejat de filtru.',
                    'Pentru furnizori, aceasta înseamnă că clasificarea nu poate fi tratată ca un exercițiu unic la introducerea pe piață. Este o evaluare pe ciclul de viață care trebuie re-efectuată ori de câte ori sistemul este modificat material.',
                ],
            },
            {
                heading: 'Ce declanșează clasificarea cu risc ridicat',
                paragraphs: [
                    'Odată ce un sistem este clasificat ca având risc ridicat — fie sub Ruta 1, fie sub Ruta 2 — se aplică obligațiile substanțiale din Capitolul III, Secțiunea 2 a AI Act. Acestea vor fi examinate în detaliu pe parcursul articolelor rămase din această sub-serie, dar este util să semnalăm blocurile principale acum ca o foaie de parcurs: un sistem de management al riscului (Articolul 9), guvernanța datelor (Articolul 10), documentație tehnică (Articolul 11 și Anexa IV), înregistrare în jurnal (Articolul 12), transparență față de deployeri (Articolul 13), supraveghere umană (Articolul 14), acuratețe, robustețe și cibersecuritate (Articolul 15), urmate de evaluarea conformității (Articolul 43), Declarația de Conformitate UE (Articolul 47), marcajul CE (Articolul 48), înregistrarea în baza de date UE (Articolul 49), monitorizarea post-piață (Articolul 72) și raportarea incidentelor grave (Articolul 73).',
                    'Pentru sistemele pe ruta Anexei I, aceste obligații se integrează cu procesul sectorial existent de evaluare a conformității. Pentru sistemele pe ruta Anexei III, furnizorii pot urma de obicei o procedură internă de evaluare a conformității (Anexa VI) — o rută de auto-evaluare — cu implicarea unei terțe părți necesară doar în cazuri specifice, în principal pentru anumite sisteme biometrice unde standardele armonizate nu au fost pe deplin aplicate.',
                ],
            },
            {
                heading: 'Concluzie',
                paragraphs: [
                    'Regimul cu risc ridicat este inima operațională a AI Act. Cei mai mulți furnizori care introduc sisteme AI pe piața UE își vor petrece cea mai mare parte a efortului de conformitate pe cerințele care decurg dintr-o clasificare cu risc ridicat. Înțelegerea modului în care un sistem devine cu risc ridicat — prin ce rută, în ce condiții și cu ce excepții — este prin urmare punctul de pornire necesar pentru orice traiectorie de conformitate.',
                    'Două concluzii practice rezultă.',
                    'În primul rând, clasificarea este un exercițiu structurat, nu o intuiție. Articolul 6 prevede două rute clar definite, un filtru al Articolului 6(3) cu patru condiții cumulative și o regulă de modificare substanțială care străbate ciclul de viață. Fiecare element necesită analiză separată, iar concluziile trebuie documentate.',
                    'În al doilea rând, ruta Anexei I este rareori o chestiune de sine stătătoare. Pentru furnizorii care operează în sectoare de produse reglementate — dispozitive medicale, utilaje, automotive, aviație — conformitatea cu AI Act este suprapusă peste o arhitectură sectorială existentă de conformitate. Integrarea acestor regimuri va fi, în practică, provocarea operațională centrală a următorilor doi ani.',
                    'În ediția următoare a The AI Act Guy, mă voi îndrepta către primele două categorii de sisteme cu risc ridicat de sine stătătoare sub Anexa III: sistemele biometrice (punctul 1) și AI utilizat în infrastructura critică (punctul 2).',
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
                            <p className="text-gray-700 leading-relaxed mb-4">{c.introAfter}</p>
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
