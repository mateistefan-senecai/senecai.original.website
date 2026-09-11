'use client';

import { useState } from 'react';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'AI Act Compliance Consultation',
        message: ''
    })
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { t } = useLanguage();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setStatus('idle')

        try {
            const response = await fetch('https://www.digitalizez.ro/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    siteName: 'senecai.eu',
                    companyName: 'SenecAI Consulting',
                    formData: formData,
                }),
            })

            const result = await response.json()

            if (response.ok) {
                setStatus('success')
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'AI Act Compliance Consultation',
                    message: ''
                })
                setTimeout(() => {
                    setStatus('idle')
                }, 5000)
            } else {
                setStatus('error')
                console.error('Submit error:', result.error)
            }
        } catch (error) {
            console.error('Submit error:', error)
            setStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <DottedBackground />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RevealAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            {t.contact.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                            {t.contact.subtitle}
                        </p>
                    </div>
                </RevealAnimation>

                <div className="max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <RevealAnimation delay={0.2}>
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.emailLabel}</h3>
                                        <a href="mailto:matei.stefan@senecai.eu" className="text-gray-600 hover:text-primary-600 transition-colors">
                                            matei.stefan@senecai.eu
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>

                        <RevealAnimation delay={0.3}>
                            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.phoneLabel}</h3>
                                        <a href="tel:+40770875267" className="text-gray-600 hover:text-primary-600 transition-colors">
                                            +40 770 875 267
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealAnimation>

                        <RevealAnimation delay={0.4}>
                            <a
                                href="https://www.linkedin.com/company/senecai-consulting/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:border-primary-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.contact.linkedinLabel}</h3>
                                        <p className="text-gray-600">SenecAI Consulting</p>
                                    </div>
                                </div>
                            </a>
                        </RevealAnimation>
                    </div>

                    {/* Contact Form */}
                    <RevealAnimation delay={0.5}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-blue-50/30 to-purple-50/50 rounded-2xl blur-xl"></div>
                            <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-white/50">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                                                {t.contact.formName}
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                placeholder={t.contact.formNamePlaceholder}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                                                {t.contact.formPhone}
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                placeholder={t.contact.formPhonePlaceholder}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                                            {t.contact.formEmail}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                            placeholder={t.contact.formEmailPlaceholder}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                                            {t.contact.formMessage}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                            placeholder={t.contact.formMessagePlaceholder}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || status === 'success'}
                                        className="w-full px-8 py-4 bg-gradient-to-br from-primary-400 to-primary-600 text-black font-bold rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    >
                                        {isSubmitting ? t.contact.formSending : status === 'success' ? t.contact.formSuccess : t.contact.formSubmit}
                                    </button>

                                    {status === 'success' && (
                                        <p className="text-center text-green-600 font-semibold">
                                            {t.contact.formSuccessMessage}
                                        </p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-center text-red-600 font-semibold">
                                            {t.contact.formErrorMessage}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </RevealAnimation>
                </div>
            </div>
        </section>
    );
}
