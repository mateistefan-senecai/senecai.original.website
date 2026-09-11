'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DottedBackground from '@/components/DottedBackground';

export default function LegalNoticePage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative py-20 md:py-32 bg-white">
                    <DottedBackground />
                    <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                        <div className="max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-12 text-center">
                                LEGAL NOTICE
                            </h1>

                            <div className="space-y-10 text-base md:text-lg text-gray-700 leading-relaxed">
                                <div>
                                    <p className="mb-4">This website is operated by:</p>
                                    <p className="font-semibold text-gray-900 mb-3">
                                        SenecAI Compliance S.R.L.
                                    </p>
                                    <ul className="space-y-2 list-none">
                                        <li>
                                            <span className="font-semibold text-gray-900">Registered office:</span> Str. Răscoala 1907, nr. 8, bl. 13, sc. 1, et. 2, ap. 15, Sector 2, București, Romania
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">ONRC Registration number:</span> J2026048407007
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Tax Identification Number (CUI):</span> 55377157
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">European Unique Identifier (EUID):</span> ROONRC.J2026048407007
                                        </li>
                                        <li>
                                            <span className="font-semibold text-gray-900">Email:</span>{' '}
                                            <a href="mailto:matei.stefan@senecai.eu" className="text-primary-600 hover:text-primary-700 transition-colors">
                                                matei.stefan@senecai.eu
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        Professional Activity and Regulatory Disclaimer
                                    </h2>
                                    <p>
                                        The website senecai.eu provides information regarding consulting services for compliance with the EU AI Act and other relevant EU regulations. The services provided by SenecAI Compliance S.R.L. are business and technical consulting in nature and do not constitute legal assistance or legal representation.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        Disclaimer Regarding Interactive Tools
                                    </h2>
                                    <p>
                                        Any simulations or results obtained through the assessment tools (decision trees) available on this website are purely for informational purposes. SenecAI Compliance S.R.L. assumes no liability for any actions taken by users based exclusively on the results of these tools without dedicated professional advice
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        Liability for Content
                                    </h2>
                                    <p>
                                        While we strive to ensure that the information on this website is accurate and up to date, we make no representations or warranties, express or implied, regarding the completeness, accuracy, or reliability of the content.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        External Links
                                    </h2>
                                    <p>
                                        This website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of such external sites.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        Intellectual Property
                                    </h2>
                                    <p>
                                        All content on this website, including text, branding, and materials, is the property of the operator unless otherwise stated. Unauthorized use, reproduction, or distribution is strictly prohibited.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                        Applicable Law
                                    </h2>
                                    <p>
                                        This Legal Notice shall be governed by and construed in accordance with the laws of Romania.
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
