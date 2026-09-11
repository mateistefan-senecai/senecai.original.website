'use client';

import { useState } from 'react';

interface DecisionTreeProps {
    toolTitle: string;
    onClose: () => void;
}

interface Answers {
    section1: {
        step1: boolean | null;
        step2: boolean | null;
        step3: boolean | null;
        step4: boolean | null;
    };
    section2: string[];
    section3: boolean | null;
    section4: boolean | null;
    section5: boolean | null;
    section6: {
        usesGPAI: boolean | null;
        position: string | null;
        currentStep: number;
    };
    section7: boolean | null;
    section8: {
        providerHighRisk: string[];
        deployer: string[];
        gpaiProvider: string[];
        distributor: string[];
    };
}

export default function DecisionTree({ toolTitle, onClose }: DecisionTreeProps) {
    const [currentSection, setCurrentSection] = useState(1);
    const [currentStep, setCurrentStep] = useState(1);
    const [showResults, setShowResults] = useState(false);

    const getInitialAnswers = (): Answers => ({
        section1: { step1: null, step2: null, step3: null, step4: null },
        section2: [],
        section3: null,
        section4: null,
        section5: null,
        section6: { usesGPAI: null, position: null, currentStep: 1 },
        section7: null,
        section8: {
            providerHighRisk: [],
            deployer: [],
            gpaiProvider: [],
            distributor: [],
        },
    });

    const [answers, setAnswers] = useState<Answers>(getInitialAnswers());

    const goldActive = 'bg-yellow-200 text-gray-900 border border-yellow-300';
    const goldInactive = 'bg-yellow-50 text-gray-800 border border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300';

    const totalSections = 8;

    const getSectionName = () => {
        if (currentSection === 1) return 'Are you in scope of the EU AI Act?';
        if (currentSection === 2) return 'What is your role under the EU AI Act?';
        if (currentSection === 3) return 'Is your AI system prohibited?';
        if (currentSection === 4) return 'Does your system qualify as High-Risk AI?';
        if (currentSection === 5) return 'Limited-Risk AI and Transparency Obligations';
        if (currentSection === 6) return 'Use of General-Purpose AI (GPAI) Models';
        if (currentSection === 7) return 'GPAI with Systemic Risk';
        if (currentSection === 8) return 'Operational Readiness by Role';
        return '';
    };

    const handleSection1Answer = (step: number, answer: boolean) => {
        const newAnswers = { ...answers };
        if (step === 1) newAnswers.section1.step1 = answer;
        else if (step === 2) newAnswers.section1.step2 = answer;
        else if (step === 3) newAnswers.section1.step3 = answer;
        else if (step === 4) newAnswers.section1.step4 = answer;
        setAnswers(newAnswers);

        // Check for early exit
        if (step === 1 && !answer) {
            setTimeout(() => setShowResults(true), 300);
        } else if (step === 4 && answer) {
            // YES goes to results page
            setTimeout(() => setShowResults(true), 300);
        } else {
            // Auto-advance to next step
            setTimeout(() => handleNext(), 300);
        }
    };

    const handleSection2Toggle = (role: string) => {
        const newRoles = answers.section2.includes(role)
            ? answers.section2.filter(r => r !== role)
            : [...answers.section2, role];
        setAnswers({ ...answers, section2: newRoles });
    };

    const handleYesNo = (section: number, answer: boolean) => {
        const newAnswers = { ...answers };
        if (section === 3) newAnswers.section3 = answer;
        else if (section === 4) newAnswers.section4 = answer;
        else if (section === 5) newAnswers.section5 = answer;
        else if (section === 7) newAnswers.section7 = answer;
        setAnswers(newAnswers);

        // Auto-advance to next section
        setTimeout(() => handleNext(), 300);
    };

    const handleNext = () => {
        if (currentSection === 1 && currentStep < 4) {
            setCurrentStep(currentStep + 1);
        } else if (currentSection < totalSections) {
            setCurrentSection(currentSection + 1);
            setCurrentStep(1);
        } else {
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentSection === 1 && currentStep > 1) {
            setCurrentStep(currentStep - 1);
        } else if (currentSection > 1) {
            setCurrentSection(currentSection - 1);
            setCurrentStep(currentSection === 2 ? 1 : 1);
        }
    };

    const renderSection1 = () => {
        if (currentStep === 1) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1 — Do you use an AI system (EU AI Act definition)?</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you use, develop, train, fine-tune, or operate an AI system that:</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>uses machine-learning or logic-based techniques,</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>infers outputs (predictions, recommendations, decisions, content),</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>influences physical or virtual environments, and</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>operates with a degree of autonomy?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleSection1Answer(1, false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step1 === false
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleSection1Answer(1, true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step1 === true
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        } else if (currentStep === 2) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2 — Nature of your involvement</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium mb-4">Do any of the following apply to you?</p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">2.</span>
                                <span>Do you develop, train, or fine-tune an AI system?</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">3.</span>
                                <span>Do you sell or offer an AI system under your own brand, even if developed by a third party?</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">4.</span>
                                <span>Do you use or deploy an AI system in products, services, or internal operations?</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">5.</span>
                                <span>Does the AI support or automate decisions, recommendations, or content generation?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleSection1Answer(2, false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step2 === false
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            NO to all
                        </button>
                        <button
                            onClick={() => handleSection1Answer(2, true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step2 === true
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            YES to any
                        </button>
                    </div>
                </div>
            );
        } else if (currentStep === 3) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3 — EU territorial nexus</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium mb-4">Is the AI system:</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>placed on the EU market,</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>put into service in the EU, or</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>used in a way that affects individuals in the EU?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleSection1Answer(3, false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step3 === false
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleSection1Answer(3, true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step3 === true
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        } else if (currentStep === 4) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Step 4 — Exclusively exempted uses</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium mb-4">Is the AI system used exclusively for:</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>military or national security purposes,</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>personal, non-professional activities,</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>in-house research and development (R&D),</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>certain open-source uses with no commercial or high-risk deployment,</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>use by public authorities in non-EU countries or international organisations?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleSection1Answer(4, false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step4 === false
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleSection1Answer(4, true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section1.step4 === true
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }
    };

    const renderSection2 = () => {
        const roles = [
            { id: 'provider', label: 'A. Provider', description: 'You develop, train, fine-tune, or place an AI system on the market' },
            { id: 'deployer', label: 'B. Deployer', description: 'You use an AI system in your business or operations' },
            { id: 'both', label: 'C. Both Provider and Deployer', description: 'You build and use an AI system' },
            { id: 'distributor', label: 'D. Distributor', description: 'You make an AI system available without modifying it' },
            { id: 'importer', label: 'E. Importer', description: 'You place on the EU market an AI system developed outside the EU' }
        ];

        return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What is your role under the EU AI Act?</h3>
                <p className="text-gray-600 mb-6">Select all that apply</p>
                <div className="space-y-4">
                    {roles.map(role => (
                        <button
                            key={role.id}
                            onClick={() => handleSection2Toggle(role.id)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${answers.section2.includes(role.id)
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-primary-300'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${answers.section2.includes(role.id)
                                    ? 'border-primary-500 bg-primary-500'
                                    : 'border-gray-300'
                                    }`}>
                                    {answers.section2.includes(role.id) && (
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">{role.label}</p>
                                    <p className="text-sm text-gray-600 mt-1">{role.description}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    const renderSection3 = () => {
        return (
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Is your AI system prohibited?</h3>
                <div className="bg-gray-50 p-5 rounded-xl space-y-3">
                    <p className="text-gray-800 font-medium mb-3 text-sm">Does your system involve any of the following prohibited practices?</p>
                    <ul className="space-y-2 text-gray-700 ml-6 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Social scoring of individuals or groups</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Manipulative or deceptive techniques causing harm</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Exploitation of vulnerabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Real-time remote biometric identification in public spaces</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Biometric categorisation using sensitive characteristics</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Untargeted scraping of facial images</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">•</span>
                            <span>Emotion-recognition in workplace or education</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleYesNo(3, false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section3 === false
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        NO
                    </button>
                    <button
                        onClick={() => handleYesNo(3, true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section3 === true
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    };

    const renderSection4 = () => {
        return (
            <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Does your system qualify as High-Risk AI?</h3>
                <div className="bg-gray-50 p-5 rounded-xl space-y-3">
                    <p className="text-gray-800 font-medium mb-3 text-sm">Is your AI system used in one or more of the following areas?</p>
                    <ul className="space-y-2 text-gray-700 ml-6 text-sm">
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Employment, recruitment, or worker management</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Creditworthiness or access to financial services</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Education or vocational training</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Biometric identification or categorisation</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Migration, asylum, or border control</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Law enforcement or justice</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Access to essential public or private services</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Safety components of regulated products</span>
                        </li>
                    </ul>
                    <p className="text-gray-800 font-medium mt-3 text-sm">AND does it influence decisions with legal or similarly significant effects on individuals?</p>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleYesNo(4, false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section4 === false
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        NO
                    </button>
                    <button
                        onClick={() => handleYesNo(4, true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section4 === true
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    };

    const renderSection5 = () => {
        return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Limited-Risk AI and Transparency Obligations</h3>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <p className="text-gray-800 font-medium mb-4">Does your AI system:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Interact directly with humans (e.g. chatbots, virtual assistants)?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Generate or manipulate text, images, audio, or video?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Produce synthetic content that could be mistaken for human-generated content?</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleYesNo(5, false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section5 === false
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        NO
                    </button>
                    <button
                        onClick={() => handleYesNo(5, true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section5 === true
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    };

    const handleSection6Answer = (step: number, value: any) => {
        const newAnswers = { ...answers };
        if (step === 1) {
            newAnswers.section6.usesGPAI = value;
            if (value === false) {
                // NO - auto-advance to next section
                setTimeout(() => handleNext(), 300);
            } else {
                // YES - move to step 2 for position selection
                newAnswers.section6.currentStep = 2;
            }
        } else if (step === 2) {
            newAnswers.section6.position = value;
            // Auto-advance to next section after position selection
            setTimeout(() => handleNext(), 300);
        }
        setAnswers(newAnswers);
    };

    const renderSection6 = () => {
        if (answers.section6.currentStep === 1) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Use of General-Purpose AI (GPAI) Models</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium mb-4">Do you rely on a GPAI model, such as:</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Large language models (LLMs)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Foundation or multi-purpose models</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Third-party AI models accessed via APIs</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleSection6Answer(1, false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section6.usesGPAI === false
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleSection6Answer(1, true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section6.usesGPAI === true
                                ? goldActive
                                : goldInactive
                                }`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Identify your position</h3>
                    <div className="space-y-4">
                        <button
                            onClick={() => handleSection6Answer(2, 'provider')}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${answers.section6.position === 'provider'
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                                }`}
                        >
                            <p className="font-semibold text-gray-900">A. GPAI Model Provider</p>
                            <p className="text-sm text-gray-600 mt-1">You develop and place a general-purpose AI model on the market</p>
                        </button>
                        <button
                            onClick={() => handleSection6Answer(2, 'downstream')}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${answers.section6.position === 'downstream'
                                ? 'border-purple-500 bg-purple-50'
                                : 'border-gray-200 hover:border-purple-300'
                                }`}
                        >
                            <p className="font-semibold text-gray-900">B. Provider or Downstream Provider of a GPAI-based AI System</p>
                            <p className="text-sm text-gray-600 mt-1">You integrate, adapt, or fine-tune a GPAI model into your own AI system</p>
                        </button>
                    </div>
                </div>
            );
        }
    };

    const renderSection7 = () => {
        return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">GPAI with Systemic Risk</h3>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <p className="text-gray-800 font-medium mb-4">Does the GPAI model you provide or rely on:</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Exceed the 10²⁵ FLOPs training compute threshold?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Present risks with broad societal, economic, or fundamental-rights impact?</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>Have you been designated by the EU AI Office as a GPAI with systemic risk?</span>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleYesNo(7, false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section7 === false
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        NO
                    </button>
                    <button
                        onClick={() => handleYesNo(7, true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.section7 === true
                            ? goldActive
                            : goldInactive
                            }`}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    };

    const renderSection8 = () => {
        const selectedRoles = answers.section2;
        const showProvider = selectedRoles.includes('provider') || selectedRoles.includes('both');
        const showDeployer = selectedRoles.includes('deployer') || selectedRoles.includes('both');
        const showGPAI = answers.section6.usesGPAI === true;
        const showDistributor = selectedRoles.includes('distributor') || selectedRoles.includes('importer');

        const hasAnyRole = showProvider || showDeployer || showGPAI || showDistributor;

        return (
            <div className="space-y-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Operational Readiness by Role</h3>
                <p className="text-gray-600 mb-6">Based on your selected roles, review the relevant readiness items:</p>

                {hasAnyRole && (
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-gray-300">
                        {/* A. Provider of High-Risk AI */}
                        {showProvider && (
                            <>
                                <div className="mb-6">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Because you are a Provider</p>
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg">A. Provider of High-Risk AI</h4>
                                    <p className="text-gray-800 font-medium mb-3">Do you have:</p>
                                    <ul className="space-y-2 text-gray-700 ml-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>A clearly defined intended purpose and use-cases?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>A documented risk-management system?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Data governance and data-quality controls?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Automatically generated logs for traceability?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Human oversight measures?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Accuracy, robustness, and cybersecurity safeguards?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Technical documentation?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Performed a conformity assessment?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Issued the EU Declaration of Conformity?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Registered the system in the EU database?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Implemented a post-market monitoring plan?</span>
                                        </li>
                                    </ul>
                                </div>
                                {(showDeployer || showGPAI || showDistributor) && (
                                    <div className="border-t border-gray-300 my-8"></div>
                                )}
                            </>
                        )}

                        {/* B. Deployer of High-Risk AI */}
                        {showDeployer && (
                            <>
                                <div className="mb-6">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Because you are a Deployer</p>
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg">B. Deployer of High-Risk AI</h4>
                                    <p className="text-gray-800 font-medium mb-3">Do you have:</p>
                                    <ul className="space-y-2 text-gray-700 ml-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Internal policies governing AI use?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Human oversight procedures?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Staff training on AI use and limitations?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Monitoring for abnormal behaviour or incidents?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Procedures to report serious incidents?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Conducted a Fundamental Rights Impact Assessment (FRIA), where required?</span>
                                        </li>
                                    </ul>
                                </div>
                                {(showGPAI || showDistributor) && (
                                    <div className="border-t border-gray-300 my-8"></div>
                                )}
                            </>
                        )}

                        {/* C. Provider (or Downstream Provider) of a GPAI Model */}
                        {showGPAI && (
                            <>
                                <div className="mb-6">
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Because you use GPAI</p>
                                    <h4 className="font-bold text-gray-900 mb-3 text-lg">C. Provider (or Downstream Provider) of a GPAI Model</h4>
                                    <p className="text-gray-800 font-medium mb-3">Do you have:</p>
                                    <ul className="space-y-2 text-gray-700 ml-6">
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Documentation enabling downstream compliance?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Risk identification and mitigation measures?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Copyright and training-data transparency processes?</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-primary-500 mt-1">●</span>
                                            <span>Mechanisms to support downstream providers' obligations?</span>
                                        </li>
                                    </ul>
                                </div>
                                {showDistributor && (
                                    <div className="border-t border-gray-300 my-8"></div>
                                )}
                            </>
                        )}

                        {/* D. Distributor / Importer */}
                        {showDistributor && (
                            <div className="mb-6">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Because you are a Distributor/Importer</p>
                                <h4 className="font-bold text-gray-900 mb-3 text-lg">D. Distributor / Importer</h4>
                                <p className="text-gray-800 font-medium mb-3">Do you have:</p>
                                <ul className="space-y-2 text-gray-700 ml-6">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">●</span>
                                        <span>Procedures to verify CE-marking and conformity?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">●</span>
                                        <span>Systems ensuring instructions and documentation accompany the AI system?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">●</span>
                                        <span>Processes to suspend, withdraw, or recall non-compliant systems?</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary-500 mt-1">●</span>
                                        <span>Cooperation mechanisms with market-surveillance authorities?</span>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {/* Single YES/NO buttons at the bottom */}
                        <div className="border-t border-gray-300 pt-8 mt-8">
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => {
                                        const newSection8 = {
                                            providerHighRisk: showProvider ? ['no'] : [],
                                            deployer: showDeployer ? ['no'] : [],
                                            gpaiProvider: showGPAI ? ['no'] : [],
                                            distributor: showDistributor ? ['no'] : []
                                        };
                                        setAnswers({ ...answers, section8: newSection8 });
                                        setTimeout(() => setShowResults(true), 300);
                                    }}
                                    className="px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-yellow-100 text-gray-800 border border-yellow-200 hover:bg-yellow-200 hover:border-yellow-300"
                                >
                                    NO to any
                                </button>
                                <button
                                    onClick={() => {
                                        const newSection8 = {
                                            providerHighRisk: showProvider ? ['yes'] : [],
                                            deployer: showDeployer ? ['yes'] : [],
                                            gpaiProvider: showGPAI ? ['yes'] : [],
                                            distributor: showDistributor ? ['yes'] : []
                                        };
                                        setAnswers({ ...answers, section8: newSection8 });
                                        setTimeout(() => setShowResults(true), 300);
                                    }}
                                    className="px-8 py-3 rounded-lg font-medium transition-all duration-300 bg-yellow-100 text-gray-800 border border-yellow-200 hover:bg-yellow-200 hover:border-yellow-300"
                                >
                                    YES to all
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    const renderResults = () => {
        const interpretations = [];

        if (answers.section1.step4 === true) {
            interpretations.push({
                type: 'info',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                text: 'The AI Act may not apply, or applies only partially.',
                color: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
                iconBg: 'bg-gradient-to-br from-yellow-400 to-yellow-600',
                iconColor: 'text-white'
            });
        } else if (answers.section1.step1 === false || answers.section1.step3 === false) {
            interpretations.push({
                type: 'info',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                ),
                text: 'Likely out of scope or minimal exposure',
                color: 'bg-gradient-to-br from-blue-50 to-blue-100',
                iconBg: 'bg-gradient-to-br from-blue-400 to-blue-600',
                iconColor: 'text-white'
            });
        }

        if (answers.section3 === true) {
            interpretations.push({
                type: 'danger',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                ),
                text: 'System may be PROHIBITED - immediate legal review required',
                color: 'bg-gradient-to-br from-red-50 to-red-100',
                iconBg: 'bg-gradient-to-br from-red-500 to-red-700',
                iconColor: 'text-white'
            });
        }

        if (answers.section4 === true || answers.section7 === true) {
            interpretations.push({
                type: 'warning',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                ),
                text: 'High-Risk or systemic-risk obligations apply',
                color: 'bg-gradient-to-br from-red-50 to-orange-100',
                iconBg: 'bg-gradient-to-br from-red-500 to-orange-600',
                iconColor: 'text-white'
            });
        }

        if (answers.section5 === true || answers.section6.usesGPAI === true) {
            interpretations.push({
                type: 'info',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                ),
                text: 'Transparency or GPAI-specific duties apply',
                color: 'bg-gradient-to-br from-purple-50 to-purple-100',
                iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
                iconColor: 'text-white'
            });
        }

        // Check Section 8 for compliance readiness gaps
        const hasSection8Gaps =
            answers.section8.providerHighRisk.includes('no') ||
            answers.section8.deployer.includes('no') ||
            answers.section8.gpaiProvider.includes('no') ||
            answers.section8.distributor.includes('no');

        if (hasSection8Gaps) {
            interpretations.push({
                type: 'warning',
                icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                ),
                text: 'Multiple gaps in Section 8 → Compliance readiness is low',
                color: 'bg-gradient-to-br from-orange-100 to-red-100',
                iconBg: 'bg-gradient-to-br from-orange-500 to-red-600',
                iconColor: 'text-white'
            });
        }

        return (
            <div className="max-w-3xl mx-auto space-y-8 py-8">
                <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-full shadow-lg flex-shrink-0">
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Your Assessment Results</h3>
                </div>

                <div className="space-y-4">
                    {interpretations.map((item, index) => (
                        <div key={index} className={`${item.color} p-6 rounded-xl border-2 border-opacity-50 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow duration-300`}>
                            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center ${item.iconBg} ${item.iconColor} rounded-full shadow-md`}>
                                {item.icon}
                            </div>
                            <div className="flex-1 pt-2">
                                <p className="font-medium text-gray-900 text-lg">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 text-base">Important Disclaimer</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        This checklist provides a high-level overview only. The EU AI Act contains nuances, role overlaps, and edge cases that require a tailored legal and technical assessment.
                    </p>
                    <p className="text-gray-900 font-semibold text-sm">
                        For a definitive classification, risk analysis, and compliance roadmap, book a consultation with SenecAI Consulting.
                    </p>
                </div>

                <div className="flex gap-4 mt-10">
                    <button
                        onClick={() => {
                            setShowResults(false);
                            setCurrentSection(1);
                            setCurrentStep(1);
                            setAnswers(getInitialAnswers());
                        }}
                        className="flex-1 py-4 px-6 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    >
                        Start Over
                    </button>
                    <a
                        href="https://calendly.com/senecai-consulting/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 px-6 bg-primary-500 text-black rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
                    >
                        Book a Consultation
                    </a>
                </div>
            </div>
        );
    };

    if (showResults) {
        return (
            <div className="flex flex-col h-full">
                {/* Header with Close Button */}
                <div className="flex items-center justify-end px-6 py-4 border-b border-gray-200">
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                        aria-label="Close"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto p-8">
                    {renderResults()}
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-full">
            {/* Header with Navigation */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <button
                    onClick={handlePrevious}
                    disabled={currentSection === 1 && currentStep === 1}
                    className="p-2 text-yellow-600 hover:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-600 hover:text-gray-800 transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Progress Bar */}
            <div className="px-8 pt-6 pb-4">
                <div className="mb-2">
                    <span className="text-sm font-medium text-gray-600">
                        Section {currentSection} of {totalSections} — {getSectionName()}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentSection / totalSections) * 100}%` }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
                {currentSection === 1 && renderSection1()}
                {currentSection === 2 && renderSection2()}
                {currentSection === 3 && renderSection3()}
                {currentSection === 4 && renderSection4()}
                {currentSection === 5 && renderSection5()}
                {currentSection === 6 && renderSection6()}
                {currentSection === 7 && renderSection7()}
                {currentSection === 8 && renderSection8()}
            </div>

            {/* Next button for Section 2 only (when roles selected) */}
            {currentSection === 2 && answers.section2.length > 0 && (
                <div className="px-8 pb-6">
                    <button
                        onClick={handleNext}
                        className="w-full px-6 py-3 bg-primary-500 text-black rounded-lg font-medium hover:bg-primary-600 transition-colors duration-300"
                    >
                        Next →
                    </button>
                </div>
            )}
        </div>
    );
}
