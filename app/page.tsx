'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentiators from '@/components/Differentiators';
import ClientJourney from '@/components/ClientJourney';
import EUAIAct from '@/components/EUAIAct';
import ResourceHub from '@/components/ResourceHub';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactSection from '@/components/ContactSection';
import PlaceholderSection from '@/components/PlaceholderSection';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [contentReady, setContentReady] = useState(false);

    useEffect(() => {
        // Start loading content immediately in background
        setContentReady(true);
    }, []);

    useEffect(() => {
        if (isLoading) {
            document.body.style.pointerEvents = 'none';
            document.body.style.userSelect = 'none';
        } else {
            document.body.style.pointerEvents = 'auto';
            document.body.style.userSelect = 'auto';
        }
    }, [isLoading]);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

            <div style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease-in' }}>
                <Navbar />

                <main>
                    <Hero preloadGL={contentReady} />

                    <About />

                    <Testimonials />

                    <Services />

                    <Differentiators />

                    <ClientJourney />

                    <ResourceHub />

                    <Team />

                    <FAQ />

                    <ContactSection />
                </main>

                <Footer />
            </div>
        </>
    );
}
