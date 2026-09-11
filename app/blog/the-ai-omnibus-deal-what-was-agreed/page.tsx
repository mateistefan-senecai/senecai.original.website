'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The AI Omnibus Deal: What Was Agreed in the Trilogue',
        date: 'May 9, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `This edition of The AI Act Guy unpacks the provisional political agreement reached in the early hours of 7 May 2026, examining what the co-legislators kept, what they softened, and what did not change.`,
        sections: [
            {
                heading: '1. The Headline: A Sixteen-Month Postponement of High-Risk Obligations',
                paragraphs: [
                    'The central element of the agreement is the deferral of the application date for high-risk AI systems. The original AI Act timeline made the Annex III obligations applicable from 2 August 2026 and the Annex I obligations applicable from 2 August 2027. Under the agreed text, those dates move to:',
                ],
                bullets: [
                    { bold: '2 December 2027', text: ' for stand-alone high-risk AI systems classified under Article 6(2) and Annex III — including biometrics, critical infrastructure, education, employment, law enforcement, migration, and border management.' },
                    { bold: '2 August 2028', text: ' for high-risk AI systems that are safety components of products covered by the Union harmonisation legislation listed in Annex I (lifts, machinery, toys, medical devices, watercraft, and similar product categories).' },
                ],
                afterBullets: [
                    'This is a sixteen-month delay for Annex III and a twelve-month delay for Annex I. The shift is conceptually significant: the Commission’s original proposal had tied the application date to the readiness of harmonised standards and supporting tools, leaving the trigger date open. The co-legislators rejected that conditional model and converged on fixed calendar dates, prioritising legal certainty over technical readiness as the gating criterion.',
                    'The risk-based architecture of the Act remains untouched. Article 5 prohibitions remain in force. AI literacy obligations under Article 4 remain in force. The GPAI obligations applicable since 2 August 2025 remain in force. Governance provisions remain in force. The postponement is targeted, not horizontal.',
                ],
            },
            {
                heading: '2. A New Prohibition: Non-Consensual Sexual Content and AI-Generated CSAM',
                paragraphs: [
                    'The agreement adds a new prohibition to the Article 5 catalogue, banning AI systems used to generate non-consensual sexual or intimate imagery (so-called "nudifier" applications) and child sexual abuse material. This was not in the Commission’s original Omnibus proposal; it was introduced through Parliament amendments and survived in the final compromise.',
                    'The new prohibition will apply from 2 December 2026, aligning with the timeline on which the existing Article 5 prohibitions on the generation of CSAM through related practices have been understood to operate. This is the only point on which the Omnibus expands the scope of the Act rather than softening it.',
                    'The political signalling is significant. After months of public criticism that the Omnibus was a wholesale rollback, the inclusion of a new red line on synthetic abuse imagery allowed the co-legislators to characterise the deal as "simplification with strengthened protections for children", in the words of the Cypriot Presidency.',
                ],
            },
            {
                heading: '3. The Annex I / Sectoral Compromise: The Equivalence Mechanism',
                paragraphs: [
                    'The 28 April trilogue collapsed primarily on a single question: how to handle the overlap between AI Act obligations and pre-existing EU sectoral safety regimes — the Machinery Regulation, the Medical Device Regulation, the Toy Safety Regulation, and others. Industry, led by Germany and supported by manufacturers including Siemens, Bosch, and the medical-device sector, argued that AI components embedded in regulated products would be subject to two parallel and partially redundant compliance regimes.',
                    'The 7 May compromise introduces an equivalence mechanism. Where existing Union sectoral law contains AI-specific requirements equivalent to those of the AI Act, the Commission will be empowered, through implementing acts, to limit or disapply the corresponding AI Act requirements for that sector. The mechanism is sectoral and conditional: it does not carve machinery, medical devices, or toys out of the AI Act wholesale, but allows targeted exemptions where the sectoral regime already delivers the same protective outcome.',
                    'The headline winner is the machinery sector. The Renew Europe rapporteur for the IMCO file, Svenja Hahn, confirmed that the new Machinery Regulation already contains AI-specific provisions and that machinery products will be excluded from the scope of the AI Act on that basis. Industrial AI on the factory floor — embedded systems in robotics, motion control, predictive maintenance — is the primary beneficiary.',
                    'The medical-device sector did not obtain the same outcome. DIGITALEUROPE characterised this as a "missed opportunity", arguing that 95% of European medtech companies are SMEs and start-ups that will continue to face overlapping obligations under the Medical Device Regulation and the AI Act. The compromise here is narrower than industry sought.',
                    'The definition of "safety component" has also been narrowed, reducing the surface area through which Annex I high-risk classification is triggered for embedded AI.',
                ],
            },
            {
                heading: '4. Transparency: A Shorter, Not Longer, Grace Period for Watermarking',
                paragraphs: [
                    'The Commission’s original proposal extended the implementation grace period for the Article 50(2) machine-readable marking obligation to six months after 2 August 2026 — i.e., until 2 February 2027. Parliament pushed back hard, arguing that synthetic-content transparency was the part of the Act with the strongest public-protection rationale and the weakest case for postponement.',
                    'The compromise lands at three months. The new application date for the Article 50(2) watermarking and machine-readable marking obligation is 2 December 2026.',
                    'This is one of the few points on which the final agreement is stricter than the Commission’s proposal. The remaining provisions of Article 50 — the deployer-facing transparency obligations on chatbot interaction, deepfake labelling, and emotion-recognition or biometric-categorisation disclosure — continue to apply from 2 August 2026 as originally envisaged. The official communication does not expressly clarify the position for those remaining sub-provisions, and the consolidated text will need to settle a number of edge cases (in particular, the treatment of systems placed on the market before 2 August 2026).',
                ],
            },
            {
                heading: '5. Bias Detection: Strict Necessity for Special-Category Data',
                paragraphs: [
                    'The agreement extends the existing Article 10(5) carve-out — which permits the processing of special categories of personal data for the purpose of bias detection and correction — beyond providers of high-risk AI systems. The Commission proposal had already moved in this direction, but the final text reinstates the "strict necessity" standard that had been at risk of being weakened during negotiations.',
                    'The processing must be subsidiary to non-sensitive or synthetic alternatives, subject to pseudonymisation, access controls, prohibition on onward sharing, and timely deletion. The amendment does not create an obligation to perform bias detection; it provides a narrower, conditional GDPR-compatible legal basis for those who choose to.',
                    'This is a meaningful clarification. Bias detection in high-risk hiring, credit scoring, or biometric systems frequently requires processing data on protected characteristics — the very categories the GDPR most strongly restricts. Without an Article 10(5)-style basis, providers face a practical impossibility: the obligation to detect and mitigate bias on one hand, and the prohibition on processing the data necessary to do so on the other. The 7 May text resolves part of that tension.',
                ],
            },
            {
                heading: '6. Governance: Centralisation of GPAI-Linked System Enforcement',
                paragraphs: [
                    'The agreement strengthens the role of the AI Office for a defined category of systems. The Commission — through the AI Office — becomes the exclusive supervisory authority for:',
                ],
                bullets: [
                    { bold: '', text: 'AI systems based on a general-purpose AI model where the model and the system are developed by the same provider (the "same-provider" scenario), and' },
                    { bold: '', text: 'AI systems integrated into very large online platforms (VLOPs) and very large online search engines (VLOSEs) as designated under the Digital Services Act.' },
                ],
                afterBullets: [
                    'The agreement carves out a number of national-competence exceptions: law enforcement, border management, judicial authorities, and financial institutions remain under the supervision of the relevant national authorities. The structure mirrors, in spirit, the centralisation logic already applied to GPAI models themselves under Article 88, and is intended to prevent fragmented and divergent national enforcement against a small number of large, vertically integrated providers.',
                    'This is a structural change with downstream consequences. It tightens the regulatory geometry around frontier-model providers operating their own application layers, and aligns AI Act enforcement, in this segment, with the supervisory architecture of the DSA.',
                ],
            },
            {
                heading: '7. SMCs, Sandboxes, and the High-Risk Database',
                paragraphs: [
                    'Three further elements of the agreement deserve attention.',
                    'Small mid-cap enterprises (SMCs). The Commission proposal extended several SME-specific flexibilities (simplified quality management system requirements under Article 17, fee reductions, conformity assessment support) to the new SMC category. This survived intact in the final agreement.',
                    'Regulatory sandboxes. The deadline for Member States to establish AI regulatory sandboxes at national level is postponed from 2 August 2026 to 2 August 2027. This aligns the sandbox infrastructure timeline with the new high-risk obligations’ entry into application, ensuring that providers of high-risk systems — particularly SMEs and SMCs — have access to controlled testing environments before they need to demonstrate conformity.',
                    'The high-risk database. A change worth flagging in the opposite direction: the obligation for providers to register AI systems in the EU database, including in cases where the provider has self-assessed the system as falling outside the high-risk classification under Article 6(3), is reinstated. The Commission proposal had narrowed the registration obligation; civil society and a portion of the Parliament pushed back, arguing that visibility over self-assessments is the only way to make the Article 6(3) filter meaningful in practice. The final text retains the registration obligation.',
                ],
            },
            {
                heading: '8. What the Deal Did Not Touch',
                paragraphs: [
                    'The Omnibus is targeted. A number of provisions that featured in earlier drafts or in stakeholder advocacy did not make it into the final agreement:',
                ],
                bullets: [
                    { bold: 'Fundamental rights impact assessments under Article 27', text: ' remain in place, in their existing form. Industry had argued for their removal on the basis of overlap with GDPR Article 35 DPIAs; the co-legislators declined.' },
                    { bold: 'The definition of "provider" in Article 3(3)', text: ', in particular for downstream modifications of GPAI models, was not clarified in the legislative text. The point will continue to depend on the Commission’s GPAI Provider Guidelines.' },
                    { bold: 'The GPAI Code of Practice', text: ', which is not part of the Act itself, is unaffected by the Omnibus.' },
                    { bold: 'Article 4 (AI literacy), Article 5 (prohibitions, save for the new addition), and the GPAI Chapter V obligations', text: ' remain unchanged in substance and timeline.' },
                ],
            },
            {
                heading: '9. The Reception',
                paragraphs: [
                    'The political reaction tracks predictable lines. The Commission and the Cypriot Presidency framed the deal as innovation-friendly simplification with preserved protective outcomes. Commission Executive Vice-President Henna Virkkunen described it as delivering both innovation and safety. Co-rapporteurs Arba Kokalari (EPP) and Michael McNamara (Renew) emphasised, respectively, the workability gains and the new prohibition on synthetic abuse imagery.',
                    'Industry was largely positive. DIGITALEUROPE applauded the machinery exemption and the SMC extension, while flagging the medtech outcome as a missed opportunity. ASML, Airbus, Ericsson, Nokia, SAP, Siemens, and Mistral AI — which had publicly intervened in the days before the trilogue with a joint warning that Europe was over-regulating its own competitiveness — obtained substantively what they had asked for.',
                    'Civil society was sharply critical. The European Consumer Organisation (BEUC) characterised the deal as "rolling back key consumer protections that had barely been adopted a year ago", while acknowledging that the shorter watermarking grace period and the reinstated registration obligation were positive steps. Kai Zenner, a long-time observer of the file from MEP Axel Voss’s office, summarised it as "minor steps" that do not solve the structural problems of the EU digital acquis.',
                ],
            },
            {
                heading: '10. What Comes Next',
                paragraphs: [
                    'The 7 May agreement is provisional. The next steps are:',
                ],
                bullets: [
                    { bold: 'Formal endorsement', text: ' by the Council and the European Parliament, expected before 2 August 2026.' },
                    { bold: 'Legal-linguistic revision', text: ' of the consolidated text in all official languages.' },
                    { bold: 'Publication in the Official Journal', text: ' of the European Union, with entry into force three days later.' },
                ],
                afterBullets: [
                    'Until that final step is completed, the original AI Act timeline remains legally binding. Compliance programmes built against the 2 August 2026 deadline should not be wound down on the basis of the political agreement alone. The professional default is to continue preparing under the original regime and treat the Omnibus relief as a supervening benefit if and when the consolidated text enters into force.',
                    'Three observations to close.',
                    'First, the deal preserves the architecture of the Act while reshaping its operative timeline. The risk-based framework, the Annex III categories, the conformity assessment scheme, the GPAI tier, the prohibitions — all remain. What changed is the calendar and the perimeter of overlap with sectoral law.',
                    'Second, the transparency-watermarking compromise is the clearest example of the Parliament holding ground. The Commission’s six-month grace period was halved. On a file otherwise dominated by industry-friendly outcomes, this is a meaningful counter-example.',
                    'Third, the equivalence mechanism for Annex I is the part of the deal that will be most consequential and most contested in implementation. Whether it operates as a narrow technical reconciliation between AI Act and sectoral safety regimes, or as a wider doctrine of sectoral primacy, depends entirely on how the Commission exercises the implementing-act power. That is the file to watch in 2026 and 2027.',
                    'The next edition will return to the high-risk regime itself, picking up the sub-series on Article 6 and Annex III in light of the new application dates and the equivalence mechanism. Until then — thanks for reading.',
                ],
            },
        ],
    },
    ro: {
        title: 'Acordul AI Omnibus: Ce s-a convenit în trialog',
        date: '9 mai 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Această ediție a The AI Act Guy desfășoară acordul politic provizoriu atins în primele ore ale zilei de 7 mai 2026, examinând ce au păstrat co-legiuitorii, ce au atenuat și ce nu s-a schimbat.`,
        sections: [
            {
                heading: '1. Titlul: O amânare de șaisprezece luni a obligațiilor pentru risc ridicat',
                paragraphs: [
                    'Elementul central al acordului este amânarea datei de aplicare pentru sistemele AI cu risc ridicat. Calendarul original al AI Act făcea obligațiile din Anexa III aplicabile începând cu 2 august 2026, iar obligațiile din Anexa I aplicabile începând cu 2 august 2027. Sub textul agreat, acele date se mută la:',
                ],
                bullets: [
                    { bold: '2 decembrie 2027', text: ' pentru sistemele AI cu risc ridicat de sine stătătoare clasificate sub Articolul 6(2) și Anexa III — inclusiv biometrice, infrastructură critică, educație, ocuparea forței de muncă, aplicarea legii, migrație și managementul frontierelor.' },
                    { bold: '2 august 2028', text: ' pentru sistemele AI cu risc ridicat care sunt componente de siguranță ale produselor acoperite de legislația de armonizare a Uniunii listată în Anexa I (lifturi, utilaje, jucării, dispozitive medicale, ambarcațiuni și categorii de produse similare).' },
                ],
                afterBullets: [
                    'Aceasta este o întârziere de șaisprezece luni pentru Anexa III și o întârziere de douăsprezece luni pentru Anexa I. Schimbarea este semnificativă conceptual: propunerea originală a Comisiei legase data de aplicare de pregătirea standardelor armonizate și a instrumentelor de sprijin, lăsând data declanșării deschisă. Co-legiuitorii au respins acel model condițional și au converg către date calendaristice fixe, prioritizând certitudinea juridică în defavoarea pregătirii tehnice ca criteriu de declanșare.',
                    'Arhitectura bazată pe risc a Actului rămâne neatinsă. Interdicțiile din Articolul 5 rămân în vigoare. Obligațiile de alfabetizare AI sub Articolul 4 rămân în vigoare. Obligațiile GPAI aplicabile din 2 august 2025 rămân în vigoare. Prevederile de guvernanță rămân în vigoare. Amânarea este țintită, nu orizontală.',
                ],
            },
            {
                heading: '2. O nouă interdicție: Conținut sexual fără consimțământ și CSAM generat de AI',
                paragraphs: [
                    'Acordul adaugă o nouă interdicție la catalogul Articolului 5, interzicând sistemele AI utilizate pentru a genera imagini sexuale sau intime fără consimțământ (așa-numitele aplicații „nudifier") și materiale de abuz sexual asupra copiilor. Aceasta nu era în propunerea Omnibus originală a Comisiei; a fost introdusă prin amendamentele Parlamentului și a supraviețuit în compromisul final.',
                    'Noua interdicție se va aplica din 2 decembrie 2026, aliniindu-se cu calendarul pe care interdicțiile existente din Articolul 5 privind generarea de CSAM prin practici conexe au fost înțelese să opereze. Acesta este singurul punct în care Omnibus extinde sfera Actului mai degrabă decât să o atenueze.',
                    'Semnalizarea politică este semnificativă. După luni de critică publică conform căreia Omnibus era o derogare en masse, includerea unei noi linii roșii privind imaginile sintetice de abuz a permis co-legiuitorilor să caracterizeze acordul ca „simplificare cu protecții consolidate pentru copii", în cuvintele Președinției cipriote.',
                ],
            },
            {
                heading: '3. Compromisul Anexa I / sectorial: Mecanismul de echivalență',
                paragraphs: [
                    'Trialogul din 28 aprilie s-a prăbușit în principal pe o singură întrebare: cum să gestionezi suprapunerea dintre obligațiile AI Act și regimurile sectoriale de siguranță UE preexistente — Regulamentul privind utilajele, Regulamentul privind dispozitivele medicale, Regulamentul privind siguranța jucăriilor și altele. Industria, condusă de Germania și susținută de producători inclusiv Siemens, Bosch și sectorul de dispozitive medicale, a susținut că componentele AI integrate în produse reglementate ar fi supuse a două regimuri de conformitate paralele și parțial redundante.',
                    'Compromisul din 7 mai introduce un mecanism de echivalență. Acolo unde legea sectorială a Uniunii existentă conține cerințe specifice AI echivalente celor ale AI Act, Comisia va fi împuternicită, prin acte de punere în aplicare, să limiteze sau să nu aplice cerințele AI Act corespunzătoare pentru acel sector. Mecanismul este sectorial și condițional: nu scoate utilajele, dispozitivele medicale sau jucăriile din AI Act en masse, dar permite exceptări țintite acolo unde regimul sectorial oferă deja același rezultat de protecție.',
                    'Câștigătorul principal este sectorul utilajelor. Raportorul Renew Europe pentru dosarul IMCO, Svenja Hahn, a confirmat că noul Regulament privind utilajele conține deja prevederi specifice AI și că produsele de utilaje vor fi excluse din sfera AI Act pe acea bază. AI industrial pe podeaua fabricii — sisteme integrate în robotică, control de mișcare, mentenanță predictivă — este principalul beneficiar.',
                    'Sectorul dispozitivelor medicale nu a obținut același rezultat. DIGITALEUROPE a caracterizat aceasta ca o „oportunitate ratată", argumentând că 95% dintre companiile europene de medtech sunt IMM-uri și start-up-uri care vor continua să se confrunte cu obligații suprapuse sub Regulamentul privind dispozitivele medicale și AI Act. Compromisul aici este mai îngust decât a căutat industria.',
                    'Definiția „componentei de siguranță" a fost de asemenea îngustată, reducând suprafața prin care clasificarea de risc ridicat din Anexa I este declanșată pentru AI integrat.',
                ],
            },
            {
                heading: '4. Transparență: O perioadă de grație mai scurtă, nu mai lungă, pentru filigranare',
                paragraphs: [
                    'Propunerea originală a Comisiei a extins perioada de grație de implementare pentru obligația de marcare lizibilă de mașină din Articolul 50(2) la șase luni după 2 august 2026 — adică până la 2 februarie 2027. Parlamentul a împins înapoi puternic, argumentând că transparența conținutului sintetic era partea Actului cu cel mai puternic raționament de protecție publică și cel mai slab caz pentru amânare.',
                    'Compromisul aterizează la trei luni. Noua dată de aplicare pentru obligația de filigranare și marcare lizibilă de mașină din Articolul 50(2) este 2 decembrie 2026.',
                    'Acesta este unul dintre puținele puncte în care acordul final este mai strict decât propunerea Comisiei. Prevederile rămase ale Articolului 50 — obligațiile de transparență față de deployer privind interacțiunea cu chatbot, etichetarea deepfake și dezvăluirea recunoașterii emoțiilor sau categorizării biometrice — continuă să se aplice din 2 august 2026 așa cum a fost inițial prevăzut. Comunicarea oficială nu clarifică expres poziția pentru acele sub-prevederi rămase, iar textul consolidat va trebui să stabilească o serie de cazuri de margine (în particular, tratamentul sistemelor introduse pe piață înainte de 2 august 2026).',
                ],
            },
            {
                heading: '5. Detecția bias-ului: Strict necesar pentru datele de categorie specială',
                paragraphs: [
                    'Acordul extinde excepția existentă din Articolul 10(5) — care permite prelucrarea categoriilor speciale de date personale în scopul detecției și corecției bias-ului — dincolo de furnizorii de sisteme AI cu risc ridicat. Propunerea Comisiei se mișca deja în această direcție, dar textul final reinstaurează standardul de „strict necesar" care fusese în pericol de a fi slăbit în timpul negocierilor.',
                    'Prelucrarea trebuie să fie subsidiară alternativelor non-sensibile sau sintetice, supusă pseudonimizării, controlului accesului, interdicției de partajare ulterioară și ștergerii la timp. Amendamentul nu creează o obligație de a efectua detecția bias-ului; oferă o bază legală mai îngustă, condițională, compatibilă GDPR pentru cei care aleg să o facă.',
                    'Aceasta este o clarificare semnificativă. Detecția bias-ului în angajări cu risc ridicat, scoring de credit sau sisteme biometrice necesită frecvent prelucrarea datelor privind caracteristicile protejate — chiar categoriile pe care GDPR le restricționează cel mai puternic. Fără o bază de tip Articol 10(5), furnizorii se confruntă cu o imposibilitate practică: obligația de a detecta și mitiga bias-ul pe de o parte și interdicția de a prelucra datele necesare pentru a face acest lucru pe de altă parte. Textul din 7 mai rezolvă parțial acea tensiune.',
                ],
            },
            {
                heading: '6. Guvernanță: Centralizarea aplicării sistemelor legate de GPAI',
                paragraphs: [
                    'Acordul consolidează rolul Oficiului AI pentru o categorie definită de sisteme. Comisia — prin Oficiul AI — devine autoritatea exclusivă de supraveghere pentru:',
                ],
                bullets: [
                    { bold: '', text: 'Sistemele AI bazate pe un model AI de uz general acolo unde modelul și sistemul sunt dezvoltate de același furnizor (scenariul „același furnizor"), și' },
                    { bold: '', text: 'Sistemele AI integrate în platforme online foarte mari (VLOPs) și motoare de căutare online foarte mari (VLOSEs) așa cum sunt desemnate sub Digital Services Act.' },
                ],
                afterBullets: [
                    'Acordul prevede o serie de excepții de competență națională: aplicarea legii, managementul frontierelor, autoritățile judiciare și instituțiile financiare rămân sub supravegherea autorităților naționale relevante. Structura oglindește, în spirit, logica de centralizare deja aplicată modelelor GPAI însele sub Articolul 88 și este menită să prevină aplicarea fragmentată și divergentă la nivel național împotriva unui număr mic de furnizori mari, integrați vertical.',
                    'Aceasta este o schimbare structurală cu consecințe downstream. Strânge geometria regulatorie în jurul furnizorilor de modele de frontieră care operează propriile straturi de aplicații și aliniază aplicarea AI Act, în acest segment, cu arhitectura de supraveghere a DSA.',
                ],
            },
            {
                heading: '7. SMC-uri, sandbox-uri și baza de date pentru risc ridicat',
                paragraphs: [
                    'Trei elemente suplimentare ale acordului merită atenție.',
                    'Întreprinderile mid-cap mici (SMCs). Propunerea Comisiei a extins mai multe flexibilități specifice IMM-urilor (cerințe simplificate ale sistemului de management al calității sub Articolul 17, reduceri de taxe, suport pentru evaluarea conformității) la noua categorie SMC. Aceasta a supraviețuit intactă în acordul final.',
                    'Sandbox-uri regulatorii. Termenul pentru statele membre de a stabili sandbox-uri regulatorii AI la nivel național este amânat de la 2 august 2026 la 2 august 2027. Aceasta aliniază calendarul infrastructurii de sandbox cu intrarea în aplicare a noilor obligații de risc ridicat, asigurând că furnizorii de sisteme cu risc ridicat — în special IMM-urile și SMC-urile — au acces la medii de testare controlate înainte de a trebui să demonstreze conformitatea.',
                    'Baza de date pentru risc ridicat. O schimbare care merită semnalată în direcția opusă: obligația furnizorilor de a înregistra sistemele AI în baza de date UE, inclusiv în cazurile în care furnizorul a auto-evaluat sistemul ca aflându-se în afara clasificării de risc ridicat sub Articolul 6(3), este reinstaurată. Propunerea Comisiei a îngustat obligația de înregistrare; societatea civilă și o parte a Parlamentului au împins înapoi, argumentând că vizibilitatea asupra auto-evaluărilor este singurul mod de a face filtrul Articolului 6(3) semnificativ în practică. Textul final păstrează obligația de înregistrare.',
                ],
            },
            {
                heading: '8. Ce nu a atins acordul',
                paragraphs: [
                    'Omnibus este țintit. O serie de prevederi care au figurat în drafturi anterioare sau în advocacy-ul părților interesate nu au ajuns în acordul final:',
                ],
                bullets: [
                    { bold: 'Evaluările de impact asupra drepturilor fundamentale sub Articolul 27', text: ' rămân în vigoare, în forma lor existentă. Industria a argumentat pentru eliminarea lor pe baza suprapunerii cu DPIA-urile Articolului 35 GDPR; co-legiuitorii au refuzat.' },
                    { bold: 'Definiția „furnizorului" în Articolul 3(3)', text: ', în particular pentru modificările downstream ale modelelor GPAI, nu a fost clarificată în textul legislativ. Punctul va continua să depindă de Ghidurile Comisiei pentru Furnizorii GPAI.' },
                    { bold: 'Codul de Practică GPAI', text: ', care nu face parte din Act în sine, nu este afectat de Omnibus.' },
                    { bold: 'Articolul 4 (alfabetizare AI), Articolul 5 (interdicții, cu excepția noului adaos) și obligațiile GPAI din Capitolul V', text: ' rămân neschimbate în substanță și calendar.' },
                ],
            },
            {
                heading: '9. Recepția',
                paragraphs: [
                    'Reacția politică urmărește linii previzibile. Comisia și Președinția cipriotă au încadrat acordul ca simplificare prietenoasă cu inovația cu rezultate de protecție păstrate. Vicepreședintele Executiv al Comisiei Henna Virkkunen l-a descris ca livrând atât inovație, cât și siguranță. Co-raportorii Arba Kokalari (PPE) și Michael McNamara (Renew) au subliniat, respectiv, câștigurile de operabilitate și noua interdicție privind imaginile sintetice de abuz.',
                    'Industria a fost în mare parte pozitivă. DIGITALEUROPE a aplaudat exceptarea utilajelor și extinderea SMC, în timp ce a semnalat rezultatul medtech ca o oportunitate ratată. ASML, Airbus, Ericsson, Nokia, SAP, Siemens și Mistral AI — care interveniseră public în zilele dinaintea trialogului cu un avertisment comun că Europa își supra-reglementa propria competitivitate — au obținut substanțial ceea ce ceruseră.',
                    'Societatea civilă a fost puternic critică. Organizația Europeană a Consumatorilor (BEUC) a caracterizat acordul ca „retrăgând protecții cheie ale consumatorilor care abia fuseseră adoptate cu un an în urmă", recunoscând în același timp că perioada de grație mai scurtă pentru filigranare și obligația de înregistrare reinstaurată erau pași pozitivi. Kai Zenner, un observator de lungă durată al dosarului din biroul europarlamentarului Axel Voss, l-a rezumat ca „pași minori" care nu rezolvă problemele structurale ale acquis-ului digital al UE.',
                ],
            },
            {
                heading: '10. Ce urmează',
                paragraphs: [
                    'Acordul din 7 mai este provizoriu. Următorii pași sunt:',
                ],
                bullets: [
                    { bold: 'Aprobare formală', text: ' de către Consiliu și Parlamentul European, așteptată înainte de 2 august 2026.' },
                    { bold: 'Revizuire juridic-lingvistică', text: ' a textului consolidat în toate limbile oficiale.' },
                    { bold: 'Publicarea în Jurnalul Oficial', text: ' al Uniunii Europene, cu intrarea în vigoare trei zile mai târziu.' },
                ],
                afterBullets: [
                    'Până la finalizarea acelui pas final, calendarul original al AI Act rămâne obligatoriu din punct de vedere juridic. Programele de conformitate construite pentru termenul de 2 august 2026 nu ar trebui dezasamblate doar pe baza acordului politic. Implicit profesional este de a continua pregătirea sub regimul original și de a trata ușurarea Omnibus ca un beneficiu suprapus dacă și când textul consolidat intră în vigoare.',
                    'Trei observații pentru a închide.',
                    'În primul rând, acordul păstrează arhitectura Actului în timp ce reconfigurează calendarul operativ. Cadrul bazat pe risc, categoriile Anexei III, schema de evaluare a conformității, nivelul GPAI, interdicțiile — toate rămân. Ce s-a schimbat este calendarul și perimetrul de suprapunere cu legea sectorială.',
                    'În al doilea rând, compromisul transparență-filigranare este cel mai clar exemplu al Parlamentului ținând terenul. Perioada de grație de șase luni a Comisiei a fost înjumătățită. Pe un dosar altfel dominat de rezultate prietenoase cu industria, acesta este un contra-exemplu semnificativ.',
                    'În al treilea rând, mecanismul de echivalență pentru Anexa I este partea acordului care va fi cea mai consecvențială și cea mai contestată în implementare. Dacă operează ca o reconciliere tehnică îngustă între AI Act și regimurile sectoriale de siguranță sau ca o doctrină mai largă de primație sectorială depinde în întregime de modul în care Comisia exercită puterea de act de punere în aplicare. Acesta este dosarul de urmărit în 2026 și 2027.',
                    'Ediția următoare va reveni la regimul cu risc ridicat în sine, reluând sub-seria privind Articolul 6 și Anexa III în lumina noilor date de aplicare și a mecanismului de echivalență. Până atunci — mulțumesc pentru lectură.',
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
