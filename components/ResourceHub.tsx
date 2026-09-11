'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import RevealAnimation from './RevealAnimation';
import DottedBackground from './DottedBackground';
import DecisionTree from './DecisionTree';
import RoleIdentificationDecisionTree from './RoleIdentificationDecisionTree';
import RiskCategorizationDecisionTree from './RiskCategorizationDecisionTree';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { blogPosts } from '@/lib/blog/posts';
import type { ReactNode } from 'react';

const toolIcons: ReactNode[] = [
    <svg key="t1" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="t2" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
    <svg key="t3" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
];

export default function ResourceHub() {
    const [activeTab, setActiveTab] = useState<'blog' | 'tools' | 'guides'>('tools');
    const [selectedToolIndex, setSelectedToolIndex] = useState<number | null>(null);
    const { language, t } = useLanguage();
    const blogScrollerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateBlogScrollState = () => {
        const el = blogScrollerRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 4);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    const scrollBlog = (direction: 'left' | 'right') => {
        const el = blogScrollerRef.current;
        if (!el) return;
        const firstCard = el.querySelector<HTMLElement>('[data-blog-card]');
        const gap = 32; // matches gap-8
        const step = (firstCard?.offsetWidth ?? el.clientWidth * 0.8) + gap;
        el.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
    };

    useEffect(() => {
        if (activeTab !== 'blog') return;
        const el = blogScrollerRef.current;
        if (!el) return;
        updateBlogScrollState();
        el.addEventListener('scroll', updateBlogScrollState, { passive: true });
        window.addEventListener('resize', updateBlogScrollState);
        return () => {
            el.removeEventListener('scroll', updateBlogScrollState);
            window.removeEventListener('resize', updateBlogScrollState);
        };
    }, [activeTab]);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            let shouldScroll = false;
            if (hash === '#resources-blog') { setActiveTab('blog'); shouldScroll = true; }
            else if (hash === '#resources-tools') { setActiveTab('tools'); shouldScroll = true; }
            else if (hash === '#resources-guides') { setActiveTab('guides'); shouldScroll = true; }
            if (shouldScroll) {
                setTimeout(() => {
                    const element = document.getElementById('resources');
                    if (element) {
                        if (window.__lenis) {
                            window.__lenis.scrollTo(element, { offset: 0, duration: 1 });
                        } else {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                }, 150);
            }
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        const body = document.body;
        if (selectedToolIndex !== null) {
            const scrollY = window.scrollY;
            const scrollbarWidth = window.innerWidth - html.clientWidth;
            if (window.__lenis) window.__lenis.stop();
            html.style.overflow = 'hidden';
            body.style.overflow = 'hidden';
            body.style.position = 'fixed';
            body.style.top = `-${scrollY}px`;
            body.style.width = '100%';
            body.style.paddingRight = `${scrollbarWidth}px`;
            return () => {
                html.style.overflow = '';
                body.style.overflow = '';
                body.style.position = '';
                body.style.top = '';
                body.style.width = '';
                body.style.paddingRight = '';
                if (window.__lenis) window.__lenis.start();
                window.scrollTo(0, scrollY);
            };
        }
        html.style.overflow = '';
        body.style.overflow = '';
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.paddingRight = '';
        body.style.touchAction = '';
        if (window.__lenis) window.__lenis.start();
        return () => {};
    }, [selectedToolIndex]);

    const toolTitle = selectedToolIndex !== null ? t.resourceHub.tools[selectedToolIndex].title : '';
    const modal = selectedToolIndex !== null && typeof document !== 'undefined'
        ? createPortal(
            <div className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4" onClick={() => setSelectedToolIndex(null)}>
                <div data-lenis-prevent className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full h-[85vh] flex flex-col overflow-hidden" onClick={(e) => e.stopPropagation()} onWheel={(e) => e.stopPropagation()}>
                    {selectedToolIndex === 1 ? (
                        <RoleIdentificationDecisionTree toolTitle={toolTitle} onClose={() => setSelectedToolIndex(null)} />
                    ) : selectedToolIndex === 2 ? (
                        <RiskCategorizationDecisionTree toolTitle={toolTitle} onClose={() => setSelectedToolIndex(null)} />
                    ) : (
                        <DecisionTree toolTitle={toolTitle} onClose={() => setSelectedToolIndex(null)} />
                    )}
                </div>
            </div>,
            document.body
        )
        : null;

    return (
        <>
            <section id="resources" className="relative py-12 bg-gradient-to-br from-gray-50 to-white">
                <DottedBackground />
                <div id="resources-blog" className="h-0 scroll-mt-24" />
                <div id="resources-tools" className="h-0 scroll-mt-24" />
                <div id="resources-guides" className="h-0 scroll-mt-24" />
                <div className="max-w-7xl mx-auto" style={{ width: '90%', margin: '0 auto' }}>
                    <RevealAnimation direction="up">
                        <div className="mb-16">
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                                {t.resourceHub.title}
                            </h2>
                            <p className="text-xl text-gray-600">
                                {t.resourceHub.subtitle}
                            </p>
                        </div>
                    </RevealAnimation>

                    {/* Tab Navigation */}
                    <RevealAnimation delay={0.1} direction="up">
                        <div className="flex justify-center gap-2 mb-12 flex-wrap">
                            <button
                                onClick={() => setActiveTab('blog')}
                                className={`px-3 md:px-6 py-2 font-medium text-sm md:text-base transition-all duration-300 ${activeTab === 'blog' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                            >
                                {t.resourceHub.blogTab}
                            </button>
                            <span className="text-gray-300 self-center">|</span>
                            <button
                                onClick={() => setActiveTab('tools')}
                                className={`px-3 md:px-6 py-2 font-medium text-sm md:text-base transition-all duration-300 ${activeTab === 'tools' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                            >
                                {t.resourceHub.toolsTab}
                            </button>
                            <span className="text-gray-300 self-center">|</span>
                            <button
                                onClick={() => setActiveTab('guides')}
                                className={`px-3 md:px-6 py-2 font-medium text-sm md:text-base transition-all duration-300 ${activeTab === 'guides' ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                            >
                                {t.resourceHub.guidesTab}
                            </button>
                            <span className="text-gray-300 self-center">|</span>
                            <a href="/eu-ai-act" className="inline-flex items-center gap-1.5 px-3 md:px-6 py-2 font-medium text-sm md:text-base transition-all duration-300 text-gray-600 hover:text-primary-600 group">
                                <span>{t.resourceHub.euAiActTab}</span>
                                <svg className="w-3.5 h-3.5 opacity-40 group-hover:opacity-70 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </RevealAnimation>

                    <div className="min-h-[500px]">
                        {activeTab === 'blog' && (
                            <div className="relative">
                                {/* Prev button */}
                                <button
                                    type="button"
                                    aria-label="Previous articles"
                                    onClick={() => scrollBlog('left')}
                                    disabled={!canScrollLeft}
                                    className={`hidden md:flex absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ${canScrollLeft ? 'opacity-100 hover:border-primary-500 hover:text-primary-600' : 'opacity-40 cursor-not-allowed'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                {/* Next button */}
                                <button
                                    type="button"
                                    aria-label="Next articles"
                                    onClick={() => scrollBlog('right')}
                                    disabled={!canScrollRight}
                                    className={`hidden md:flex absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ${canScrollRight ? 'opacity-100 hover:border-primary-500 hover:text-primary-600' : 'opacity-40 cursor-not-allowed'}`}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Scroller */}
                                <div
                                    ref={blogScrollerRef}
                                    data-lenis-prevent
                                    className="overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth -mx-4 px-4 md:mx-0 md:px-0"
                                >
                                    <div className="flex gap-8 pb-4">
                                        {blogPosts.map((post) => (
                                            <a
                                                key={post.slug}
                                                data-blog-card
                                                href={`/blog/${post.slug}`}
                                                className="snap-start flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[calc((100%-4rem)/3)] relative bg-white p-8 rounded-2xl border-b-4 border-gray-200 hover:border-primary-500 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col"
                                            >
                                                <div className="flex items-center gap-2 mb-3">
                                                    <span className="px-2.5 py-0.5 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                                                        {language === 'ro' ? post.categoryRo : post.category}
                                                    </span>
                                                    <span className="text-xs text-gray-400">
                                                        {new Date(post.date).toLocaleDateString(language === 'ro' ? 'ro-RO' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                                    {language === 'ro' ? post.titleRo : post.title}
                                                </h3>
                                                <p className="text-base text-gray-600 leading-relaxed mb-4 flex-1">
                                                    {language === 'ro' ? post.excerptRo : post.excerpt}
                                                </p>
                                                <span className="text-sm font-medium text-primary-600">
                                                    {language === 'ro' ? 'Citește mai mult →' : 'Read more →'}
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'tools' && (
                            <div className="space-y-6">
                                <RevealAnimation delay={0.1} direction="up">
                                    <div className="text-center mb-8">
                                        <p className="text-lg text-gray-700">{t.resourceHub.toolsIntro}</p>
                                    </div>
                                </RevealAnimation>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {t.resourceHub.tools.map((tool, index) => (
                                        <RevealAnimation key={index} delay={index * 0.1} direction="up">
                                            <div className="relative bg-white p-8 rounded-2xl border-b-4 border-gray-200 hover:border-primary-500 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">{tool.title}</h3>
                                                    <p className="text-base text-gray-600 leading-relaxed mb-6">{tool.description}</p>
                                                </div>
                                                <button
                                                    onClick={() => setSelectedToolIndex(index)}
                                                    className="w-full py-3 px-6 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-lg hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300"
                                                >
                                                    {t.resourceHub.checkNow}
                                                </button>
                                            </div>
                                        </RevealAnimation>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'guides' && (
                            <div className="space-y-6">
                                <RevealAnimation delay={0.1} direction="up">
                                    <div className="text-center mb-8">
                                        <p className="text-lg text-gray-700">{t.resourceHub.guidesIntro}</p>
                                    </div>
                                </RevealAnimation>
                                <RevealAnimation delay={0.2} direction="up">
                                    <div className="bg-white p-6 rounded-xl border-2 border-gray-200 shadow-sm max-w-xl mx-auto">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{t.resourceHub.guidesComingSoonTitle}</h3>
                                                <p className="text-sm text-gray-600">{t.resourceHub.guidesComingSoonText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </RevealAnimation>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {modal}
        </>
    );
}
