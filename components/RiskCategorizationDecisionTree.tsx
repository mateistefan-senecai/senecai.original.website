'use client';

import { useMemo, useState } from 'react';

interface RiskCategorizationDecisionTreeProps {
    toolTitle: string;
    onClose: () => void;
}

type StepAnswer = boolean | null;

interface Answers {
    step0: StepAnswer;
    step1: StepAnswer;
    step2: StepAnswer;
    step3: StepAnswer;
    step4: StepAnswer;
}

export default function RiskCategorizationDecisionTree({ toolTitle, onClose }: RiskCategorizationDecisionTreeProps) {
    const getInitialAnswers = (): Answers => ({
        step0: null,
        step1: null,
        step2: null,
        step3: null,
        step4: null,
    });

    const [currentStep, setCurrentStep] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [answers, setAnswers] = useState<Answers>(getInitialAnswers());

    const goldActive = 'bg-yellow-200 text-gray-900 border border-yellow-300';
    const goldInactive = 'bg-yellow-50 text-gray-800 border border-yellow-200 hover:bg-yellow-100 hover:border-yellow-300';

    const totalSteps = 4;

    const handleAnswer = (step: keyof Answers, value: boolean) => {
        const newAnswers = { ...answers, [step]: value };
        setAnswers(newAnswers);

        if (step === 'step0' && value === true) {
            setTimeout(() => setShowResults(true), 300);
            return;
        }

        if (step === 'step4') {
            setTimeout(() => setShowResults(true), 300);
            return;
        }

        if (step === 'step3') {
            setTimeout(() => setCurrentStep(4), 300);
            return;
        }

        setTimeout(() => setCurrentStep((prev) => Math.min(prev + 1, 4)), 300);
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const outOfScope = useMemo(() => answers.step0 === true, [answers.step0]);

    const annexIHighRisk = useMemo(() => answers.step1 === true, [answers.step1]);
    const annexIIIHighRisk = useMemo(() => answers.step2 === true, [answers.step2]);
    const rightsHighRisk = useMemo(() => answers.step3 === true, [answers.step3]);

    const escapeHatch = useMemo(() => answers.step4 === true, [answers.step4]);

    const isHighRisk = useMemo(() => {
        if (outOfScope) return false;
        const highRiskTriggers = annexIHighRisk || annexIIIHighRisk || rightsHighRisk;
        if (!highRiskTriggers) return false;
        return !escapeHatch;
    }, [outOfScope, annexIHighRisk, annexIIIHighRisk, rightsHighRisk, escapeHatch]);

    const renderStep = () => {
        if (currentStep === 0) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 0 — Scope Exclusions</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Tick if any of these "Scope Exclusions" apply:</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Military & Defense: System used exclusively for military, defense, or national security purposes.</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Pure Research: Sole purpose of scientific research and development (not for market use).</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Personal Use: Natural person using AI for purely personal, non-professional activity.</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Open Source R&D: Research/development prior to placing on market (unless testing in real-world conditions).</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>International Cooperation: Non‑EU public authority using AI under international law enforcement agreements.</span></li>
                        </ul>
                        <p className="text-sm text-gray-600">If any box is ticked: Your system is likely OUT OF SCOPE.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step0', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step0 === false ? goldActive : goldInactive}`}
                        >
                            NONE
                        </button>
                        <button
                            onClick={() => handleAnswer('step0', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step0 === true ? goldActive : goldInactive}`}
                        >
                            ANY APPLY
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 1) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1 — Annex I "Product Safety" Filter</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Does your AI system serve as a safety component (or is it the product itself) for any of the following?</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Medical Devices (diagnostic software, robotic surgery)</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Toys or Personal Transport (smart toys, e‑scooters)</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Machinery & Industrial Tools (collaborative robots)</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Lifts, Pressure Equipment, or Gaseous Fuel Appliances</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Marine, Aviation, or Rail Equipment</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Motor Vehicles (ADAS or autonomous driving features)</span></li>
                        </ul>
                        <p className="text-sm text-gray-600">If any box is ticked: Likely HIGH‑RISK.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step1', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step1 === false ? goldActive : goldInactive}`}
                        >
                            NONE
                        </button>
                        <button
                            onClick={() => handleAnswer('step1', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step1 === true ? goldActive : goldInactive}`}
                        >
                            ANY APPLY
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 2) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2 — Annex III "Sensitive Use Case" Filter</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Is your AI used in any of these high‑impact domains?</p>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <p className="font-semibold">1. Biometrics & Emotion (Non‑Prohibited)</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Remote Biometric Identification</li>
                                    <li>• Biometric Categorization</li>
                                    <li>• Emotion Recognition</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">2. Critical Infrastructure</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Safety Components (road traffic, water, gas, heating, electricity)</li>
                                    <li>• Cybersecurity for essential utility networks</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">3. Education & Vocational Training</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Admissions</li>
                                    <li>• Assessment / grading</li>
                                    <li>• Behavior Monitoring</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">4. Employment & HR</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Recruitment / ranking candidates</li>
                                    <li>• Worker management decisions</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">5. Essential Private & Public Services</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Social benefits (housing, healthcare)</li>
                                    <li>• Finance (credit, loans, insurance pricing)</li>
                                    <li>• Emergency triage (112/999 dispatch)</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">6. Law Enforcement</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Risk assessment (victim/offender)</li>
                                    <li>• Evidence analysis / polygraphs</li>
                                    <li>• Profiling</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">7. Migration, Asylum & Border Control</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Verification of documents</li>
                                    <li>• Application assessment</li>
                                    <li>• Border monitoring / detection</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold">8. Administration of Justice & Democratic Processes</p>
                                <ul className="ml-6 space-y-1">
                                    <li>• Judicial assistance</li>
                                    <li>• Elections influence</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600">If any box is ticked: Likely HIGH‑RISK. If none are ticked: likely not high‑risk.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step2', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step2 === false ? goldActive : goldInactive}`}
                        >
                            NONE
                        </button>
                        <button
                            onClick={() => handleAnswer('step2', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step2 === true ? goldActive : goldInactive}`}
                        >
                            ANY APPLY
                        </button>
                    </div>
                </div>
            );
        }

        if (currentStep === 3) {
            return (
                <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3 — Practical Rights Test</h3>
                    <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                        <p className="text-gray-800 font-medium">Does your AI system perform any of the following?</p>
                        <ul className="space-y-2 text-gray-700 ml-6">
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Influences access to employment</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Influences access to finance</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Influences access to healthcare</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Influences access to education</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Influences access to essential public services</span></li>
                            <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Contributes to legal or administrative decisions</span></li>
                        </ul>
                        <p className="text-sm text-gray-600">If the AI affects someone’s rights, opportunities, or economic wellbeing → treat as HIGH‑RISK.</p>
                    </div>
                    <div className="flex gap-4 justify-center mt-8">
                        <button
                            onClick={() => handleAnswer('step3', false)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step3 === false ? goldActive : goldInactive}`}
                        >
                            NONE
                        </button>
                        <button
                            onClick={() => handleAnswer('step3', true)}
                            className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step3 === true ? goldActive : goldInactive}`}
                        >
                            ANY APPLY
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4 — Article 6(3) Escape Hatch</h3>
                <div className="bg-gray-50 p-6 rounded-xl space-y-4">
                    <p className="text-gray-800 font-medium">Does your system meet any of these criteria?</p>
                    <ul className="space-y-2 text-gray-700 ml-6">
                        <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Narrow procedural task (e.g., formatting text)</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Improving human activity only</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Preparatory task (organizes data for later human assessment)</span></li>
                        <li className="flex items-start gap-2"><span className="text-primary-500 mt-1">●</span><span>Pattern detection without influencing the final decision</span></li>
                    </ul>
                </div>
                <div className="flex gap-4 justify-center mt-8">
                    <button
                        onClick={() => handleAnswer('step4', false)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step4 === false ? goldActive : goldInactive}`}
                    >
                        NONE
                    </button>
                    <button
                        onClick={() => handleAnswer('step4', true)}
                        className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${answers.step4 === true ? goldActive : goldInactive}`}
                    >
                        ANY APPLY
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
                        <h3 className="text-2xl font-bold text-gray-900">Final Result</h3>
                        <p className="text-sm text-gray-600">Checklist: Is My AI System "High‑Risk"?</p>
                    </div>
                </div>

                <div className="space-y-4">
                    {outOfScope && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">Out of scope</p>
                            <p className="text-sm text-gray-700 mt-1">Your system is likely OUT OF SCOPE. No AI Act obligations apply.</p>
                        </div>
                    )}
                    {!outOfScope && isHighRisk && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">HIGH‑RISK</p>
                            <p className="text-sm text-gray-700 mt-1">You must implement all high‑risk obligations (Arts. 8–15) + Conformity Assessment, EU Declaration of Conformity, and EU database registration.</p>
                        </div>
                    )}
                    {!outOfScope && !isHighRisk && (
                        <div className="p-6 rounded-xl border border-yellow-200 bg-yellow-50">
                            <p className="font-semibold text-gray-900">NOT HIGH‑RISK</p>
                            <p className="text-sm text-gray-700 mt-1">You only need to comply with transparency and basic governance rules.</p>
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
                            setCurrentStep(0);
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
                    disabled={currentStep === 0}
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
                        Step {currentStep} of {totalSteps} — {toolTitle}
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-6">
                {renderStep()}
            </div>
        </div>
    );
}
