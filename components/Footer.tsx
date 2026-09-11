import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useLanguage();

    return (
        <footer className="bg-black text-white border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-16" style={{ width: '90%', margin: '0 auto' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-start">
                    {/* Brand Column */}
                    <div>
                        <div className="relative w-40 h-12 md:w-46 md:h-14 mb-4">
                            <Image
                                src="/logo_white.png"
                                alt="SenecAI"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <a
                            href="https://www.linkedin.com/company/senecai-consulting/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-primary-400 hover:to-primary-600 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>

                    {/* Pages */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.footer.pagesTitle}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.howWeCanHelp}
                                </a>
                            </li>
                            <li>
                                <a href="#client-journey" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.howWeCollaborate}
                                </a>
                            </li>
                            <li>
                                <a href="#resources" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.resourceHub}
                                </a>
                            </li>
                            <li>
                                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.team}
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.faq}
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    {t.nav.contact}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t.footer.legalTitle}</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/legal-notice" className="text-gray-400 hover:text-white transition-colors">
                                    Legal Notice
                                </a>
                            </li>
                            <li>
                                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Use
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Book a Call */}
                    <div>
                        <a href="https://calendly.com/senecai-consulting/30min" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden px-8 py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-medium rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 w-full inline-block text-center">
                            <span className="relative z-10">{t.footer.bookCall}</span>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-gray-700">
                    <p className="text-gray-400 text-sm text-center">
                        &copy; {currentYear} {t.footer.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}
