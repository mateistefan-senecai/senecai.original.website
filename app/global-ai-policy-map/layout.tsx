import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Jurisdiction Map – Global AI Policy Report | SenecAI',
    description:
        'Regulatory intensity across 22 jurisdictions, scored on a 15-criterion rubric spanning five weighted pillars. An interactive map from the SenecAI Global AI Policy Report, First Edition, August 2026.',
    alternates: {
        canonical: 'https://senecai.eu/global-ai-policy-map',
    },
    openGraph: {
        type: 'article',
        url: 'https://senecai.eu/global-ai-policy-map',
        siteName: 'SenecAI',
        title: 'The Jurisdiction Map – Global AI Policy Report',
        description:
            'Regulatory intensity across 22 jurisdictions, scored on a 15-criterion rubric spanning five weighted pillars.',
        images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SenecAI Global AI Policy Report' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Jurisdiction Map – Global AI Policy Report',
        description:
            'Regulatory intensity across 22 jurisdictions, scored on a 15-criterion rubric spanning five weighted pillars.',
        images: ['/og-image.png'],
    },
};

export default function GlobalAIPolicyMapLayout({ children }: { children: React.ReactNode }) {
    return children;
}
