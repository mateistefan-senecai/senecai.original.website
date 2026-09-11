'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DottedBackground from '@/components/DottedBackground';

export default function TermsOfUsePage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative py-20 md:py-32 bg-white">
                    <DottedBackground />
                    <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-center">
                                TERMS OF USE
                            </h1>
                            <p className="text-center text-gray-500 mb-12">
                                Last updated: April 27, 2026
                            </p>

                            <div className="space-y-10 text-base md:text-lg text-gray-700 leading-relaxed">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        1. Scope
                                    </h2>
                                    <p>
                                        These terms govern the use of senecai.eu, which provides general information regarding the EU Artificial Intelligence Act and related compliance consulting services.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        2. No Professional Advice and Professional Status
                                    </h2>
                                    <p>
                                        The content on this website is for informational purposes only and does not constitute legal advice. Ștefan L.M. Matei PFA is not a law firm and its personnel are not acting in the capacity of lawyers within the meaning of Law no. 51/1995 regarding the organization and exercise of the profession of lawyer. Accessing this website does not create an attorney-client or any other form of regulated professional relationship. Any information provided should not be used as a substitute for professional legal assistance from a member of the Romanian Bar.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        3. Interactive Tools (Decision Trees)
                                    </h2>
                                    <p className="mb-4">
                                        The interactive tools on this website (such as AI Act Readiness Check, Role Identification Tool, and Risk Categorization Calculator) are provided exclusively for informational and educational purposes.
                                    </p>
                                    <p className="mb-4">
                                        The results generated are based on user-provided data and are general indicators only.
                                    </p>
                                    <p className="mb-4">
                                        These results do not constitute and do not replace a concrete legal assessment or a professional compliance audit.
                                    </p>
                                    <p className="mb-4">
                                        The Operator does not guarantee that results will reflect future interpretations by regulatory authorities or courts.
                                    </p>
                                    <p>
                                        Use of these tools does not create a professional consultancy or attorney-client relationship
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        4. No Reliance and User Risk
                                    </h2>
                                    <p>
                                        Users should not rely on this information as a substitute for professional advice tailored to their specific situation. Any actions taken based on this content are at the user&rsquo;s own risk.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        5. Services and Third Parties
                                    </h2>
                                    <p>
                                        Any services described are subject to separate, written contractual agreements. Implementation services may be delivered in collaboration with third-party partners, with specific responsibilities defined in the relevant agreement.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        6. Limitation of Liability
                                    </h2>
                                    <p>
                                        To the fullest extent permitted by law, the operator is not liable for indirect or consequential damages, or any loss resulting from inaccuracies, omissions, or reliance on website content. We do not guarantee uninterrupted or error-free operation.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        7. Prohibited Use
                                    </h2>
                                    <p>
                                        Users agree not to use the website for any unlawful purpose, nor to attempt to breach security measures or scrape data without authorization.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        8. Intellectual Property
                                    </h2>
                                    <p>
                                        All materials are protected by intellectual property rights and may not be used without prior written consent.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        9. Governing Law
                                    </h2>
                                    <p>
                                        These Terms shall be governed by Romanian law. Any disputes shall fall under the jurisdiction of the competent Romanian courts.
                                    </p>
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
