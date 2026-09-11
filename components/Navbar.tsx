'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState({
        resources: false,
        help: false,
    });

    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const isHomePage = pathname === '/';
    const linkPrefix = isHomePage ? '' : '/';

    useEffect(() => {
        if (isMenuOpen) {
            requestAnimationFrame(() => {
                setIsVisible(true);
            });
        }
    }, [isMenuOpen]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsMenuOpen(false);
            setMobileOpen({ resources: false, help: false });
        }, 300);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[9999] pointer-events-auto transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md' : 'bg-white/10'
            }`}>
            <div className="max-w-7xl mx-auto py-4" style={{ width: '90%', margin: '0 auto' }}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a href={`${linkPrefix}#home`} className="flex items-center">
                        <div className="relative w-40 h-12 md:w-46 md:h-14">
                            <Image
                                src="/logo.svg"
                                alt="SenecAI Consulting"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {/* How we can help you Dropdown */}
                        <div className="relative group">
                            <a href={`${linkPrefix}#services`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium cursor-pointer">
                                {t.nav.howWeCanHelp}
                            </a>
                            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[280px]">
                                    {t.nav.services.map((service, i) => (
                                        <a key={i} href={`${linkPrefix}#service-${i + 1}`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            {service}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <a href={`${linkPrefix}#client-journey`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium">
                            {t.nav.howWeCollaborate}
                        </a>

                        {/* Resource Hub Dropdown */}
                        <div className="relative group">
                            <a href={`${linkPrefix}#resources`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium cursor-pointer">
                                {t.nav.resourceHub}
                            </a>
                            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[180px]">
                                    <a href={`${linkPrefix}#resources-blog`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                        {t.nav.resourceItems[0]}
                                    </a>
                                    <a href={`${linkPrefix}#resources-tools`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                        {t.nav.resourceItems[1]}
                                    </a>
                                    <a href={`${linkPrefix}#resources-guides`} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                        {t.nav.resourceItems[2]}
                                    </a>
                                    <a href="/eu-ai-act" className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                        {t.nav.resourceItems[3]}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <a href={`${linkPrefix}#team`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium">
                            {t.nav.team}
                        </a>

                        <a href={`${linkPrefix}#faq`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium">
                            {t.nav.faq}
                        </a>

                        <a href={`${linkPrefix}#contact`} className="text-sm text-black hover:text-primary-600 transition-colors font-medium">
                            {t.nav.contact}
                        </a>

                        {/* Language Selector */}
                        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden text-xs font-semibold">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`px-2.5 py-1.5 transition-colors duration-200 ${language === 'en' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('ro')}
                                className={`px-2.5 py-1.5 transition-colors duration-200 ${language === 'ro' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                            >
                                RO
                            </button>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <a href="https://calendly.com/senecai-consulting/30min" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-medium rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 inline-block">
                            <span className="relative z-10">{t.nav.cta}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary-600"
                        onClick={() => {
                            if (isMenuOpen) {
                                handleClose();
                            } else {
                                setIsMenuOpen(true);
                            }
                        }}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className={`md:hidden fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={handleClose}
                    >
                        <div
                            className={`absolute top-0 left-0 right-0 bg-white/95 backdrop-blur-md pt-20 pb-10 px-6 rounded-b-3xl shadow-2xl max-h-screen overflow-y-auto transition-opacity duration-300 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                                }`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                className="absolute top-6 right-6 p-2 text-primary-600 hover:bg-primary-50 rounded-full transition-colors"
                                onClick={handleClose}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            <div className="flex flex-col items-start text-left space-y-4 mt-4 w-full">
                                {/* Language Selector - Mobile */}
                                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden text-sm font-semibold mb-2">
                                    <button
                                        onClick={() => setLanguage('en')}
                                        className={`px-4 py-2 transition-colors duration-200 ${language === 'en' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        EN
                                    </button>
                                    <button
                                        onClick={() => setLanguage('ro')}
                                        className={`px-4 py-2 transition-colors duration-200 ${language === 'ro' ? 'bg-primary-500 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                                    >
                                        RO
                                    </button>
                                </div>

                                {/* Home */}
                                <a href={`${linkPrefix}#home`} className="text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors" onClick={handleClose}>
                                    {t.nav.home}
                                </a>

                                {/* How we can help you (dropdown) */}
                                <div className="w-full">
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors"
                                        onClick={() => setMobileOpen((prev) => ({ ...prev, help: !prev.help }))}
                                    >
                                        <span>{t.nav.howWeCanHelp}</span>
                                        <svg className={`w-4 h-4 transition-transform ${mobileOpen.help ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileOpen.help && (
                                        <div className="pl-4 mt-2 space-y-1.5">
                                            {t.nav.services.map((service, i) => (
                                                <a key={i} href={`${linkPrefix}#service-${i + 1}`} className="text-gray-600 text-sm hover:text-primary-600 transition-colors block" onClick={handleClose}>
                                                    {service}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* How we collaborate */}
                                <a href={`${linkPrefix}#client-journey`} className="text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors" onClick={handleClose}>
                                    {t.nav.howWeCollaborate}
                                </a>

                                {/* Resource Hub (dropdown) */}
                                <div className="w-full">
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors"
                                        onClick={() => setMobileOpen((prev) => ({ ...prev, resources: !prev.resources }))}
                                    >
                                        <span>{t.nav.resourceHub}</span>
                                        <svg className={`w-4 h-4 transition-transform ${mobileOpen.resources ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileOpen.resources && (
                                        <div className="pl-4 mt-2 space-y-1.5">
                                            <a href={`${linkPrefix}#resources-blog`} className="text-gray-600 text-sm hover:text-primary-600 transition-colors block" onClick={handleClose}>
                                                {t.nav.resourceItems[0]}
                                            </a>
                                            <a href={`${linkPrefix}#resources-tools`} className="text-gray-600 text-sm hover:text-primary-600 transition-colors block" onClick={handleClose}>
                                                {t.nav.resourceItems[1]}
                                            </a>
                                            <a href={`${linkPrefix}#resources-guides`} className="text-gray-600 text-sm hover:text-primary-600 transition-colors block" onClick={handleClose}>
                                                {t.nav.resourceItems[2]}
                                            </a>
                                            <a href="/eu-ai-act" className="text-gray-600 text-sm hover:text-primary-600 transition-colors block" onClick={handleClose}>
                                                {t.nav.resourceItems[3]}
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* Team */}
                                <a href={`${linkPrefix}#team`} className="text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors" onClick={handleClose}>
                                    {t.nav.team}
                                </a>

                                {/* FAQ */}
                                <a href={`${linkPrefix}#faq`} className="text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors" onClick={handleClose}>
                                    {t.nav.faq}
                                </a>

                                {/* Contact */}
                                <a href={`${linkPrefix}#contact`} className="text-gray-900 text-lg font-semibold hover:text-primary-600 transition-colors" onClick={handleClose}>
                                    {t.nav.contact}
                                </a>

                                {/* CTA Button */}
                                <div className="pt-4 w-full">
                                    <a href="https://calendly.com/senecai-consulting/30min" target="_blank" rel="noopener noreferrer" className="w-full relative overflow-hidden px-6 py-3 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-medium rounded-full border-2 border-transparent transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:text-primary-600 hover:border-primary-600 before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-white before:opacity-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:before:opacity-100 inline-block text-center">
                                        <span className="relative z-10">{t.nav.cta}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
