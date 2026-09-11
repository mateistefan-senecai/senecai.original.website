'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The Prohibited Practices under the AI Act (Part 1): Harmful Manipulation and Vulnerability Exploitation',
        date: 'March 14, 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 Back to Resource Hub',
        body: `Hi \u2014 my name is Matei Stefan. I am a legal professional working at the intersection of law, tech and AI, and I welcome you to the next edition of The AI Act Guy, where we begin examining one of the most consequential parts of the EU AI Act: prohibited AI practices.

In the previous editions of this series, I discussed the architecture of the AI Act and its position within the broader EU technology law ecosystem. The next step is to examine the top layer of the risk hierarchy.

At the apex of the regulation sit a number of practices classified as \u201Cunacceptable risk.\u201D These practices are considered fundamentally incompatible with EU values and are therefore prohibited outright.

The prohibited practices, as defined by Article 5 of the EU AI Act, will be discussed through a 4-part series, with this article being the first of the four.

In this article, I will focus on the first two prohibited practices, as per Article 5:`,
        introBullets: [
            { bold: 'Article 5(1)(a):', text: ' harmful manipulation and deception' },
            { bold: 'Article 5(1)(b):', text: ' exploitation of vulnerabilities' },
        ],
        introAfter: 'Both provisions address a similar underlying concern: AI systems that interfere with human autonomy by manipulating behaviour in ways that can cause significant harm.',
        sections: [
            {
                heading: 'The Logic Behind Prohibited Practices',
                paragraphs: [
                    'The prohibited practices regime reflects a core normative choice embedded in the AI Act.',
                    'Certain uses of AI are not merely risky or sensitive; they are considered fundamentally incompatible with the protection of fundamental rights. These practices interfere directly with individual autonomy, dignity, and the ability to make free and informed decisions.',
                    'For that reason, the AI Act does not attempt to regulate them through safeguards or risk-mitigation mechanisms. Instead, it removes them from the market entirely.',
                    'The Commission\u2019s guidance on Article 5 clarifies that these prohibitions are intended to protect individuals from AI-enabled manipulation and exploitation that materially distorts behaviour and leads to significant harm.',
                    'Importantly, these rules apply not only to providers placing such systems on the market, but also to deployers using them in practice.',
                ],
            },
            {
                heading: 'Article 5(1)(a): Harmful Manipulation and Deception',
                paragraphs: [
                    'The first prohibited practice targets AI systems that manipulate human behaviour through subliminal, deceptive, or intentionally manipulative techniques.',
                    'Under Article 5(1)(a), an AI system is prohibited when four elements are present simultaneously:',
                ],
                bullets: [
                    { bold: '', text: 'The system deploys subliminal, manipulative, or deceptive techniques' },
                    { bold: '', text: 'These techniques materially distort a person\u2019s behaviour' },
                    { bold: '', text: 'The distortion impairs the person\u2019s ability to make an informed decision' },
                    { bold: '', text: 'The resulting behaviour causes or is reasonably likely to cause significant harm' },
                ],
                afterBullets: [
                    'This is a cumulative test. If any of these elements is missing, the prohibition may not apply.',
                ],
                subheadings: [
                    {
                        label: 'What counts as manipulative or deceptive techniques?',
                        text: 'The Commission guidelines identify three categories of techniques covered by the prohibition:',
                        items: [
                            {
                                bold: '1. Subliminal techniques',
                                text: ' \u2014 These operate below the threshold of conscious awareness. Individuals are influenced without realising that the influence is occurring. Examples may include visual cues embedded in video frames too quickly for conscious detection, audio signals masked by background noise, or subtle tactile stimuli designed to affect emotional responses. Such techniques bypass rational evaluation mechanisms and may influence decisions without conscious awareness.',
                            },
                            {
                                bold: '2. Purposefully manipulative techniques',
                                text: ' \u2014 These exploit known psychological vulnerabilities, behavioural biases, or emotional triggers to push users toward a particular decision.',
                            },
                            {
                                bold: '3. Deceptive techniques',
                                text: ' \u2014 These involve misleading users about the nature, intent, or consequences of an AI interaction.',
                            },
                        ],
                        after: 'It is important to note that the prohibition does not apply to every form of persuasion or influence. The threshold is relatively high: the manipulation must materially distort behaviour and lead to significant harm. For example, generative AI systems that occasionally produce incorrect outputs are not automatically considered deceptive techniques if users are properly informed of system limitations and safeguards are in place.',
                    },
                ],
            },
            {
                heading: 'Article 5(1)(b): Exploitation of Vulnerabilities',
                paragraphs: [
                    'The second prohibited practice focuses on AI systems that exploit vulnerable groups.',
                    'Here, the manipulation does not operate through hidden techniques. Instead, the system intentionally targets people who are more susceptible to influence due to certain characteristics.',
                    'Article 5(1)(b) applies when an AI system exploits vulnerabilities related to age, disability, or social or economic situation, materially distorts behaviour, and causes or is likely to cause significant harm.',
                    'The regulation identifies three categories of protected groups:',
                ],
                bullets: [
                    { bold: 'Age-related vulnerabilities', text: ' \u2014 This includes both children and older persons.' },
                    { bold: 'Disabilities', text: ' \u2014 Physical, cognitive, or psychological limitations that affect decision-making capacity.' },
                    { bold: 'Specific social or economic situations', text: ' \u2014 For example, individuals experiencing financial distress or social marginalisation.' },
                ],
                afterBullets: [
                    'The underlying logic is straightforward: some groups have a reduced ability to recognise or resist manipulative practices, and therefore require additional protection.',
                ],
            },
            {
                heading: 'The Practical Threshold: \u201CSignificant Harm\u201D',
                paragraphs: [
                    'A critical element shared by both prohibitions is the requirement of significant harm.',
                    'The AI Act does not prohibit manipulation or exploitation in the abstract. Instead, it focuses on situations where these practices are likely to produce serious negative consequences.',
                    'The harm may be physical, psychological, financial, or societal harm affecting groups or communities.',
                    'Because of this requirement, the application of Article 5 will often depend on case-by-case assessments conducted by regulators or courts. The Commission guidelines explicitly emphasise that the examples provided are indicative and that enforcement authorities must evaluate each situation individually.',
                ],
            },
            {
                heading: 'Examples Related to Article 5(1)(a): Harmful Manipulation and Deception',
                subheadings: [
                    {
                        label: 'Examples likely to fall within the prohibition',
                        paragraphs: [
                            'An AI-powered mobile application subtly embeds visual frames promoting certain gambling platforms during video playback. These frames appear too briefly for conscious detection but are designed to influence users\u2019 attitudes toward gambling services. If such subliminal cues materially distort users\u2019 behaviour and contribute to harmful financial decisions, the system may fall within Article 5(1)(a).',
                            'Another example could involve an AI assistant that deliberately misrepresents the consequences of a financial product in order to push users toward purchasing it. If the system uses deceptive techniques that significantly impair the user\u2019s ability to make an informed decision \u2014 for instance by systematically hiding risks while emphasising fabricated benefits \u2014 this could constitute prohibited manipulation.',
                            'Similarly, an AI system used in online platforms could combine behavioural profiling with psychologically manipulative prompts designed to pressure users into taking harmful actions, such as excessive spending or risky investments. If the system materially distorts decision-making and causes significant harm, the prohibition may apply.',
                        ],
                    },
                    {
                        label: 'Examples that are generally not prohibited',
                        paragraphs: [
                            'Many AI systems influence behaviour without crossing the threshold set by Article 5(1)(a). Recommender systems suggesting products based on past purchases, or streaming platforms recommending content tailored to user preferences, generally do not constitute prohibited manipulation. While these systems attempt to influence behaviour, they typically operate transparently and do not bypass a user\u2019s conscious decision-making processes.',
                            'Similarly, conversational AI systems may occasionally produce inaccurate or misleading information due to technical limitations. According to the Commission guidance, such outcomes do not automatically qualify as deceptive techniques where the provider has clearly communicated the system\u2019s limitations and implemented safeguards to minimise misleading outputs.',
                            'The decisive factor is whether the system materially impairs a person\u2019s ability to make an informed decision and leads to significant harm, rather than merely influencing behaviour in ordinary commercial contexts.',
                        ],
                    },
                ],
            },
            {
                heading: 'Examples Related to Article 5(1)(b): Exploitation of Vulnerabilities',
                subheadings: [
                    {
                        label: 'Examples likely to fall within the prohibition',
                        paragraphs: [
                            'Consider an AI-powered game designed for children that dynamically adapts reward structures to encourage increasingly risky behaviour. If the system analyses children\u2019s behavioural responses and deliberately pushes them toward dangerous physical actions in order to prolong engagement, it may be considered to exploit age-related vulnerabilities.',
                            'Another example might involve an AI-driven financial service targeting individuals in severe financial distress. If the system identifies economically vulnerable users and aggressively promotes high-risk financial products \u2014 such as predatory loans or speculative investments \u2014 by exploiting their precarious situation, this could constitute exploitation under Article 5(1)(b).',
                            'A similar concern arises where AI chatbots deliberately target socially marginalised groups with manipulative messaging that encourages harmful behaviour or reinforces social isolation. In each of these scenarios, the system does not merely interact with vulnerable individuals; it actively exploits their vulnerabilities in a way that materially distorts behaviour and causes harm.',
                        ],
                    },
                    {
                        label: 'Examples that are generally not prohibited',
                        paragraphs: [
                            'Not every AI system interacting with vulnerable groups falls within the prohibition. AI-powered learning tools designed to help children improve reading skills, for instance, may personalise exercises or adapt difficulty levels based on behavioural data. Such systems do not exploit vulnerabilities if their purpose is educational support and they are designed to promote the well-being of the user.',
                            'Similarly, AI assistants developed to support elderly individuals \u2014 for example by reminding them to take medication or helping them navigate digital services \u2014 typically fall outside the scope of Article 5(1)(b), as they aim to mitigate vulnerabilities rather than exploit them.',
                            'Assistive technologies for persons with disabilities, including AI-enabled prosthetics, accessibility tools, or speech-generation systems, also illustrate how AI can be deployed specifically to empower vulnerable individuals without engaging in exploitative practices.',
                        ],
                    },
                ],
            },
            {
                heading: 'Why These Prohibitions Matter for AI Builders',
                paragraphs: [
                    'For founders and product teams, the implications are relatively clear.',
                    'The first two prohibitions in Article 5 effectively establish design boundaries for AI systems interacting with humans.',
                    'In practice, this means that teams developing AI products should avoid:',
                ],
                bullets: [
                    { bold: '', text: 'Behavioural manipulation mechanisms designed to bypass conscious decision-making' },
                    { bold: '', text: 'System architectures that intentionally exploit psychological vulnerabilities' },
                    { bold: '', text: 'Targeting strategies aimed at vulnerable groups in ways that could produce harmful outcomes' },
                ],
                afterBullets: [
                    'These issues increasingly intersect with product design, behavioural analytics, and recommender system architecture, which means that legal risk is often embedded directly into the system\u2019s design choices.',
                    'From a governance perspective, these prohibitions are not merely compliance obligations. They function as red lines for AI product development in the European market.',
                ],
            },
            {
                heading: 'Closing Thought',
                paragraphs: [
                    'The prohibited practices regime illustrates the broader philosophy behind the EU AI Act.',
                    'Rather than regulating every possible risk through compliance obligations, the regulation draws a clear boundary around a small number of practices that are considered fundamentally incompatible with the Union\u2019s approach to human-centric AI.',
                    'The next edition of The AI Act Guy will continue examining the remaining prohibited practices in Article 5, focusing on social scoring and predictive policing.',
                ],
            },
        ],
    },
    ro: {
        title: 'Practicile interzise sub AI Act (Partea 1): Manipularea d\u0103un\u0103toare \u0219i exploatarea vulnerabilit\u0103\u021Bilor',
        date: '14 martie 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        body: `Bun\u0103 \u2014 m\u0103 numesc Matei Stefan. Sunt un profesionist juridic care lucreaz\u0103 la intersec\u021Bia dintre drept, tehnologie \u0219i AI, \u0219i v\u0103 bine\u00EEntampin la urm\u0103toarea edi\u021Bie The AI Act Guy, unde \u00EEncepem s\u0103 examin\u0103m una dintre cele mai importante p\u0103r\u021Bi ale EU AI Act: practicile AI interzise.

\u00CEn edi\u021Biile anterioare ale acestei serii, am discutat arhitectura AI Act \u0219i pozi\u021Bia sa \u00EEn cadrul ecosistemului mai larg al dreptului tehnologic UE. Urm\u0103torul pas este s\u0103 examin\u0103m stratul superior al ierarhiei de risc.

\u00CEn v\u00E2rful regulamentului se afl\u0103 o serie de practici clasificate ca \u201Erisc inacceptabil.\u201D Aceste practici sunt considerate fundamental incompatibile cu valorile UE \u0219i sunt prin urmare interzise complet.

Practicile interzise, a\u0219a cum sunt definite de Articolul 5 al EU AI Act, vor fi discutate printr-o serie de 4 articole, acest articol fiind primul dintre cele patru.

\u00CEn acest articol, m\u0103 voi concentra pe primele dou\u0103 practici interzise, conform Articolului 5:`,
        introBullets: [
            { bold: 'Articolul 5(1)(a):', text: ' manipularea d\u0103un\u0103toare \u0219i \u00EEn\u0219el\u0103ciunea' },
            { bold: 'Articolul 5(1)(b):', text: ' exploatarea vulnerabilit\u0103\u021Bilor' },
        ],
        introAfter: 'Ambele prevederi abordeaz\u0103 o preocupare comun\u0103: sistemele AI care interfereaz\u0103 cu autonomia uman\u0103 prin manipularea comportamentului \u00EEn moduri care pot cauza prejudicii semnificative.',
        sections: [
            {
                heading: 'Logica din spatele practicilor interzise',
                paragraphs: [
                    'Regimul practicilor interzise reflect\u0103 o alegere normativ\u0103 de baz\u0103 \u00EEncorporat\u0103 \u00EEn AI Act.',
                    'Anumite utiliz\u0103ri ale AI nu sunt doar riscante sau sensibile; ele sunt considerate fundamental incompatibile cu protec\u021Bia drepturilor fundamentale. Aceste practici interfereaz\u0103 direct cu autonomia individual\u0103, demnitatea \u0219i capacitatea de a lua decizii libere \u0219i informate.',
                    'Din acest motiv, AI Act nu \u00EEncearc\u0103 s\u0103 le reglementeze prin m\u0103suri de protec\u021Bie sau mecanisme de atenuare a riscului. \u00CEn schimb, le elimin\u0103 complet de pe pia\u021B\u0103.',
                    'Ghidurile Comisiei privind Articolul 5 clarific\u0103 c\u0103 aceste interdicte sunt menite s\u0103 protejeze persoanele de manipularea \u0219i exploatarea activate de AI care distorsioneaz\u0103 material comportamentul \u0219i duce la prejudicii semnificative.',
                    'Important, aceste reguli se aplic\u0103 nu numai furnizorilor care plaseaz\u0103 astfel de sisteme pe pia\u021B\u0103, ci \u0219i operatorilor care le utilizeaz\u0103 \u00EEn practic\u0103.',
                ],
            },
            {
                heading: 'Articolul 5(1)(a): Manipularea d\u0103un\u0103toare \u0219i \u00EEn\u0219el\u0103ciunea',
                paragraphs: [
                    'Prima practic\u0103 interzis\u0103 vizeaz\u0103 sistemele AI care manipuleaz\u0103 comportamentul uman prin tehnici subliminale, \u00EEn\u0219el\u0103toare sau inten\u021Bionat manipulative.',
                    'Conform Articolului 5(1)(a), un sistem AI este interzis atunci c\u00E2nd patru elemente sunt prezente simultan:',
                ],
                bullets: [
                    { bold: '', text: 'Sistemul utilizeaz\u0103 tehnici subliminale, manipulative sau \u00EEn\u0219el\u0103toare' },
                    { bold: '', text: 'Aceste tehnici distorsioneaz\u0103 material comportamentul unei persoane' },
                    { bold: '', text: 'Distorsiunea afecteaz\u0103 capacitatea persoanei de a lua o decizie informat\u0103' },
                    { bold: '', text: 'Comportamentul rezultat cauzeaz\u0103 sau este rezonabil de probabil s\u0103 cauzeze prejudicii semnificative' },
                ],
                afterBullets: [
                    'Acesta este un test cumulativ. Dac\u0103 oricare dintre aceste elemente lipse\u0219te, interdic\u021Bia poate s\u0103 nu se aplice.',
                ],
                subheadings: [
                    {
                        label: 'Ce constituie tehnici manipulative sau \u00EEn\u0219el\u0103toare?',
                        text: 'Ghidurile Comisiei identific\u0103 trei categorii de tehnici acoperite de interdic\u021Bie:',
                        items: [
                            {
                                bold: '1. Tehnici subliminale',
                                text: ' \u2014 Acestea opereaz\u0103 sub pragul con\u0219tiin\u021Bei. Persoanele sunt influen\u021Bate f\u0103r\u0103 s\u0103 \u00EE\u0219i dea seama c\u0103 influen\u021Ba are loc. Exemple pot include semnale vizuale \u00EEncorporate \u00EEn cadre video prea rapid pentru detec\u021Bia con\u0219tient\u0103, semnale audio mascate de zgomot de fundal sau stimuli tactili subtili proiecta\u021Bi s\u0103 afecteze r\u0103spunsurile emo\u021Bionale.',
                            },
                            {
                                bold: '2. Tehnici inten\u021Bionat manipulative',
                                text: ' \u2014 Acestea exploateaz\u0103 vulnerabilit\u0103\u021Bi psihologice cunoscute, p\u0103rtiniri comportamentale sau declan\u0219atori emo\u021Bionali pentru a \u00EEmpinge utilizatorii c\u0103tre o anumit\u0103 decizie.',
                            },
                            {
                                bold: '3. Tehnici \u00EEn\u0219el\u0103toare',
                                text: ' \u2014 Acestea implic\u0103 inducerea \u00EEn eroare a utilizatorilor cu privire la natura, inten\u021Bia sau consecin\u021Bele unei interac\u021Biuni AI.',
                            },
                        ],
                        after: 'Este important de re\u021Binut c\u0103 interdic\u021Bia nu se aplic\u0103 oric\u0103rei forme de persuasiune sau influen\u021B\u0103. Pragul este relativ ridicat: manipularea trebuie s\u0103 distorsioneze material comportamentul \u0219i s\u0103 duc\u0103 la prejudicii semnificative.',
                    },
                ],
            },
            {
                heading: 'Articolul 5(1)(b): Exploatarea vulnerabilit\u0103\u021Bilor',
                paragraphs: [
                    'A doua practic\u0103 interzis\u0103 se concentreaz\u0103 pe sistemele AI care exploateaz\u0103 grupurile vulnerabile.',
                    'Aici, manipularea nu opereaz\u0103 prin tehnici ascunse. \u00CEn schimb, sistemul vizeaz\u0103 inten\u021Bionat persoane care sunt mai susceptibile la influen\u021B\u0103 datorit\u0103 anumitor caracteristici.',
                    'Articolul 5(1)(b) se aplic\u0103 atunci c\u00E2nd un sistem AI exploateaz\u0103 vulnerabilit\u0103\u021Bi legate de v\u00E2rst\u0103, dizabilitate sau situa\u021Bie social\u0103 sau economic\u0103, distorsioneaz\u0103 material comportamentul \u0219i cauzeaz\u0103 sau este probabil s\u0103 cauzeze prejudicii semnificative.',
                    'Regulamentul identific\u0103 trei categorii de grupuri protejate:',
                ],
                bullets: [
                    { bold: 'Vulnerabilit\u0103\u021Bi legate de v\u00E2rst\u0103', text: ' \u2014 Aceasta include at\u00E2t copiii, c\u00E2t \u0219i persoanele \u00EEn v\u00E2rst\u0103.' },
                    { bold: 'Dizabilit\u0103\u021Bi', text: ' \u2014 Limit\u0103ri fizice, cognitive sau psihologice care afecteaz\u0103 capacitatea de decizie.' },
                    { bold: 'Situa\u021Bii sociale sau economice specifice', text: ' \u2014 De exemplu, persoane care se confrunt\u0103 cu dificult\u0103\u021Bi financiare sau marginalizare social\u0103.' },
                ],
                afterBullets: [
                    'Logica de baz\u0103 este simpl\u0103: unele grupuri au o capacitate redus\u0103 de a recunoa\u0219te sau de a rezista practicilor manipulative \u0219i necesit\u0103 prin urmare o protec\u021Bie suplimentar\u0103.',
                ],
            },
            {
                heading: 'Pragul practic: \u201EPrejudicii semnificative\u201D',
                paragraphs: [
                    'Un element critic comun ambelor interdic\u021Bii este cerin\u021Ba de prejudicii semnificative.',
                    'AI Act nu interzice manipularea sau exploatarea \u00EEn abstract. \u00CEn schimb, se concentreaz\u0103 pe situa\u021Biile \u00EEn care aceste practici sunt susceptibile s\u0103 produc\u0103 consecin\u021Be negative grave.',
                    'Prejudiciul poate fi fizic, psihologic, financiar sau social\u2014afect\u00E2nd grupuri sau comunit\u0103\u021Bi.',
                    'Din cauza acestei cerin\u021Be, aplicarea Articolului 5 va depinde adesea de evalu\u0103ri de la caz la caz efectuate de autorit\u0103\u021Bi sau instan\u021Be. Ghidurile Comisiei subliniaz\u0103 explicit c\u0103 exemplele oferite sunt orientative \u0219i c\u0103 autorit\u0103\u021Bile de aplicare trebuie s\u0103 evalueze fiecare situa\u021Bie individual.',
                ],
            },
            {
                heading: 'Exemple privind Articolul 5(1)(a): Manipulare d\u0103un\u0103toare \u0219i \u00EEn\u0219el\u0103ciune',
                subheadings: [
                    {
                        label: 'Exemple care cad probabil sub interdic\u021Bie',
                        paragraphs: [
                            'O aplica\u021Bie mobil\u0103 bazat\u0103 pe AI \u00EEncorporeaz\u0103 subtil cadre vizuale care promoveaz\u0103 anumite platforme de jocuri de noroc \u00EEn timpul red\u0103rii video. Aceste cadre apar prea scurt pentru detec\u021Bia con\u0219tient\u0103, dar sunt proiectate s\u0103 influen\u021Beze atitudinile utilizatorilor fa\u021B\u0103 de serviciile de jocuri de noroc. Dac\u0103 astfel de indicii subliminale distorsioneaz\u0103 material comportamentul utilizatorilor \u0219i contribuie la decizii financiare d\u0103un\u0103toare, sistemul poate intra sub inciden\u021Ba Articolului 5(1)(a).',
                            'Un alt exemplu ar putea implica un asistent AI care deformeaz\u0103 deliberat consecin\u021Bele unui produs financiar pentru a \u00EEmpinge utilizatorii s\u0103-l cumpere. Dac\u0103 sistemul utilizeaz\u0103 tehnici \u00EEn\u0219el\u0103toare care afecteaz\u0103 semnificativ capacitatea utilizatorului de a lua o decizie informat\u0103 \u2014 de exemplu ascunz\u00E2nd sistematic riscurile \u00EEn timp ce eviden\u021Biaz\u0103 beneficii fabricate \u2014 aceasta ar putea constitui manipulare interzis\u0103.',
                            'Similar, un sistem AI utilizat pe platforme online ar putea combina profilarea comportamental\u0103 cu stimuli psihologic manipulativi proiecta\u021Bi s\u0103 preseze utilizatorii s\u0103 ia ac\u021Biuni d\u0103un\u0103toare, cum ar fi cheltuieli excesive sau investi\u021Bii riscante.',
                        ],
                    },
                    {
                        label: 'Exemple care \u00EEn general nu sunt interzise',
                        paragraphs: [
                            'Multe sisteme AI influen\u021Beaz\u0103 comportamentul f\u0103r\u0103 a dep\u0103\u0219i pragul stabilit de Articolul 5(1)(a). Sistemele de recomandare care sugereaz\u0103 produse pe baza achizi\u021Biilor anterioare sau platformele de streaming care recomand\u0103 con\u021Binut adaptat preferin\u021Belor utilizatorilor nu constituie \u00EEn general manipulare interzis\u0103. De\u0219i aceste sisteme \u00EEncearc\u0103 s\u0103 influen\u021Beze comportamentul, ele opereaz\u0103 de obicei transparent \u0219i nu ocolesc procesele de decizie con\u0219tient\u0103 ale utilizatorului.',
                            'Similar, sistemele AI conver\u021Bionale pot produce ocazional informa\u021Bii inexacte sau \u00EEn\u0219el\u0103toare din cauza limit\u0103rilor tehnice. Conform ghidurilor Comisiei, astfel de rezultate nu se calific\u0103 automat ca tehnici \u00EEn\u0219el\u0103toare atunci c\u00E2nd furnizorul a comunicat clar limit\u0103rile sistemului \u0219i a implementat m\u0103suri de protec\u021Bie.',
                        ],
                    },
                ],
            },
            {
                heading: 'Exemple privind Articolul 5(1)(b): Exploatarea vulnerabilit\u0103\u021Bilor',
                subheadings: [
                    {
                        label: 'Exemple care cad probabil sub interdic\u021Bie',
                        paragraphs: [
                            'Lua\u021Bi \u00EEn considerare un joc bazat pe AI proiectat pentru copii care adapteaz\u0103 dinamic structurile de recompens\u0103 pentru a \u00EEncuraja comportamente din ce \u00EEn ce mai riscante. Dac\u0103 sistemul analizeaz\u0103 r\u0103spunsurile comportamentale ale copiilor \u0219i \u00EEi \u00EEmpinge deliberat c\u0103tre ac\u021Biuni fizice periculoase pentru a prelungi implicarea, poate fi considerat c\u0103 exploateaz\u0103 vulnerabilit\u0103\u021Bi legate de v\u00E2rst\u0103.',
                            'Un alt exemplu ar putea implica un serviciu financiar bazat pe AI care vizeaz\u0103 persoane \u00EEn dificultate financiar\u0103 sever\u0103. Dac\u0103 sistemul identific\u0103 utilizatorii economic vulnerabili \u0219i promoveaz\u0103 agresiv produse financiare cu risc ridicat \u2014 cum ar fi \u00EEmprumuturi pr\u0103dalnice sau investi\u021Bii speculative \u2014 exploat\u00E2ndu-le situa\u021Bia precar\u0103, aceasta ar putea constitui exploatare conform Articolului 5(1)(b).',
                        ],
                    },
                    {
                        label: 'Exemple care \u00EEn general nu sunt interzise',
                        paragraphs: [
                            'Nu orice sistem AI care interac\u021Bioneaz\u0103 cu grupuri vulnerabile intr\u0103 sub interdic\u021Bie. Instrumentele de \u00EEnv\u0103\u021Bare bazate pe AI proiectate s\u0103 ajute copiii s\u0103-\u0219i \u00EEmbun\u0103t\u0103\u021Beasc\u0103 abilitele de citire, de exemplu, pot personaliza exerci\u021Biile pe baza datelor comportamentale. Astfel de sisteme nu exploateaz\u0103 vulnerabilit\u0103\u021Bile dac\u0103 scopul lor este sus\u021Binerea educa\u021Bional\u0103 \u0219i sunt proiectate s\u0103 promoveze bunst\u0103rea utilizatorului.',
                            'Similar, asisiten\u021Bii AI dezvolta\u021Bi pentru a sprijini persoanele v\u00E2rstnice \u2014 de exemplu reamintindu-le s\u0103 ia medicamente sau ajut\u00E2ndu-le s\u0103 navigheze serviciile digitale \u2014 cad de obicei \u00EEn afara domeniului Articolului 5(1)(b), deoarece vizeaz\u0103 atenuarea vulnerabilit\u0103\u021Bilor, nu exploatarea lor.',
                            'Tehnologiile asistive pentru persoanele cu dizabilit\u0103\u021Bi, inclusiv protezele activate de AI, instrumentele de accesibilitate sau sistemele de generare a vorbirii, ilustreaz\u0103 de asemenea cum AI poate fi implementat specific pentru a \u00EEmputernici persoanele vulnerabile.',
                        ],
                    },
                ],
            },
            {
                heading: 'De ce conteaz\u0103 aceste interdic\u021Bii pentru constructorii de AI',
                paragraphs: [
                    'Pentru fondatori \u0219i echipele de produs, implica\u021Biile sunt relativ clare.',
                    'Primele dou\u0103 interdic\u021Bii din Articolul 5 stabilesc efectiv limite de proiectare pentru sistemele AI care interac\u021Bioneaz\u0103 cu oamenii.',
                    '\u00CEn practic\u0103, aceasta \u00EEnseamn\u0103 c\u0103 echipele care dezvolt\u0103 produse AI ar trebui s\u0103 evite:',
                ],
                bullets: [
                    { bold: '', text: 'Mecanisme de manipulare comportamental\u0103 proiectate s\u0103 ocoleasc\u0103 procesele de decizie con\u0219tient\u0103' },
                    { bold: '', text: 'Arhitecturi de sistem care exploateaz\u0103 inten\u021Bionat vulnerabilit\u0103\u021Bile psihologice' },
                    { bold: '', text: 'Strategii de targetare vizate c\u0103tre grupuri vulnerabile \u00EEn moduri care ar putea produce rezultate d\u0103un\u0103toare' },
                ],
                afterBullets: [
                    'Aceste probleme se intersecteaz\u0103 din ce \u00EEn ce mai mult cu designul de produs, analitica comportamental\u0103 \u0219i arhitectura sistemelor de recomandare, ceea ce \u00EEnseamn\u0103 c\u0103 riscul juridic este adesea \u00EEncorporat direct \u00EEn alegerile de design ale sistemului.',
                    'Din perspectiva guvernan\u021Bei, aceste interdic\u021Bii nu sunt doar obliga\u021Bii de conformitate. Ele func\u021Bioneaz\u0103 ca linii ro\u0219ii pentru dezvoltarea produselor AI pe pia\u021Ba european\u0103.',
                ],
            },
            {
                heading: 'G\u00E2nd final',
                paragraphs: [
                    'Regimul practicilor interzise ilustreaz\u0103 filozofia mai larg\u0103 din spatele EU AI Act.',
                    'Mai degrab\u0103 dec\u00E2t s\u0103 reglementeze fiecare risc posibil prin obliga\u021Bii de conformitate, regulamentul traseaz\u0103 o limit\u0103 clar\u0103 \u00EEn jurul unui num\u0103r mic de practici care sunt considerate fundamental incompatibile cu abordarea UE fa\u021B\u0103 de AI centrat pe om.',
                    'Urm\u0103toarea edi\u021Bie The AI Act Guy va continua examinarea practicilor interzise r\u0103mase din Articolul 5, concentr\u00E2ndu-se pe scoring social \u0219i poli\u021Bie predictiv\u0103.',
                ],
            },
        ],
    },
};

type SubItem = { bold: string; text: string };
type Subheading = {
    label: string;
    text?: string;
    items?: SubItem[];
    after?: string;
    paragraphs?: string[];
};
type Section = {
    heading: string;
    paragraphs?: string[];
    bullets?: { bold: string; text: string }[];
    afterBullets?: string[];
    subheadings?: Subheading[];
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
                            <div className="prose prose-lg max-w-none mb-6">
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
                            <p className="text-gray-700 leading-relaxed mb-10">{c.introAfter}</p>
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
                                    {section.subheadings?.map((sub: Subheading, si: number) => (
                                        <div key={si} className="mt-6 mb-4">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">{sub.label}</h3>
                                            {sub.text && <p className="text-gray-700 leading-relaxed mb-3">{sub.text}</p>}
                                            {sub.items && (
                                                <ul className="space-y-3 mb-4">
                                                    {sub.items.map((item: SubItem, ii: number) => (
                                                        <li key={ii} className="flex items-start gap-3 text-gray-700">
                                                            <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                            <span><strong>{item.bold}</strong>{item.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {sub.after && <p className="text-gray-700 leading-relaxed mb-3">{sub.after}</p>}
                                            {sub.paragraphs?.map((p: string, pi: number) => (
                                                <p key={pi} className="text-gray-700 leading-relaxed mb-4">{p}</p>
                                            ))}
                                        </div>
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
