'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'How AI Agents are Regulated Under EU Law',
        date: 'May 2, 2026',
        author: 'Matei Ștefan',
        backLabel: '← Back to Resource Hub',
        body: `This edition of The AI Act Guy examines how the EU AI Act applies to agentic AI systems — and where its risk-based architecture begins to strain under the weight of autonomous, multi-step, tool-using systems.

Hi 👋

My name is Matei Ștefan — I am a legal professional working at the intersection of law, tech and AI — and I welcome you to the ninth edition of The AI Act Guy.

In the previous editions, I covered the prohibited practices under Article 5, the interplay between the AI Act and the revised Product Liability Directive, and the current state of the Omnibus negotiations heading into the trilogues. This edition turns to a topic that the AI Act, despite its breadth, does not address by name: AI agents.

This analysis draws on three recent academic contributions that have begun to map the regulatory contours of agentic systems:`,
        introBullets: [
            { bold: 'Nannini, Smith, Maggini et al., AI Agents Under EU Law (arXiv, April 2026)', text: ' — a systematic regulatory mapping for AI agent providers across the AI Act, the GPAI Code of Practice, the CRA, and adjacent EU instruments.' },
            { bold: 'Hacker & Holweg, A Pragmatic Approach to Regulating AI Agents (arXiv, April 2026)', text: ' — on the regulatory classification of agents under the AI Act and the legal status of autonomous agent actions under EU contract law.' },
            { bold: 'Yousefi, Billi & Rotolo, Agentic AI: An EU AI Act Paradigm Shift? (SSRN, November 2025)', text: ' — a position paper arguing that "agenticness" operates as a risk amplifier that tests the limits of the Act’s static, intended-purpose classification framework.' },
        ],
        introAfter: 'Together, these three papers converge on a central point: the AI Act already applies to AI agents, but the way it applies is not always operationally workable. What follows is a structured walk-through of why.',
        sections: [
            {
                heading: '1. "Agent" Is Not in the Law — But Agents Are',
                paragraphs: [
                    'The word "agent" appears nowhere in the AI Act. There is no definition in Article 3, no separate category in Annex III, and no dedicated chapter in the Regulation.',
                    'This is not an oversight. The absence of the term is a deliberate design choice: the AI Act regulates AI systems, not architectural patterns. Despite their structural distinctiveness, agents must therefore be regulated as AI systems in the legal sense — even though they typically build on general-purpose AI (GPAI) models.',
                    'The technology-neutral definition in Article 3(1) was drafted precisely to avoid the need for legislative rewriting every time the underlying technology evolves. An "AI system" is defined by its functional properties — autonomy, adaptiveness, inference, output generation — not by the way its components are arranged.',
                    'This means the threshold question for agents is not whether the AI Act applies, but how it applies. The substantive obligations do not change. The essential requirements for high-risk systems — risk management, data governance, technical documentation, transparency, human oversight, accuracy, robustness, cybersecurity — remain fully in force. What changes is the operational difficulty of meeting them.',
                ],
            },
            {
                heading: '2. Static Risk Classification Breaks Down with Agents',
                paragraphs: [
                    'Here lies the deeper structural tension.',
                    'The AI Act assumes that AI systems are bounded and that their intended purpose is known upfront. A CV-screening tool is identified as high-risk under Annex III on day one. The provider designs against that purpose, documents it, performs a conformity assessment, and applies the CE marking before placing the system on the market. The classification is static. It is determined ex ante, and it stays attached to the system throughout its lifecycle.',
                    'Agents disrupt this assumption.',
                    'Agentic AI introduces non-linear risk dynamics that the Act’s intended-purpose framework was not built to capture. The same agent — same model, same architecture, same provider — can perform fundamentally different tasks depending on which tools it invokes at runtime:',
                ],
                bullets: [
                    { bold: '', text: 'Drafting and answering emails → minimal risk under the AI Act.' },
                    { bold: '', text: 'Screening or ranking job candidates → high-risk under Annex III, point 4.' },
                    { bold: '', text: 'Initiating financial transactions → triggers MiFID, PSD2, AML, and cybersecurity obligations.' },
                ],
                afterBullets: [
                    'One agent. Three regulatory regimes. Determined not at design time, but at the moment a tool is invoked.',
                    'The conformity assessment framework was not designed for this. It was built around a unit-of-analysis — the system — that presents discrete outputs to a human reviewer. Multi-agent orchestration and autonomous tool use structurally violate that assumption. Risk classification, in practice, shifts from being per system to being per action.',
                    'This is not a marginal technical observation. It calls into question whether the conformity assessment performed at market placement remains representative of what the system actually does once deployed.',
                ],
            },
            {
                heading: '3. The Three Obligations Under the Most Strain',
                paragraphs: [
                    'Three pillars of the high-risk regime are particularly stressed by agentic deployment: human oversight (Article 14), transparency (Articles 13 and 50), and traceability (Article 12).',
                ],
            },
            {
                heading: 'Human Oversight (Article 14)',
                paragraphs: [
                    'Under the existing model, oversight is often understood retrospectively — a human reviews the output of the system, and intervenes if necessary. For agents, this is no longer sufficient.',
                    'When an agent has already sent the email, executed the trade, or deleted the file, there is nothing left to oversee. The action has already produced consequences in the world.',
                    'Oversight must therefore become active, technical, and ex ante. This means explicit intervention mechanisms: the guaranteed capability to pause, redirect, or shut down the agent. In practical terms, this translates into confirmation gates on irreversible actions, permission scoping at the API and tool layer, and the ability to interrupt multi-step action chains mid-execution.',
                    'A system prompt instructing the agent to "be careful" is not a security control. It is a design intention. Article 14 demands more.',
                ],
            },
            {
                heading: 'Transparency (Articles 13 and 50)',
                paragraphs: [
                    'Transparency obligations under the AI Act are typically framed around the relationship between the provider, the deployer, and the direct user.',
                    'Agents complicate this. When an agent autonomously sends an email to a third party, posts on a platform, or interacts with another agent or system on behalf of a user, the recipient becomes an affected person. Article 50 obligations — informing individuals that they are interacting with an AI system, or that content has been artificially generated — extend beyond the direct user.',
                    'This is structurally important. Most agent providers have built their products around a one-to-one user interface model. Agentic deployment routinely creates one-to-many transparency duties that cross trust boundaries, organisational perimeters, and jurisdictions.',
                ],
            },
            {
                heading: 'Traceability (Article 12)',
                paragraphs: [
                    'Logging the output of a model is one thing. Logging every tool invocation, every API call, every state change, and every intermediate decision across a multi-step agent execution is something else entirely.',
                    'The point is direct: without granular traceability across the full action chain, providers cannot demonstrate that the system is still operating within the envelope assessed at conformity.',
                    'The implication is significant. Article 12 is not a reporting nicety — it is the evidentiary backbone of the entire compliance edifice. Without it, post-market monitoring (Article 72), serious incident reporting (Article 73), and the documentation duties under Annex IV cannot be performed credibly. And, as discussed in Edition #3, the same logs become central to defending the system in any subsequent product liability proceedings.',
                ],
            },
            {
                heading: '4. Substantial Modification and the Orchestration Layer',
                paragraphs: [
                    'Two further issues compound the picture.',
                    'The first concerns Article 25 and substantial modification. For traditional systems, this is a discrete event — a fine-tune, a new training cycle, a change in intended purpose. For agents, the boundary is far less clear. Autonomous capability extension — through new tool integrations, new memory architectures, or new orchestration layers — may functionally alter the risk profile of the system without any formal retraining of the underlying model. At what point does adding a tool count as a substantial modification? The current framework provides limited guidance.',
                    'The second is the orchestration layer. As multi-agent systems develop, agents increasingly interact with other agents — delegating tasks, exchanging information, executing coordinated actions. This introduces categories of risk that the AI Act, in its current form, does not directly address: misalignment between agents, cascading failures, and chains of execution where no single party fully controls the outcome. Regulatory oversight must arguably shift, at least in part, to this orchestration layer.',
                    'A connected question sits within EU contract law: when an agent autonomously concludes a transaction on behalf of a user, the legal validity of that action is not something the AI Act resolves. Resolving it will likely require coordinated developments across consumer protection, civil law, and digital legislation — including, possibly, the upcoming Digital Fairness Act.',
                ],
            },
            {
                heading: '5. If You Cannot Trace It, You Cannot Place It on the Market',
                paragraphs: [
                    'The convergence point across recent scholarship is operational, not theoretical.',
                    'The argument is straightforward: high-risk agentic systems with untraceable behavioural drift cannot, at present, satisfy the essential requirements of the AI Act. Not "may struggle to" — but cannot. If the provider is unable to demonstrate that the system is still operating within the envelope assessed at conformity, there is no conformity case to make. And the essential requirements are already binding.',
                    'This is the practical takeaway for any organisation developing or deploying agents in the EU.',
                    'Compliance obligations are not determined by what the agent is. They are determined by what the agent does — and where, and to whom, and with what consequences.',
                    'The first task for any organisation deploying agents is therefore not a legal classification exercise. It is an inventory: what actions can the agent take, what external systems does it touch, what data flows are involved, whose rights are potentially affected? The foundational compliance task is an exhaustive mapping of external actions, data flows, connected systems, and affected persons. Once that map exists, the regulatory picture becomes legible. Without it, providers and deployers are guessing.',
                ],
            },
            {
                heading: 'Conclusion',
                paragraphs: [
                    'The AI Act applies to AI agents. The essential requirements bind. The conformity logic remains in force. What is genuinely new is the difficulty of operationalising those requirements when the system is autonomous, multi-purpose, tool-using, and dynamically configured at runtime.',
                    'For founders, CTOs, and product teams building agentic systems for the European market, three priorities follow from the analysis:',
                ],
                bullets: [
                    { bold: 'Map the action surface.', text: ' Compliance starts from a granular inventory of what the agent can do, not from architectural diagrams of what it is.' },
                    { bold: 'Build oversight into the architecture, not the prompt.', text: ' Confirmation gates, permission scoping, and shut-down mechanisms must be designed at the system level, not delegated to natural-language instructions.' },
                    { bold: 'Treat traceability as a first-class system requirement.', text: ' Without comprehensive logging across the full action chain, conformity cannot be demonstrated, and liability cannot be defended.' },
                ],
                afterBullets: [
                    'The legislative response will likely take time. The most immediate developments are more likely to come through technical standards, guidelines, and the AI Office’s interpretative practice than through amendments to the Regulation itself. In the meantime, the binding requirements are already in place — and the burden of demonstrating compliance sits with the provider.',
                ],
            },
        ],
    },
    ro: {
        title: 'Cum sunt reglementați agenții AI sub dreptul UE',
        date: '2 mai 2026',
        author: 'Matei Ștefan',
        backLabel: '← Înapoi la Hub-ul de Resurse',
        body: `Această ediție a The AI Act Guy examinează cum se aplică EU AI Act sistemelor AI agentice — și unde arhitectura sa bazată pe risc începe să fie pusă la încercare sub greutatea sistemelor autonome, multi-pas, care folosesc unelte.

Bună 👋

Mă numesc Matei Ștefan — sunt un profesionist juridic care lucrează la intersecția dintre drept, tehnologie și AI — și vă bineîntampin la a noua ediție The AI Act Guy.

În edițiile anterioare, am acoperit practicile interzise sub Articolul 5, interacțiunea dintre AI Act și Directiva revizuită privind Răspunderea pentru Produse și stadiul actual al negocierilor Omnibus la intrarea în trialoguri. Această ediție se îndreaptă către un subiect pe care AI Act, în ciuda amplorii sale, nu îl abordează pe nume: agenții AI.

Această analiză se bazează pe trei contribuții academice recente care au început să cartografieze contururile regulatorii ale sistemelor agentice:`,
        introBullets: [
            { bold: 'Nannini, Smith, Maggini și colab., AI Agents Under EU Law (arXiv, aprilie 2026)', text: ' — o cartografiere regulatorie sistematică pentru furnizorii de agenți AI în AI Act, Codul de Practică GPAI, CRA și instrumentele UE adiacente.' },
            { bold: 'Hacker & Holweg, A Pragmatic Approach to Regulating AI Agents (arXiv, aprilie 2026)', text: ' — despre clasificarea regulatorie a agenților sub AI Act și statutul juridic al acțiunilor agenților autonomi sub dreptul contractual al UE.' },
            { bold: 'Yousefi, Billi & Rotolo, Agentic AI: An EU AI Act Paradigm Shift? (SSRN, noiembrie 2025)', text: ' — o lucrare de poziție care argumentează că „agenticitatea" operează ca un amplificator de risc care testează limitele cadrului static de clasificare bazat pe scopul intenționat al Actului.' },
        ],
        introAfter: 'Împreună, aceste trei lucrări converg către un punct central: AI Act se aplică deja agenților AI, dar modul în care se aplică nu este întotdeauna operațional realizabil. Ceea ce urmează este o parcurgere structurată a motivelor.',
        sections: [
            {
                heading: '1. „Agent" nu este în lege — dar agenții sunt',
                paragraphs: [
                    'Cuvântul „agent" nu apare nicăieri în AI Act. Nu există nicio definiție în Articolul 3, nicio categorie separată în Anexa III și niciun capitol dedicat în Regulament.',
                    'Aceasta nu este o omisiune. Absența termenului este o alegere de design deliberată: AI Act reglementează sistemele AI, nu tiparele arhitecturale. În ciuda distinctivității lor structurale, agenții trebuie prin urmare să fie reglementați ca sisteme AI în sens juridic — chiar dacă de obicei se construiesc pe modele AI de uz general (GPAI).',
                    'Definiția neutră tehnologic din Articolul 3(1) a fost redactată tocmai pentru a evita necesitatea rescrierii legislative de fiecare dată când tehnologia de bază evoluează. Un „sistem AI" este definit prin proprietățile sale funcționale — autonomie, adaptabilitate, inferență, generare de ieșiri — nu prin modul în care componentele sale sunt aranjate.',
                    'Aceasta înseamnă că întrebarea de prag pentru agenți nu este dacă se aplică AI Act, ci cum se aplică. Obligațiile substanțiale nu se schimbă. Cerințele esențiale pentru sistemele cu risc ridicat — management al riscului, guvernanța datelor, documentație tehnică, transparență, supraveghere umană, acuratețe, robustețe, cibersecuritate — rămân pe deplin în vigoare. Ceea ce se schimbă este dificultatea operațională de a le îndeplini.',
                ],
            },
            {
                heading: '2. Clasificarea statică a riscului se destramă cu agenții',
                paragraphs: [
                    'Aici se află tensiunea structurală mai profundă.',
                    'AI Act presupune că sistemele AI sunt delimitate și că scopul lor intenționat este cunoscut din start. Un instrument de selecție a CV-urilor este identificat ca având risc ridicat sub Anexa III din prima zi. Furnizorul proiectează în funcție de acest scop, îl documentează, efectuează o evaluare de conformitate și aplică marcajul CE înainte de a introduce sistemul pe piață. Clasificarea este statică. Este determinată ex ante și rămâne atașată sistemului pe tot parcursul ciclului său de viață.',
                    'Agenții perturbă această presupunere.',
                    'AI-ul agentic introduce dinamici de risc non-liniare pe care cadrul de scop intenționat al Actului nu a fost construit să le capteze. Același agent — același model, aceeași arhitectură, același furnizor — poate îndeplini sarcini fundamental diferite în funcție de uneltele pe care le invocă în timpul rulării:',
                ],
                bullets: [
                    { bold: '', text: 'Redactarea și răspunsul la e-mailuri → risc minim sub AI Act.' },
                    { bold: '', text: 'Selectarea sau clasificarea candidaților pentru angajare → risc ridicat sub Anexa III, punctul 4.' },
                    { bold: '', text: 'Inițierea de tranzacții financiare → declanșează MiFID, PSD2, AML și obligații de cibersecuritate.' },
                ],
                afterBullets: [
                    'Un singur agent. Trei regimuri regulatorii. Determinate nu în momentul proiectării, ci în momentul în care o unealtă este invocată.',
                    'Cadrul de evaluare a conformității nu a fost proiectat pentru aceasta. A fost construit în jurul unei unități de analiză — sistemul — care prezintă ieșiri discrete unui revizor uman. Orchestrarea multi-agent și utilizarea autonomă a uneltelor violează structural această presupunere. Clasificarea riscului, în practică, se mută de la a fi per sistem la a fi per acțiune.',
                    'Aceasta nu este o observație tehnică marginală. Pune sub semnul întrebării dacă evaluarea conformității efectuată la introducerea pe piață rămâne reprezentativă pentru ceea ce face efectiv sistemul odată implementat.',
                ],
            },
            {
                heading: '3. Cele trei obligații sub cea mai mare presiune',
                paragraphs: [
                    'Trei piloni ai regimului de risc ridicat sunt stresați în mod deosebit de implementarea agentică: supravegherea umană (Articolul 14), transparența (Articolele 13 și 50) și trasabilitatea (Articolul 12).',
                ],
            },
            {
                heading: 'Supravegherea umană (Articolul 14)',
                paragraphs: [
                    'Sub modelul existent, supravegherea este adesea înțeleasă retrospectiv — un om revizuiește ieșirea sistemului și intervine dacă este necesar. Pentru agenți, aceasta nu mai este suficientă.',
                    'Când un agent a trimis deja e-mailul, a executat tranzacția sau a șters fișierul, nu mai există nimic de supravegheat. Acțiunea a produs deja consecințe în lume.',
                    'Supravegherea trebuie prin urmare să devină activă, tehnică și ex ante. Aceasta înseamnă mecanisme de intervenție explicite: capacitatea garantată de a întrerupe, redirecționa sau opri agentul. În termeni practici, aceasta se traduce în puncte de confirmare pentru acțiuni ireversibile, delimitarea permisiunilor la nivel de API și unealtă și capacitatea de a întrerupe lanțurile de acțiuni multi-pas în timpul execuției.',
                    'Un prompt de sistem care îi spune agentului să „fie atent" nu este un control de securitate. Este o intenție de design. Articolul 14 cere mai mult.',
                ],
            },
            {
                heading: 'Transparența (Articolele 13 și 50)',
                paragraphs: [
                    'Obligațiile de transparență sub AI Act sunt de obicei formulate în jurul relației dintre furnizor, deployer și utilizatorul direct.',
                    'Agenții complică acest lucru. Când un agent trimite autonom un e-mail unei terțe părți, postează pe o platformă sau interacționează cu un alt agent sau sistem în numele unui utilizator, destinatarul devine o persoană afectată. Obligațiile din Articolul 50 — informarea persoanelor că interacționează cu un sistem AI sau că un conținut a fost generat artificial — se extind dincolo de utilizatorul direct.',
                    'Aceasta este important structural. Cei mai mulți furnizori de agenți și-au construit produsele în jurul unui model de interfață utilizator unu-la-unu. Implementarea agentică creează în mod rutinier obligații de transparență unu-la-mulți care traversează granițele de încredere, perimetrele organizaționale și jurisdicțiile.',
                ],
            },
            {
                heading: 'Trasabilitatea (Articolul 12)',
                paragraphs: [
                    'Înregistrarea ieșirii unui model este un lucru. Înregistrarea fiecărei invocări de unealtă, fiecărei apelări API, fiecărei schimbări de stare și fiecărei decizii intermediare pe parcursul unei execuții multi-pas a unui agent este cu totul altceva.',
                    'Punctul este direct: fără trasabilitate granulară pe tot lanțul de acțiuni, furnizorii nu pot demonstra că sistemul operează în continuare în plicul evaluat la conformitate.',
                    'Implicația este semnificativă. Articolul 12 nu este o subtilitate de raportare — este coloana vertebrală probatorie a întregului edificiu de conformitate. Fără el, monitorizarea post-piață (Articolul 72), raportarea incidentelor grave (Articolul 73) și obligațiile de documentare sub Anexa IV nu pot fi îndeplinite credibil. Și, după cum s-a discutat în Ediția #3, aceleași jurnale devin centrale pentru apărarea sistemului în orice procedură ulterioară privind răspunderea pentru produse.',
                ],
            },
            {
                heading: '4. Modificarea substanțială și stratul de orchestrare',
                paragraphs: [
                    'Două probleme suplimentare complică imaginea.',
                    'Prima vizează Articolul 25 și modificarea substanțială. Pentru sistemele tradiționale, acesta este un eveniment discret — un fine-tune, un nou ciclu de antrenare, o schimbare a scopului intenționat. Pentru agenți, granița este mult mai puțin clară. Extinderea capabilităților în mod autonom — prin integrări de unelte noi, arhitecturi de memorie noi sau straturi de orchestrare noi — poate altera funcțional profilul de risc al sistemului fără nicio re-antrenare formală a modelului de bază. La ce punct adăugarea unei unelte contează ca modificare substanțială? Cadrul actual oferă îndrumare limitată.',
                    'A doua este stratul de orchestrare. Pe măsură ce sistemele multi-agent se dezvoltă, agenții interacționează din ce în ce mai mult cu alți agenți — delegând sarcini, schimbând informații, executând acțiuni coordonate. Aceasta introduce categorii de risc pe care AI Act, în forma sa actuală, nu le abordează direct: nealinierea între agenți, eșecurile în cascadă și lanțurile de execuție în care nicio singură parte nu controlează pe deplin rezultatul. Supravegherea regulatorie ar trebui probabil să se mute, cel puțin parțial, la acest strat de orchestrare.',
                    'O întrebare conexă se află în dreptul contractual al UE: când un agent încheie autonom o tranzacție în numele unui utilizator, validitatea juridică a acelei acțiuni nu este ceva pe care AI Act îl rezolvă. Rezolvarea acesteia va necesita probabil dezvoltări coordonate în protecția consumatorilor, dreptul civil și legislația digitală — inclusiv, posibil, viitorul Digital Fairness Act.',
                ],
            },
            {
                heading: '5. Dacă nu îl poți urmări, nu îl poți pune pe piață',
                paragraphs: [
                    'Punctul de convergență din literatura recentă este operațional, nu teoretic.',
                    'Argumentul este direct: sistemele agentice cu risc ridicat și deriva comportamentală neurmăribilă nu pot, în prezent, satisface cerințele esențiale ale AI Act. Nu „pot avea dificultăți" — ci nu pot. Dacă furnizorul nu poate demonstra că sistemul operează în continuare în plicul evaluat la conformitate, nu există niciun caz de conformitate de făcut. Iar cerințele esențiale sunt deja obligatorii.',
                    'Aceasta este concluzia practică pentru orice organizație care dezvoltă sau implementează agenți în UE.',
                    'Obligațiile de conformitate nu sunt determinate de ceea ce este agentul. Sunt determinate de ceea ce face agentul — și unde, și pentru cine, și cu ce consecințe.',
                    'Prima sarcină pentru orice organizație care implementează agenți nu este prin urmare un exercițiu de clasificare juridică. Este un inventar: ce acțiuni poate efectua agentul, ce sisteme externe atinge, ce fluxuri de date sunt implicate, ale cui drepturi sunt potențial afectate? Sarcina fundamentală de conformitate este o cartografiere exhaustivă a acțiunilor externe, fluxurilor de date, sistemelor conectate și persoanelor afectate. Odată ce această hartă există, imaginea regulatorie devine lizibilă. Fără ea, furnizorii și deployerii ghicesc.',
                ],
            },
            {
                heading: 'Concluzie',
                paragraphs: [
                    'AI Act se aplică agenților AI. Cerințele esențiale obligă. Logica de conformitate rămâne în vigoare. Ceea ce este cu adevărat nou este dificultatea de a operaționaliza acele cerințe când sistemul este autonom, multi-scop, folosește unelte și este configurat dinamic la rulare.',
                    'Pentru fondatori, CTO și echipe de produs care construiesc sisteme agentice pentru piața europeană, trei priorități rezultă din analiză:',
                ],
                bullets: [
                    { bold: 'Cartografiază suprafața de acțiune.', text: ' Conformitatea începe de la un inventar granular al ceea ce poate face agentul, nu de la diagrame arhitecturale ale a ceea ce este.' },
                    { bold: 'Construiește supravegherea în arhitectură, nu în prompt.', text: ' Punctele de confirmare, delimitarea permisiunilor și mecanismele de oprire trebuie proiectate la nivel de sistem, nu delegate instrucțiunilor în limbaj natural.' },
                    { bold: 'Tratează trasabilitatea ca o cerință de sistem de prim rang.', text: ' Fără înregistrare cuprinzătoare pe tot lanțul de acțiuni, conformitatea nu poate fi demonstrată, iar răspunderea nu poate fi apărată.' },
                ],
                afterBullets: [
                    'Răspunsul legislativ va dura probabil. Cele mai imediate evoluții vor veni mai degrabă prin standarde tehnice, ghiduri și practica interpretativă a Oficiului AI decât prin amendamente la Regulament în sine. Între timp, cerințele obligatorii sunt deja în vigoare — iar sarcina de a demonstra conformitatea revine furnizorului.',
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
