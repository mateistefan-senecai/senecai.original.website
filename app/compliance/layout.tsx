import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Act Compliance Discovery – SenecAI',
    description: 'Pre-engagement compliance discovery questionnaire.',
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
        },
    },
};

export default function ComplianceLayout({ children }: { children: React.ReactNode }) {
    return children;
}
