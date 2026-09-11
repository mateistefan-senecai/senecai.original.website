export interface Translations {
    nav: {
        home: string;
        howWeCanHelp: string;
        services: string[];
        howWeCollaborate: string;
        resourceHub: string;
        resourceItems: string[];
        team: string;
        faq: string;
        contact: string;
        cta: string;
    };
    hero: {
        heading1: string;
        heading2: string;
        supportingText: string;
        additionalText: string;
        checkOut: string;
        checkOutServiceText: string;
        checkOutServiceHighlight: string;
        checkOutReadinessText: string;
        checkOutReadinessHighlight: string;
        ctaButton: string;
    };
    about: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        difficultiesTitle: string;
        difficultiesText: string;
        deadlineTitle: string;
        deadlineText: string;
        scopeTitle: string;
        scopeText: string;
        turnoverText: string;
        finesLabel: string;
        readinessText: string;
        familiarityText: string;
    };
    services: {
        title: string;
        subtitle: string;
        description: string;
        showLess: string;
        learnMore: string;
        phases: {
            title: string;
            services: {
                title: string;
                description: string;
            }[];
        }[];
    };
    differentiators: {
        title: string;
        subtitle: string;
        items: {
            title: string;
            description: string;
            bullets?: string[];
        }[];
    };
    clientJourney: {
        title: string;
        subtitle: string;
        introText: string;
        stepLabel: string;
        steps: string[];
        models: {
            title: string;
            duration: string;
            cost: string;
            description: string;
        }[];
        ctaButton: string;
        disclaimerLabel: string;
        disclaimerText: string;
    };
    resourceHub: {
        title: string;
        subtitle: string;
        blogTab: string;
        toolsTab: string;
        guidesTab: string;
        euAiActTab: string;
        comingSoon: string;
        toolsIntro: string;
        tools: {
            title: string;
            description: string;
        }[];
        checkNow: string;
        guidesIntro: string;
        guidesComingSoonTitle: string;
        guidesComingSoonText: string;
    };
    team: {
        title: string;
        subtitle: string;
        members: {
            name: string;
            role: string;
            bio: string;
        }[];
    };
    faq: {
        title: string;
        subtitle: string;
        items: {
            question: string;
            answerHtml: string;
        }[];
    };
    contact: {
        title: string;
        subtitle: string;
        emailLabel: string;
        phoneLabel: string;
        linkedinLabel: string;
        formName: string;
        formNamePlaceholder: string;
        formPhone: string;
        formPhonePlaceholder: string;
        formEmail: string;
        formEmailPlaceholder: string;
        formMessage: string;
        formMessagePlaceholder: string;
        formSubmit: string;
        formSending: string;
        formSuccess: string;
        formSuccessMessage: string;
        formErrorMessage: string;
    };
    footer: {
        pagesTitle: string;
        legalTitle: string;
        privacyPolicy: string;
        termsOfService: string;
        bookCall: string;
        copyright: string;
    };
    euAiAct: {
        title: string;
        paragraphs: string[];
        ctaButton: string;
    };
}
