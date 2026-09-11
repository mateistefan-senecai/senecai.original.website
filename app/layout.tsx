import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin", "latin-ext"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-space-grotesk",
    display: "swap",
});

export const metadata: Metadata = {
    title: "SenecAI - EU AI Act Compliance Partner",
    description: "Helping EU startups and SMEs comply with the EU AI Act and turn compliance into a competitive advantage.",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://senecai.com",
        siteName: "SenecAI",
        title: "SenecAI - Your EU AI Act Compliance Partner",
        description: "We help EU startups and SMEs comply with the EU AI Act and turn compliance into a competitive advantage.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "SenecAI - EU AI Act Compliance Partner",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "SenecAI - Your EU AI Act Compliance Partner",
        description: "We help EU startups and SMEs comply with the EU AI Act and turn compliance into a competitive advantage.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            </head>
            <body className={spaceGrotesk.className}>
                <LanguageProvider>
                    <SmoothScroll />
                    {children}
                </LanguageProvider>
            </body>
        </html>
    );
}