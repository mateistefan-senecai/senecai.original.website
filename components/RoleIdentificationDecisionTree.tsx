'use client';

import { useMemo, useState } from 'react';

interface RoleIdentificationDecisionTreeProps {
    toolTitle: string;
    onClose: () => void;
}

type StepAnswer = boolean | null;

interface Answers {
    step1: StepAnswer;
    step2: StepAnswer;
    step3: StepAnswer;
    step4: StepAnswer;
    step5: StepAnswer;
    step6: StepAnswer;
    step7: StepAnswer;
    step8: StepAnswer;
}

export default function RoleIdentificationDecisionTree({ toolTitle, onClose }: RoleIdentificationDecisionTreeProps) {
    const getInitialAnswers = (): Answers => ({
        step1: null,
        step2: null,
        step3: null,
        step4: null,
        step5: null,
        step6: null,
        step7: null,
        step8: null,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState<Answers>(getInitialAnswers());

    const goldActive = 'bg-yellow-200 text-gray-900 border border-yellow-300';
    const goldInactive = 'bg-yellow-50 text-gray-800 border border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300';

    const handleAnswer = (step: keyof Answers, value: boolean) => {
        const newAnswers = { ...answers, [step]: value };
        setAnswers(newAnswers);

        if (step === 'step8') {
            setTimeout(() => setShowResults(true), 300);
            return;
        }

        if (value === true) {
            // Mark classification reached on this step, continue unless step 7 has special behavior
            if (step === 'step7') {
                setTimeout(() => setShowResults(true), 300);
                return;
            }
        }

        setTimeout(() => setCurrentStep((prev) => Math.min(prev + 1, 8)), 300);
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const providerFlags = useMemo(() => {
        const providerSteps = ['step2', 'step3', 'step4', 'step5', 'step6'] as const;
        return providerSteps.some((s) => answers[s] === true);
    }, [answers]);

    const deployerFlags = useMemo(() => {
        return answers.step1 === true || answers.step7 === true;
    }, [answers]);

    const bothFlags = useMemo(() => {
        return providerFlags && deployerFlags;
    }, [providerFlags, deployerFlags]);

    const renderStep = () => {
        if (currentStep === 1) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1 — Internal Usage (The Deployer Test)</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you use an AI system in a professional capacity to perform a task?</p>
                        <p className="text-sm text-gray-600">Examples: Using a third-party tool for HR screening, summarizing documents with an LLM, or using AI-driven fraud detection in your bank.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step1', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step1 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step1', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step1 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 2) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2 — Original Creation (The Provider Test)</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you develop an AI system and either sell it or use it for the first time under your own brand?</p>
                        <p className="text-sm text-gray-600">Definition: Developing includes designing the logic, training the model, or building the software architecture.</p>
                        <p className="text-sm text-gray-600">Note: If the model is General Purpose (e.g., a foundation model), you may have additional GPAI Provider obligations.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step2', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step2 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step2', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step2 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 3) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3 — White-Labeling & Branding</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you put your own name, logo, or trademark on an existing AI system developed by someone else?</p>
                        <p className="text-sm text-gray-600">Context: Even if you didn’t build the code, if the customer sees your brand, you are "deemed" the Provider by law.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step3', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step3 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step3', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step3 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 4) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4 — Repurposing (Intended Purpose)</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you change the intended purpose of a high-risk AI system?</p>
                        <p className="text-sm text-gray-600">Example: Taking an AI meant for “general text summarization” and specifically marketing/using it for “calculating credit scores.”</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step4', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step4 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step4', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step4 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 5) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5 — Substantial Modification</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you make a substantial modification to an existing AI system?</p>
                        <p className="text-sm text-gray-600">Definition: A change that affects the system’s compliance or changes its risk profile (e.g., retraining a model with a massive new dataset that changes its core outputs).</p>
                        <p className="text-sm text-gray-600">Note: The original provider is usually no longer responsible for that modified version.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step5', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step5 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step5', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step5 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 6) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 6 — Third-Party Integration</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you integrate an AI model into a larger software product you sell?</p>
                        <p className="text-sm text-gray-600">Example: You build a CRM and embed a third-party API to provide predictive sales analytics to your users.</p>
                        <p className="text-sm text-gray-600">If YES: You are the PROVIDER of the system (the CRM features), even if you are not the provider of the model (the API).</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step6', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step6 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step6', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step6 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 7) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 7 — Use as-is (Provider Instructions)</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Do you use the AI system as-is, strictly according to the provider’s instructions?</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">•</span><span>No change to intended purpose</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">•</span><span>No substantial modification</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">•</span><span>No rebranding or resale</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">•</span><span>Internal or operational use only</span></li>
                        </ul>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step7', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step7 === false ? goldActive : goldInactive}`}
                        >
                            NO
                        </button>
                        <button
                            onClick={() => handleAnswer('step7', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step7 === true ? goldActive : goldInactive}`}
                        >
                            YES
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 8 — Both Provider and Deployer</h3>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <p className="text-gray-800 font-medium">Are you both selling and using the AI system?</p>
                    <p className="text-sm text-gray-600">If you checked boxes under both Provider and Deployer categories.</p>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleAnswer('step8', false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step8 === false ? goldActive : goldInactive}`}
                    >
                        NO
                    </button>
                    <button
                        onClick={() => handleAnswer('step8', true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step8 === true ? goldActive : goldInactive}`}
                    >
                        YES
                    </button>
                </div>
            </div>
        );
    };

    const renderResults = () => {
        return (
            <div className="max-w-3xl mx-auto space-y-8 py-8">
                <div className="flex items-center gap-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 rounded-full shadow-lg flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900">Result Summary</h3>
                        <p className="text-sm text-gray-600">AI Act Role Classification Checklist</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {!providerFlags && !deployerFlags && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">You are not under Provider or Deployer obligations</p>
                            <p className="text-sm text-gray-700 mt-1">Based on your answers, none of the Provider or Deployer triggers were selected.</p>
                        </div>
                    )}
                    {bothFlags && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">You are BOTH (dual obligations apply)</p>
                            <p className="text-sm text-gray-700 mt-1">You have provider and deployer responsibilities for different AI tools or uses.</p>
                        </div>
                    )}
                    {providerFlags && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">Provider obligations apply</p>
                            <p className="text-sm text-gray-700 mt-1">Arts. 9–15 AI Act, risk management, technical documentation, and—where applicable—conformity assessment.</p>
                        </div>
                    )}
                    {deployerFlags && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">Deployer obligations apply</p>
                            <p className="text-sm text-gray-700 mt-1">Human oversight, transparency, monitoring, and FRIA where required.</p>
                        </div>
                    )}
                </div>

                <div className="mt-10 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 text-base">Disclaimer</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        This checklist provides a high-level overview only. The EU AI Act contains nuances, thresholds, and edge cases (e.g. downstream providers, GPAI APIs, hybrid roles) that may materially affect classification.
                    </p>
                    <p className="text-gray-900 font-semibold text-sm">
                        For a legally robust and fully accurate assessment, we recommend a tailored analysis. Book a consultation with SenecAI Consulting to determine your exact role and compliance obligations.
                    </p>
                </div>

                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => {
                            setShowResults(false);
                            setCurrentStep(1);
                            setAnswers(getInitialAnswers());
                        }}
                        className="flex-1 py-3 px-6 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                    >
                        Start Over
                    </button>
                    <a
                        href="https://calendly.com/senecai-consulting/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-6 bg-primary-500 text-black rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
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
                    disabled={currentStep === 1}
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

            <div className="px-8 pt-6 pb-4">
                <div className="mb-2">
                    <span className="text-sm font-medium text-gray-600">
                        Step {currentStep} of 8 — {toolTitle}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 8) * 100}%` }}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
                {renderStep()}
            </div>
        </div>
    );
}
