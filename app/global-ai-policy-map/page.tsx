'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalPolicyMap from '@/components/GlobalPolicyMap';

export default function GlobalAIPolicyMapPage() {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <GlobalPolicyMap />
            </main>
            <Footer />
        </>
    );
}
