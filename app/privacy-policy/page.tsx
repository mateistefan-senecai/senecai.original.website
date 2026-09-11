'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DottedBackground from '@/components/DottedBackground';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative py-20 md:py-32 bg-white">
                    <DottedBackground />
                    <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
                                PRIVACY POLICY
                            </h1>
                            <p className="text-center text-gray-500 mb-12">
                                Last updated: April 27, 2026
                            </p>

                            <div className="space-y-10 text-base md:text-lg text-gray-700 leading-relaxed">
                                <p>
                                    This Privacy Policy explains how we collect and process personal data through the website senecai.eu in accordance with Regulation (EU) 2016/679 (GDPR).
                                </p>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        1. Data Controller
                                    </h2>
                                    <p>
                                        The data controller is Ștefan L.M. Matei PFA, located at Str. Răscoala 1907, nr. 8, bl. 13, et. 2, ap. 15, Romania. Email:{' '}
                                        <a href="mailto:matei.stefan@senecai.eu" className="text-primary-600 hover:text-primary-700 transition-colors">
                                            matei.stefan@senecai.eu
                                        </a>
                                        .
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        2. Categories of Personal Data
                                    </h2>
                                    <p className="mb-4">We may process the following data:</p>
                                    <ul className="space-y-2 list-none">
                                        <li>
                                            <span className="font-semibold text-gray-900">Identification data:</span> name.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Contact data:</span> email address, phone number.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Professional information:</span> company, role.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Message content:</span> details submitted via contact forms.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Scheduling data:</span> information processed via Calendly.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        3. Purposes and Legal Bases
                                    </h2>
                                    <p className="mb-4">We process data for the following purposes:</p>
                                    <ul className="space-y-2 list-none mb-4">
                                        <li>
                                            <span className="font-semibold text-gray-900">Responding to inquiries:</span> Based on Art. 6(1)(b) GDPR (pre-contractual steps).
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Managing business relationships:</span> Based on Art. 6(1)(b) GDPR.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Legitimate interests:</span> Such as maintaining business records, based on Art. 6(1)(f) GDPR.
                                        </li>
                                    </ul>
                                    <p>
                                        We do not use personal data for automated decision-making or profiling.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        4. Data Recipients and International Transfers
                                    </h2>
                                    <p className="mb-4">Your data may be shared with:</p>
                                    <ul className="space-y-2 list-none mb-4">
                                        <li>
                                            <span className="font-semibold text-gray-900">Google Workspace (Google LLC):</span> For email and data storage.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Calendly LLC:</span> For scheduling services.
                                        </li>
                                    </ul>
                                    <p>
                                        These providers may process data outside the European Economic Area (EEA). In such cases, transfers rely on appropriate safeguards, such as Standard Contractual Clauses (SCCs) or the EU-U.S. Data Privacy Framework.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        5. Data Retention
                                    </h2>
                                    <p className="mb-4">We retain personal data:</p>
                                    <ul className="space-y-2 list-none">
                                        <li>For the duration necessary to manage business relationships.</li>
                                        <li>For up to 24 months after last contact if no contract is concluded.</li>
                                        <li>For longer periods where required by legal or fiscal obligations.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        6. Your Rights
                                    </h2>
                                    <p className="mb-4">
                                        Under GDPR, you have the right to access, rectify, or erase your data, and the right to object to or restrict processing. You also have the right to data portability. To exercise these rights, contact{' '}
                                        <a href="mailto:matei.stefan@senecai.eu" className="text-primary-600 hover:text-primary-700 transition-colors">
                                            matei.stefan@senecai.eu
                                        </a>
                                        .
                                    </p>
                                    <p>
                                        You also have the right to lodge a complaint with the Romanian supervisory authority (ANSPDCP).
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        7. Cookies and Security
                                    </h2>
                                    <ul className="space-y-2 list-none">
                                        <li>
                                            <span className="font-semibold text-gray-900">Cookies:</span> This website does not use cookies or tracking technologies that require user consent.
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Security:</span> We implement appropriate technical measures to protect data against unauthorized access or loss.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
