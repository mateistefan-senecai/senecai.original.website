'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealAnimation from '@/components/RevealAnimation';
import DottedBackground from '@/components/DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const content = {
    en: {
        title: 'The Prohibited Practices under the AI Act (Part 2): Social Scoring and Predictive Policing',
        date: 'March 17, 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 Back to Resource Hub',
        body: `Hi \u2014 my name is Matei Stefan. I am a legal professional working at the intersection of law, tech and AI, and I welcome you to the fifth edition of The AI Act Guy.

In the previous article, I introduced the first category of prohibited AI practices under the EU AI Act. These are systems considered so harmful to fundamental rights that the Regulation does not attempt to regulate them \u2014 it bans them outright.

This edition focuses on the next two prohibitions contained in Article 5 of the AI Act:`,
        introBullets: [
            { bold: 'Article 5(1)(c):', text: ' Social Scoring' },
            { bold: 'Article 5(1)(d):', text: ' Predictive Policing' },
        ],
        introAfter: 'Both prohibitions sit at the intersection of AI governance, fundamental rights, and public authority powers. They reflect the EU\u2019s attempt to prevent algorithmic systems from being used as instruments of systemic social control or speculative criminal justice.\n\nAs with the previous article, this analysis draws heavily on the European Commission\u2019s Guidelines on Prohibited AI Practices, which provide interpretative guidance on how regulators will likely approach these provisions.',
        sections: [
            {
                heading: 'Social Scoring',
                paragraphs: [
                    'The first prohibition concerns AI-enabled social scoring.',
                    'In simple terms, the AI Act prohibits the use of AI systems to evaluate or classify individuals based on their social behaviour or personal characteristics over time, where the resulting score leads to detrimental treatment.',
                    'The concept is often associated with state-run social credit systems \u2014 most notably systems experimented with in China, where behavioural data can influence access to transport, credit, or public services. The EU prohibition should not be understood as targeting a specific foreign system, but that example illustrates the type of large-scale behavioural governance model the EU legislator intends to prevent.',
                    'Importantly, the prohibition in the AI Act is not limited to public authorities. The Commission guidelines make clear that the rule applies broadly across both public and private contexts.',
                    'To understand when the prohibition applies, the Commission identifies three cumulative elements.',
                ],
                subheadings: [
                    {
                        label: '1. Evaluation or classification over time',
                        paragraphs: [
                            'First, an AI system must evaluate or classify individuals or groups over a period of time based on their social behaviour, or known, inferred or predicted personal characteristics.',
                            'This requirement captures systems that aggregate behavioural signals \u2014 potentially from multiple sources \u2014 in order to produce a behavioural or reputational score.',
                        ],
                    },
                    {
                        label: '2. The creation of a \u201Csocial score\u201D',
                        paragraphs: [
                            'Second, the AI system must generate a score or classification that plays a meaningful role in decision-making.',
                            'The Commission guidelines emphasise that the AI system does not need to be the sole driver of the final decision. A system can still fall within the prohibition even if human assessment is involved, provided the AI-generated score plays a sufficiently important role in producing the final outcome.',
                        ],
                    },
                    {
                        label: '3. Detrimental or disproportionate treatment',
                        paragraphs: [
                            'Finally, the score must lead \u2014 or be capable of leading \u2014 to detrimental or unfavourable treatment of individuals or groups.',
                            'The AI Act identifies two scenarios in which this condition is met:',
                        ],
                        bullets: [
                            { bold: 'Cross-context punishment:', text: ' The score leads to adverse treatment in a social context unrelated to the context in which the behavioural data was collected.' },
                            { bold: 'Disproportionate consequences:', text: ' The treatment imposed is unjustified or disproportionate relative to the underlying behaviour.' },
                        ],
                        after: 'Only when all three conditions are fulfilled does the prohibition apply.',
                    },
                ],
            },
            {
                heading: 'The Rationale Behind the Social Scoring Ban',
                paragraphs: [
                    'The Commission\u2019s reasoning is fundamentally grounded in fundamental rights protection.',
                    'AI-enabled social scoring systems risk enabling forms of automated social control, where behavioural data collected in one context may influence access to opportunities in another. This can lead to discriminatory outcomes, social exclusion, and the erosion of privacy and dignity.',
                    'The prohibition therefore targets systemic behavioural surveillance combined with algorithmic punishment.',
                    'However, it is equally important to understand what the prohibition does not cover.',
                    'Many evaluation systems remain lawful when they serve legitimate and clearly defined purposes grounded in EU or national law. Examples include creditworthiness assessments, fraud detection, or compliance checks where the evaluation is limited to a specific regulatory objective and proportionate to that purpose.',
                    'In other words, the AI Act does not prohibit all scoring systems \u2014 it prohibits scoring systems that operate as generalised behavioural governance mechanisms.',
                ],
            },
            {
                heading: 'Predictive Policing',
                paragraphs: [
                    'The second prohibition \u2014 contained in Article 5(1)(d) \u2014 concerns AI systems used to predict the likelihood that a person will commit a criminal offence.',
                    'Predictive analytics in law enforcement is not new. For decades, statistical models have been used to support crime prevention strategies.',
                    'What the AI Act targets is a very specific form of predictive policing: systems that assess the risk of a person committing a crime solely based on profiling or personality characteristics.',
                    'The concept is sometimes illustrated through the science fiction example popularised by the film Minority Report, where individuals are identified as future criminals before any offence actually occurs. While real-world systems are far less deterministic, the analogy captures the core concern: predicting criminal behaviour based primarily on algorithmic inference rather than concrete evidence.',
                    'The Commission guidelines clarify that these systems typically rely on historical crime data, behavioural indicators, or demographic proxies to forecast an individual\u2019s likelihood of future offending.',
                    'The concern is that such systems may replicate historical biases or draw conclusions about individuals based on statistical correlations rather than concrete evidence.',
                ],
            },
            {
                heading: 'What the Predictive Policing Prohibition Actually Covers',
                paragraphs: [
                    'A common misconception is that the AI Act bans predictive policing altogether. That is not the case.',
                    'The prohibition is narrower than it appears. It applies only to AI systems that:',
                ],
                bullets: [
                    { bold: '', text: 'Assess the risk of a specific individual committing a criminal offence' },
                    { bold: '', text: 'Rely primarily on profiling or behavioural characteristics' },
                    { bold: '', text: 'Produce forward-looking predictions about future criminal activity' },
                ],
                afterBullets: [
                    'These assessments are typically prospective, attempting to anticipate crimes that have not yet occurred. The key issue is the reliance on algorithmic inference about a person\u2019s propensity for criminal behaviour.',
                ],
            },
            {
                heading: 'Important Exceptions and Clarifications',
                paragraphs: [
                    'The Commission guidelines highlight several situations that fall outside the prohibition.',
                ],
                subheadings: [
                    {
                        label: 'Location-based predictive policing',
                        paragraphs: [
                            'Systems that predict crime risks in specific locations rather than individuals remain outside the scope of the ban.',
                            'For example, AI tools that analyse crime statistics to estimate the probability of burglary in certain neighbourhoods and guide police patrol allocation are not considered prohibited practices. These systems operate at the geographical level, not at the level of individual profiling.',
                        ],
                    },
                    {
                        label: 'Systems supporting investigations based on concrete evidence',
                        paragraphs: [
                            'The prohibition also does not apply where AI systems support human assessments based on objective and verifiable facts linked to an actual criminal activity.',
                            'For example, AI tools that help analyse evidence in an ongoing investigation or assist investigators in evaluating factual indicators related to a specific case may remain lawful.',
                        ],
                    },
                    {
                        label: 'Compliance with legal obligations',
                        paragraphs: [
                            'Certain predictive assessments may also fall outside the prohibition where private entities are required by law to perform risk screening.',
                            'A typical example is anti-money laundering compliance, where financial institutions must assess the likelihood that a customer may be involved in financial crime using objective indicators defined by law.',
                        ],
                    },
                ],
            },
            {
                heading: 'Examples: What Is Inside vs Outside the Scope',
                paragraphs: [
                    'As with many provisions in the AI Act, the boundary between permitted and prohibited uses depends heavily on how the system is designed and deployed.',
                ],
                subheadings: [
                    {
                        label: 'Likely inside the prohibition',
                        sublabel: 'Social scoring:',
                        bullets: [
                            { bold: '', text: 'A platform aggregates data from social media activity, purchasing behaviour, and online interactions to generate a \u201Ctrustworthiness score,\u201D which is then used by multiple companies to determine access to housing or financial services.' },
                            { bold: '', text: 'A public authority creates a behavioural score combining traffic violations, administrative fines, and social media behaviour, and uses that score to determine eligibility for certain public services.' },
                        ],
                        sublabel2: 'Predictive policing:',
                        bullets2: [
                            { bold: '', text: 'A police department deploys an AI system that ranks citizens according to their likelihood of committing a crime based on past behaviour, demographic data, and associations with other individuals flagged in the system.' },
                            { bold: '', text: 'A risk scoring tool predicts the probability that specific individuals will commit future offences based primarily on behavioural profiling.' },
                        ],
                    },
                    {
                        label: 'Likely outside the prohibition',
                        sublabel: 'Social scoring:',
                        bullets: [
                            { bold: '', text: 'A bank evaluates the creditworthiness of a customer using financial data for the purpose of granting a loan.' },
                            { bold: '', text: 'A platform detects fraud or abusive behaviour within its own service in order to enforce platform rules.' },
                        ],
                        sublabel2: 'Predictive policing:',
                        bullets2: [
                            { bold: '', text: 'A police department uses AI models to identify geographical crime hotspots in order to allocate patrol resources.' },
                            { bold: '', text: 'Investigators use AI to analyse evidence and support a human assessment of whether a suspect is involved in a specific criminal activity based on objective facts.' },
                        ],
                    },
                ],
            },
            {
                heading: 'Practical Implications for Companies',
                paragraphs: [
                    'Although these prohibitions are primarily associated with public sector deployments, private companies should not assume they are irrelevant.',
                    'The AI Act applies to providers placing systems on the EU market as well as deployers using them in practice.',
                    'For companies building AI systems, several implications follow.',
                ],
                bullets: [
                    { bold: 'Behavioural scoring models must be carefully scoped:', text: ' Systems that aggregate behavioural signals across contexts \u2014 particularly those combining data from multiple sources \u2014 should be assessed carefully to ensure they do not evolve into prohibited social scoring mechanisms.' },
                    { bold: 'Risk scoring linked to criminal behaviour requires a legal basis:', text: ' If a system attempts to predict the likelihood of criminal activity, its design must be tied to specific legal obligations and objective indicators, rather than speculative behavioural inference.' },
                    { bold: 'The boundary between analytics and prohibited profiling is not always obvious:', text: ' Certain architectures \u2014 particularly systems combining geospatial crime prediction with individual profiling \u2014 may move into prohibited territory depending on how outputs are used.' },
                ],
                afterBullets: [
                    'For this reason, early legal classification of AI systems is essential during the design phase.',
                ],
            },
            {
                heading: 'Final Thought',
                paragraphs: [
                    'The prohibitions examined in this article illustrate an important boundary within the AI Act. Most of the Regulation operates through risk management: identifying potentially harmful uses of AI and imposing safeguards designed to mitigate those risks. Article 5 is different. Here, the legislator concluded that certain applications of AI are incompatible with the Union\u2019s fundamental rights framework, regardless of how carefully they might be implemented.',
                    'Both social scoring and certain forms of predictive policing fall into that category. Systems that classify individuals based on behavioural data across contexts, or that attempt to predict criminal behaviour based primarily on profiling, raise structural concerns that go beyond technical risk mitigation. For organisations developing AI systems, recognising this boundary early is essential: these are not systems that can be made compliant through additional safeguards \u2014 they are systems that cannot be deployed in the EU market at all.',
                    'In the next edition of The AI Act Guy, I will examine the next two practices under Article 5: untargeted scraping of facial images from the internet or CCTV footage and emotion recognition in areas of workplace and education.',
                ],
            },
        ],
    },
    ro: {
        title: 'Practicile interzise sub AI Act (Partea 2): Scoring social \u0219i poli\u021Bie predictiv\u0103',
        date: '17 martie 2026',
        author: 'Matei \u0218tefan',
        backLabel: '\u2190 \u00CEnapoi la Hub-ul de Resurse',
        body: `Bun\u0103 \u2014 m\u0103 numesc Matei Stefan. Sunt un profesionist juridic care lucreaz\u0103 la intersec\u021Bia dintre drept, tehnologie \u0219i AI, \u0219i v\u0103 bine\u00EEntampin la a cincea edi\u021Bie The AI Act Guy.

\u00CEn articolul anterior, am introdus prima categorie de practici AI interzise sub EU AI Act. Acestea sunt sisteme considerate at\u00E2t de d\u0103un\u0103toare drepturilor fundamentale \u00EEnc\u00E2t Regulamentul nu \u00EEncearc\u0103 s\u0103 le reglementeze \u2014 le interzice complet.

Aceast\u0103 edi\u021Bie se concentreaz\u0103 pe urm\u0103toarele dou\u0103 interdic\u021Bii din Articolul 5 al AI Act:`,
        introBullets: [
            { bold: 'Articolul 5(1)(c):', text: ' Scoring social' },
            { bold: 'Articolul 5(1)(d):', text: ' Poli\u021Bie predictiv\u0103' },
        ],
        introAfter: 'Ambele interdic\u021Bii se afl\u0103 la intersec\u021Bia guvernan\u021Bei AI, drepturilor fundamentale \u0219i puterilor autorit\u0103\u021Bilor publice. Ele reflect\u0103 \u00EEncercarea UE de a preveni utilizarea sistemelor algoritmice ca instrumente de control social sistemic sau justi\u021Bie penal\u0103 speculativ\u0103.\n\nCa \u0219i \u00EEn articolul anterior, aceast\u0103 analiz\u0103 se bazeaz\u0103 \u00EEn mare m\u0103sur\u0103 pe Ghidurile Comisiei Europene privind Practicile AI Interzise, care ofer\u0103 orient\u0103ri interpretative despre cum vor aborda probabil autorit\u0103\u021Bile aceste prevederi.',
        sections: [
            {
                heading: 'Scoring social',
                paragraphs: [
                    'Prima interdic\u021Bie prive\u0219te scoring-ul social activat de AI.',
                    'Pe scurt, AI Act interzice utilizarea sistemelor AI pentru a evalua sau clasifica persoane pe baza comportamentului lor social sau a caracteristicilor personale \u00EEn timp, atunci c\u00E2nd scorul rezultat duce la tratament defavorabil.',
                    'Conceptul este adesea asociat cu sistemele de credit social gestionate de stat \u2014 \u00EEn special sistemele experimentate \u00EEn China, unde datele comportamentale pot influen\u021Ba accesul la transport, credit sau servicii publice. Interdic\u021Bia UE nu trebuie \u00EEn\u021Eleas\u0103 ca vizand un sistem str\u0103in specific, dar acel exemplu ilustreaz\u0103 tipul de model de guvernan\u021B\u0103 comportamental\u0103 la scar\u0103 larg\u0103 pe care legiuitorul UE inten\u021Bioneaz\u0103 s\u0103-l previn\u0103.',
                    'Important, interdic\u021Bia din AI Act nu se limiteaz\u0103 la autorit\u0103\u021Bile publice. Ghidurile Comisiei clarific\u0103 c\u0103 regula se aplic\u0103 \u00EEn general at\u00E2t \u00EEn contexte publice, c\u00E2t \u0219i private.',
                    'Pentru a \u00EEn\u021Belege c\u00E2nd se aplic\u0103 interdic\u021Bia, Comisia identific\u0103 trei elemente cumulative.',
                ],
                subheadings: [
                    {
                        label: '1. Evaluare sau clasificare \u00EEn timp',
                        paragraphs: [
                            '\u00CEn primul r\u00E2nd, un sistem AI trebuie s\u0103 evalueze sau s\u0103 clasifice persoane sau grupuri pe o perioad\u0103 de timp pe baza comportamentului lor social sau a caracteristicilor personale cunoscute, infer\u0103nte sau prezise.',
                            'Aceast\u0103 cerin\u021B\u0103 captureaz\u0103 sistemele care agreg\u0103 semnale comportamentale \u2014 poten\u021Bial din mai multe surse \u2014 pentru a produce un scor comportamental sau de reputa\u021Bie.',
                        ],
                    },
                    {
                        label: '2. Crearea unui \u201Escor social\u201D',
                        paragraphs: [
                            '\u00CEn al doilea r\u00E2nd, sistemul AI trebuie s\u0103 genereze un scor sau o clasificare care joac\u0103 un rol semnificativ \u00EEn procesul de decizie.',
                            'Ghidurile Comisiei subliniaz\u0103 c\u0103 sistemul AI nu trebuie s\u0103 fie singurul factor al deciziei finale. Un sistem poate \u00EEnc\u0103 intra sub interdic\u021Bie chiar dac\u0103 este implicat\u0103 o evaluare uman\u0103, cu condi\u021Bia ca scorul generat de AI s\u0103 joace un rol suficient de important \u00EEn producerea rezultatului final.',
                        ],
                    },
                    {
                        label: '3. Tratament defavorabil sau dispropor\u021Bionat',
                        paragraphs: [
                            '\u00CEn cele din urm\u0103, scorul trebuie s\u0103 duc\u0103 \u2014 sau s\u0103 fie capabil s\u0103 duc\u0103 \u2014 la tratament defavorabil al persoanelor sau grupurilor.',
                            'AI Act identific\u0103 dou\u0103 scenarii \u00EEn care aceast\u0103 condi\u021Bie este \u00EEndeplinit\u0103:',
                        ],
                        bullets: [
                            { bold: 'Pedeaps\u0103 trans-contextual\u0103:', text: ' Scorul duce la tratament advers \u00EEntr-un context social nerelevant fa\u021B\u0103 de contextul \u00EEn care datele comportamentale au fost colectate.' },
                            { bold: 'Consecin\u021Be dispropor\u021Bionate:', text: ' Tratamentul impus este nejustificat sau dispropor\u021Bionat fa\u021B\u0103 de comportamentul de baz\u0103.' },
                        ],
                        after: 'Numai c\u00E2nd toate trei condi\u021Biile sunt \u00EEndeplinite se aplic\u0103 interdic\u021Bia.',
                    },
                ],
            },
            {
                heading: 'Ra\u021Biunea din spatele interdic\u021Biei scoring-ului social',
                paragraphs: [
                    'Ra\u021Bionamentul Comisiei este fundamental \u00EEnr\u0103d\u0103cinat \u00EEn protec\u021Bia drepturilor fundamentale.',
                    'Sistemele de scoring social activate de AI risc\u0103 s\u0103 permit\u0103 forme de control social automatizat, unde datele comportamentale colectate \u00EEntr-un context pot influen\u021Ba accesul la oportunita\u021Bi \u00EEn altul. Aceasta poate duce la rezultate discriminatorii, excludere social\u0103 \u0219i erodarea intimit\u0103\u021Bii \u0219i demnit\u0103\u021Bii.',
                    'Interdic\u021Bia vizeaz\u0103 prin urmare supravegherea comportamental\u0103 sistemic\u0103 combinat\u0103 cu pedeapsa algoritmic\u0103.',
                    'Cu toate acestea, este la fel de important s\u0103 \u00EEn\u021Belegem ce nu acoper\u0103 interdic\u021Bia.',
                    'Multe sisteme de evaluare r\u0103m\u00E2n legale atunci c\u00E2nd servesc scopuri legitime \u0219i clar definite \u00EEntemeiate pe dreptul UE sau na\u021Bional. Exemplele includ evalu\u0103rile de bonitate, detectarea fraudei sau verific\u0103rile de conformitate unde evaluarea este limitat\u0103 la un obiectiv de reglementare specific \u0219i propor\u021Bional cu acel scop.',
                    'Cu alte cuvinte, AI Act nu interzice toate sistemele de scoring \u2014 interzice sistemele de scoring care func\u021Bioneaz\u0103 ca mecanisme generalizate de guvernan\u021B\u0103 comportamental\u0103.',
                ],
            },
            {
                heading: 'Poli\u021Bia predictiv\u0103',
                paragraphs: [
                    'A doua interdic\u021Bie \u2014 con\u021Binut\u0103 \u00EEn Articolul 5(1)(d) \u2014 prive\u0219te sistemele AI utilizate pentru a prezice probabilitatea ca o persoan\u0103 s\u0103 comit\u0103 o infrac\u021Biune.',
                    'Analitica predictiv\u0103 \u00EEn aplicarea legii nu este nou\u0103. Timp de decenii, modelele statistice au fost utilizate pentru a sprijini strategiile de prevenire a criminalit\u0103\u021Bii.',
                    'Ceea ce vizeaz\u0103 AI Act este o form\u0103 foarte specific\u0103 de poli\u021Bie predictiv\u0103: sisteme care evalueaz\u0103 riscul ca o persoan\u0103 s\u0103 comit\u0103 o infrac\u021Biune exclusiv pe baza profil\u0103rii sau caracteristicilor de personalitate.',
                    'Conceptul este uneori ilustrat prin exemplul de science fiction popularizat de filmul Minority Report, unde persoanele sunt identificate ca viitori infractori \u00EEnainte ca vreo infrac\u021Biune s\u0103 aib\u0103 loc de fapt. De\u0219i sistemele din lumea real\u0103 sunt mult mai pu\u021Bin deterministe, analogia surprinde preocuparea de baz\u0103: prezicerea comportamentului infrac\u021Bional bazat\u0103 \u00EEn principal pe inferen\u021B\u0103 algoritmic\u0103 mai degrab\u0103 dec\u00E2t pe probe concrete.',
                    'Ghidurile Comisiei clarific\u0103 c\u0103 aceste sisteme se bazeaz\u0103 de obicei pe date istorice privind criminalitatea, indicatori comportamentali sau proxy-uri demografice pentru a prognoza probabilitatea unui individ de a comite infrac\u021Biuni viitoare.',
                    'Preocuparea este c\u0103 astfel de sisteme pot reproduce p\u0103rtiniri istorice sau pot trage concluzii despre indivizi pe baza corela\u021Biilor statistice mai degrab\u0103 dec\u00E2t a probelor concrete.',
                ],
            },
            {
                heading: 'Ce acoper\u0103 efectiv interdic\u021Bia poli\u021Biei predictive',
                paragraphs: [
                    'O concep\u021Bie gre\u0219it\u0103 comun\u0103 este c\u0103 AI Act interzice poli\u021Bia predictiv\u0103 \u00EEn totalitate. Acesta nu este cazul.',
                    'Interdic\u021Bia este mai restr\u00E2ns\u0103 dec\u00E2t pare. Se aplic\u0103 numai sistemelor AI care:',
                ],
                bullets: [
                    { bold: '', text: 'Evalueaz\u0103 riscul ca un individ specific s\u0103 comit\u0103 o infrac\u021Biune' },
                    { bold: '', text: 'Se bazeaz\u0103 \u00EEn principal pe profilare sau caracteristici comportamentale' },
                    { bold: '', text: 'Produc predicti prognostice despre activitatea infrac\u021Bional\u0103 viitoare' },
                ],
                afterBullets: [
                    'Aceste evalu\u0103ri sunt de obicei prospective, \u00EEncercand s\u0103 anticipeze infrac\u021Biunile care nu au avut \u00EEnc\u0103 loc. Problema cheie este dependen\u021Ba de inferen\u021Ba algoritmic\u0103 privind propensitatea unei persoane pentru comportamentul infrac\u021Bional.',
                ],
            },
            {
                heading: 'Excep\u021Bii \u0219i clarific\u0103ri importante',
                paragraphs: [
                    'Ghidurile Comisiei eviden\u021Biaz\u0103 mai multe situa\u021Bii care cad \u00EEn afara interdic\u021Biei.',
                ],
                subheadings: [
                    {
                        label: 'Poli\u021Bia predictiv\u0103 bazat\u0103 pe loca\u021Bie',
                        paragraphs: [
                            'Sistemele care prezic riscurile de criminalitate \u00EEn loca\u021Bii specifice, mai degrab\u0103 dec\u00E2t indivizi, r\u0103m\u00E2n \u00EEn afara domeniului de aplicare al interdic\u021Biei.',
                            'De exemplu, instrumentele AI care analizeaz\u0103 statistici de criminalitate pentru a estima probabilitatea de furt cu efrac\u021Bie \u00EEn anumite cartiere \u0219i ghideaz\u0103 alocarea patrulelor poli\u021Biei nu sunt considerate practici interzise. Aceste sisteme opereaz\u0103 la nivel geografic, nu la nivelul profil\u0103rii individuale.',
                        ],
                    },
                    {
                        label: 'Sisteme care sprijin\u0103 investiga\u021Biile bazate pe probe concrete',
                        paragraphs: [
                            'Interdic\u021Bia nu se aplic\u0103 nici acolo unde sistemele AI sprijin\u0103 evalu\u0103rile umane bazate pe fapte obiective \u0219i verificabile legate de o activitate infrac\u021Bional\u0103 actual\u0103.',
                            'De exemplu, instrumentele AI care ajut\u0103 la analiza probelor \u00EEntr-o investiga\u021Bie \u00EEn curs sau asist\u0103 investigatorii \u00EEn evaluarea indicatorilor factali rela\u021Biona\u021Bi la un caz specific pot r\u0103m\u00E2ne legale.',
                        ],
                    },
                    {
                        label: 'Conformitatea cu obliga\u021Bii legale',
                        paragraphs: [
                            'Anumite evalu\u0103ri predictive pot c\u0103dea, de asemenea, \u00EEn afara interdic\u021Biei acolo unde entit\u0103\u021Bile private sunt obligate prin lege s\u0103 efectueze screening de risc.',
                            'Un exemplu tipic este conformitatea anti-sp\u0103lare de bani, unde institu\u021Biile financiare trebuie s\u0103 evalueze probabilitatea ca un client s\u0103 fie implicat \u00EEn crim\u0103 financiar\u0103 utiliz\u00E2nd indicatori obiectivi defini\u021Bi de lege.',
                        ],
                    },
                ],
            },
            {
                heading: 'Exemple: Ce intr\u0103 vs. ce nu intr\u0103 sub interdic\u021Bie',
                paragraphs: [
                    'Ca \u0219i \u00EEn cazul multor prevederi din AI Act, grani\u021Ba dintre utiliz\u0103rile permise \u0219i cele interzise depinde \u00EEn mare m\u0103sur\u0103 de modul \u00EEn care sistemul este proiectat \u0219i implementat.',
                ],
                subheadings: [
                    {
                        label: 'Probabil sub interdic\u021Bie',
                        sublabel: 'Scoring social:',
                        bullets: [
                            { bold: '', text: 'O platform\u0103 agreg\u0103 date din activitatea pe re\u021Bele sociale, comportamentul de cump\u0103rare \u0219i interac\u021Biunile online pentru a genera un \u201Escor de \u00EEncredere,\u201D care este apoi utilizat de mai multe companii pentru a determina accesul la locuin\u021Be sau servicii financiare.' },
                            { bold: '', text: 'O autoritate public\u0103 creeaz\u0103 un scor comportamental care combin\u0103 contraven\u021Bii rutiere, amenzi administrative \u0219i comportamentul pe re\u021Belele sociale, \u0219i utilizeaz\u0103 acel scor pentru a determina eligibilitatea pentru anumite servicii publice.' },
                        ],
                        sublabel2: 'Poli\u021Bie predictiv\u0103:',
                        bullets2: [
                            { bold: '', text: 'Un departament de poli\u021Bie implementeaz\u0103 un sistem AI care clasific\u0103 cet\u0103\u021Benii dup\u0103 probabilitatea lor de a comite o infrac\u021Biune pe baza comportamentului trecut, datelor demografice \u0219i asocierilor cu al\u021Bi indivizi semnala\u021Bi \u00EEn sistem.' },
                            { bold: '', text: 'Un instrument de scoring al riscului prezice probabilitatea ca indivizi specifici s\u0103 comit\u0103 infrac\u021Biuni viitoare bazat\u0103 \u00EEn principal pe profilare comportamental\u0103.' },
                        ],
                    },
                    {
                        label: 'Probabil \u00EEn afara interdic\u021Biei',
                        sublabel: 'Scoring social:',
                        bullets: [
                            { bold: '', text: 'O banc\u0103 evalueaz\u0103 bonitatea unui client utiliz\u00E2nd date financiare \u00EEn scopul acord\u0103rii unui \u00EEmprumut.' },
                            { bold: '', text: 'O platform\u0103 detecteaz\u0103 frauda sau comportamentul abuziv \u00EEn propriul serviciu pentru a aplica regulile platformei.' },
                        ],
                        sublabel2: 'Poli\u021Bie predictiv\u0103:',
                        bullets2: [
                            { bold: '', text: 'Un departament de poli\u021Bie utilizeaz\u0103 modele AI pentru a identifica zonele geografice cu criminalitate ridicat\u0103 \u00EEn vederea alocarii resurselor de patrulare.' },
                            { bold: '', text: 'Investigatorii utilizeaz\u0103 AI pentru a analiza probe \u0219i a sprijini o evaluare uman\u0103 cu privire la implicarea unui suspect \u00EEntr-o activitate infrac\u021Bional\u0103 specific\u0103 pe baza faptelor obiective.' },
                        ],
                    },
                ],
            },
            {
                heading: 'Implica\u021Bii practice pentru companii',
                paragraphs: [
                    'De\u0219i aceste interdic\u021Bii sunt asociate \u00EEn principal cu implement\u0103rile din sectorul public, companiile private nu ar trebui s\u0103 presupun\u0103 c\u0103 sunt irelevante.',
                    'AI Act se aplic\u0103 furnizorilor care plaseaz\u0103 sisteme pe pia\u021Ba UE, precum \u0219i operatorilor care le utilizeaz\u0103 \u00EEn practic\u0103.',
                    'Pentru companiile care construiesc sisteme AI, urmeaz\u0103 mai multe implica\u021Bii.',
                ],
                bullets: [
                    { bold: 'Modelele de scoring comportamental trebuie delimitate cu aten\u021Bie:', text: ' Sistemele care agreg\u0103 semnale comportamentale \u00EEn diverse contexte \u2014 \u00EEn special cele care combin\u0103 date din mai multe surse \u2014 ar trebui evaluate cu aten\u021Bie pentru a se asigura c\u0103 nu evolueaz\u0103 \u00EEn mecanisme de scoring social interzise.' },
                    { bold: 'Scoring-ul de risc legat de comportamentul infrac\u021Bional necesit\u0103 o baz\u0103 juridic\u0103:', text: ' Dac\u0103 un sistem \u00EEncearc\u0103 s\u0103 prezic\u0103 probabilitatea activit\u0103\u021Bii infrac\u021Bionale, designul s\u0103u trebuie s\u0103 fie legat de obliga\u021Bii legale specifice \u0219i indicatori obiectivi, nu de inferen\u021B\u0103 comportamental\u0103 speculativ\u0103.' },
                    { bold: 'Grani\u021Ba dintre analitic\u0103 \u0219i profilarea interzis\u0103 nu este \u00EEntotdeauna evident\u0103:', text: ' Anumite arhitecturi \u2014 \u00EEn special sistemele care combin\u0103 prezicerea criminalit\u0103\u021Bii geospa\u021Biale cu profilarea individual\u0103 \u2014 pot intra \u00EEn teritoriul interzis \u00EEn func\u021Bie de modul \u00EEn care sunt utilizate rezultatele.' },
                ],
                afterBullets: [
                    'Din acest motiv, clasificarea juridic\u0103 timpurie a sistemelor AI este esen\u021Bial\u0103 \u00EEn faza de proiectare.',
                ],
            },
            {
                heading: 'G\u00E2nd final',
                paragraphs: [
                    'Interdic\u021Biile examinate \u00EEn acest articol ilustreaz\u0103 o limit\u0103 important\u0103 \u00EEn cadrul AI Act. Cea mai mare parte a Regulamentului func\u021Bioneaz\u0103 prin managementul riscului: identificarea utiliz\u0103rilor poten\u021Bial d\u0103un\u0103toare ale AI \u0219i impunerea de m\u0103suri de protec\u021Bie menite s\u0103 atenueze acele riscuri. Articolul 5 este diferit. Aici, legiuitorul a concluzionat c\u0103 anumite aplica\u021Bii ale AI sunt incompatibile cu cadrul drepturilor fundamentale al Uniunii, indiferent de c\u00E2t de atent ar putea fi implementate.',
                    'At\u00E2t scoring-ul social, c\u00E2t \u0219i anumite forme de poli\u021Bie predictiv\u0103 intr\u0103 \u00EEn aceast\u0103 categorie. Sistemele care clasific\u0103 indivizii pe baza datelor comportamentale \u00EEn diverse contexte sau care \u00EEncearc\u0103 s\u0103 prezic\u0103 comportamentul infrac\u021Bional bazat\u0103 \u00EEn principal pe profilare ridic\u0103 preocup\u0103ri structurale care dep\u0103\u0219esc atenuarea tehnic\u0103 a riscului. Pentru organiza\u021Biile care dezvolt\u0103 sisteme AI, recunoa\u0219terea timpurie a acestei grani\u021Be este esen\u021Bial\u0103: acestea nu sunt sisteme care pot fi f\u0103cute conforme prin m\u0103suri de protec\u021Bie suplimentare \u2014 sunt sisteme care nu pot fi implementate deloc pe pia\u021Ba UE.',
                    '\u00CEn urm\u0103toarea edi\u021Bie The AI Act Guy, voi examina urm\u0103toarele dou\u0103 practici din Articolul 5: colectarea neorientat\u0103 a imaginilor faciale de pe internet sau din camere CCTV \u0219i recunoa\u0219terea emo\u021Biilor \u00EEn mediile de lucru \u0219i educa\u021Bie.',
                ],
            },
        ],
    },
};

type Bullet = { bold: string; text: string };
type Subheading = {
    label: string;
    paragraphs?: string[];
    bullets?: Bullet[];
    after?: string;
    sublabel?: string;
    sublabel2?: string;
    bullets2?: Bullet[];
};
type Section = {
    heading: string;
    paragraphs?: string[];
    bullets?: Bullet[];
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
                                        <div key={si} className="mt-6 mb-4 pl-4 border-l-2 border-gray-200">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-3">{sub.label}</h3>
                                            {sub.paragraphs?.map((p, pi) => (
                                                <p key={pi} className="text-gray-700 leading-relaxed mb-3">{p}</p>
                                            ))}
                                            {sub.bullets && !sub.sublabel && (
                                                <ul className="space-y-3 mb-3">
                                                    {sub.bullets.map((b, bi) => (
                                                        <li key={bi} className="flex items-start gap-3 text-gray-700">
                                                            <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                            <span>{b.bold ? <><strong>{b.bold}</strong>{b.text}</> : b.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {sub.after && <p className="text-gray-700 leading-relaxed mb-3">{sub.after}</p>}
                                            {sub.sublabel && <p className="text-sm font-semibold text-gray-700 mt-4 mb-2">{sub.sublabel}</p>}
                                            {sub.sublabel && sub.bullets && (
                                                <ul className="space-y-3 mb-3">
                                                    {sub.bullets.map((b, bi) => (
                                                        <li key={bi} className="flex items-start gap-3 text-gray-700">
                                                            <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                            <span>{b.bold ? <><strong>{b.bold}</strong>{b.text}</> : b.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                            {sub.sublabel2 && <p className="text-sm font-semibold text-gray-700 mt-4 mb-2">{sub.sublabel2}</p>}
                                            {sub.bullets2 && (
                                                <ul className="space-y-3 mb-3">
                                                    {sub.bullets2.map((b, bi) => (
                                                        <li key={bi} className="flex items-start gap-3 text-gray-700">
                                                            <span className="text-primary-600 mt-1.5 flex-shrink-0">&bull;</span>
                                                            <span>{b.bold ? <><strong>{b.bold}</strong>{b.text}</> : b.text}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
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
