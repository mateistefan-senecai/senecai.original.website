import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Global AI Policy Report 2026 – The Full Study | SenecAI',
    description:
        'What Awaits Organizations Deploying AI Globally — the full SenecAI Global AI Policy Report, First Edition, August 2026. Read or download the PDF.',
    alternates: {
        canonical: 'https://senecai.eu/global-ai-policy-study',
    },
    openGraph: {
        type: 'article',
        url: 'https://senecai.eu/global-ai-policy-study',
        siteName: 'SenecAI',
        title: 'Global AI Policy Report 2026 – The Full Study',
        description:
            'What Awaits Organizations Deploying AI Globally. First Edition, August 2026.',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SenecAI Global AI Policy Report' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Global AI Policy Report 2026 – The Full Study',
        description: 'What Awaits Organizations Deploying AI Globally. First Edition, August 2026.',
        images: ['/og-image.png'],
    },
};

export default function GlobalAIPolicyStudyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
