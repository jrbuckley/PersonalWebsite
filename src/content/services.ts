import { formatCurrency, siteConfig } from './site';

export type ServiceOffer = {
  id: string;
  title: string;
  bestFor: string;
  typicalWork: string[];
  deliverable: string;
};

export const serviceOffers: ServiceOffer[] = [
  {
    id: 'react-product',
    title: 'React application and feature development',
    bestFor:
      'Teams with a defined product, feature, or workflow that needs strong React implementation.',
    typicalWork: [
      'React and TypeScript app development',
      'Forms, dashboards, and data-heavy UIs',
      'Shared components and design-system foundations',
      'API integration, state management, testing, and performance',
      'Docs and handoff for your team',
    ],
    deliverable:
      'A working, tested feature or app, with notes on the decisions that matter and a clean handoff.',
  },
  {
    id: 'modernization',
    title: 'Frontend audit and modernization sprint',
    bestFor:
      'Products slowed down by tech debt, inconsistent components, flaky tests, or performance issues.',
    typicalWork: [
      'Codebase and architecture review',
      'Accessibility, performance, and testing check',
      'Prioritized improvement plan',
      'Highest-value fixes within the sprint',
      'Clear next steps for your team',
    ],
    deliverable:
      'A practical plan plus the most useful fixes shipped in the sprint.',
  },
  {
    id: 'ai-integration',
    title: 'AI feature integration',
    bestFor:
      'Teams that already have an AI use case or model endpoint and need a product UI people trust.',
    typicalWork: [
      'React UIs for generate, review, and approve flows',
      'Wiring up model or document-processing APIs',
      'Loading, error, retry, and feedback states',
      'Working with product on the review workflow',
      'Light evaluation hooks when the project allows',
    ],
    deliverable:
      'A real product feature with review flows and guardrails, not a demo that falls apart.',
  },
];

export const homepageServiceCards = [
  {
    id: 'react-product',
    title: 'React product development',
    description:
      'Ship an app or a defined feature in React and TypeScript. Solid structure, responsive UI, tests, and a handoff your team can own.',
  },
  {
    id: 'modernization',
    title: 'Frontend modernization',
    description:
      "Got a frontend that fights you on every change? I can review it, pick the fixes that matter most, and help ship them.",
  },
  {
    id: 'ai-integration',
    title: 'AI feature integration',
    description:
      'Take an AI capability and make it usable in the product: the UI, the API wiring, and the review states that keep people in control.',
  },
] as const;

export const engagementModels = [
  {
    title: 'Fixed-scope project',
    description: 'Best when you know the outcome you want.',
    detail: `Starting point: ${formatCurrency(siteConfig.pricing.projectFrom)}.`,
  },
  {
    title: 'Part-time engineering support',
    description: 'Best when a team needs about 10-20 hours a week.',
    detail: `${formatCurrency(siteConfig.pricing.hourlyFrom)} per hour.`,
  },
] as const;

export const processSteps = [
  {
    title: 'Inquiry',
    description: 'Tell me about the product, the problem, timeline, and budget.',
  },
  {
    title: 'Fit check',
    description: "I'll reply with whether I'm a fit and what a reasonable scope looks like.",
  },
  {
    title: 'Scoped proposal',
    description: 'We agree on outcomes, timeline, and how we work before anything starts.',
  },
  {
    title: 'Delivery and handoff',
    description: 'I ship the work with docs your team can keep using.',
  },
] as const;

export const serviceFaqs = [
  {
    question: 'Do you take open-ended retainer work?',
    answer:
      "I prefer scoped work. Part-time support is fine when there's a clear weekly focus, not an endless backlog.",
  },
  {
    question: 'Do you train or fine-tune foundation models?',
    answer:
      'No. I integrate existing AI capabilities into the product UI and frontend.',
  },
  {
    question: 'Can you work alongside an internal team?',
    answer:
      'Yes. Most projects involve product, design, and engineering partners, with a clean handoff at the end.',
  },
  {
    question: 'Are the listed rates final?',
    answer:
      "They're starting points. Final pricing depends on scope, timeline, and complexity after we talk.",
  },
] as const;
