export type WorkStatus = 'Concept' | 'In progress' | 'Complete';

export type WorkItem = {
  slug: string;
  title: string;
  category: 'professional' | 'public';
  status: WorkStatus;
  context: string;
  role: string;
  outcome: string;
  tags: string[];
  featured?: boolean;
  href: string;
};

export const workItems: WorkItem[] = [
  {
    slug: 'ai-marketing-workflow',
    title: 'Making AI-generated content reviewable inside an enterprise workflow',
    category: 'professional',
    status: 'Complete',
    context:
      'A marketing team wanted to try a language model for content creation inside tools they already used.',
    role: 'Led the React frontend for an early proof of concept wired to a language-model API.',
    outcome:
      'The pilot showed the idea could work in that environment and led to more exploration.',
    tags: ['React', 'AI integration', 'Product workflow'],
    featured: true,
    href: '/work/ai-marketing-workflow',
  },
  {
    slug: 'document-compliance-review',
    title: 'Turning document review into an actionable product workflow',
    category: 'professional',
    status: 'Complete',
    context:
      'Marketing content needed to be checked against approved language and offer details across multi-page documents.',
    role: 'Built React experiences and Python document-processing APIs that extracted content and surfaced discrepancies.',
    outcome:
      'Gave reviewers a structured way to find discrepancies and locate approved language.',
    tags: ['React', 'Python', 'Document processing'],
    featured: true,
    href: '/work/document-compliance-review',
  },
  {
    slug: 'shared-react-foundation',
    title: 'Creating a reusable React foundation across multiple applications',
    category: 'professional',
    status: 'Complete',
    context:
      'Multiple application teams needed consistent frontend assets and patterns instead of rebuilding the same pieces in every repo.',
    role: 'Built a shared library of React assets and worked across roughly a dozen engineers, including contractors.',
    outcome:
      'Provided shared building blocks used across multiple application repositories.',
    tags: ['React', 'Design systems', 'Technical leadership'],
    featured: true,
    href: '/work/shared-react-foundation',
  },
  {
    slug: 'pointpower',
    title: 'PointPower',
    category: 'public',
    status: 'In progress',
    context:
      'Planning credit card rewards usually means bouncing between issuer sites and spreadsheets.',
    role: 'Building the React Native app and backend myself.',
    outcome:
      'A working concept for planning rewards use. Architecture is still evolving.',
    tags: ['React Native', 'TypeScript', 'Expo', 'Supabase'],
    href: '/work/pointpower',
  },
  {
    slug: 'smart-wallet',
    title: 'Smart Wallet',
    category: 'public',
    status: 'In progress',
    context: 'A lot of personal finance tools are either too basic or feel like a spreadsheet.',
    role: 'Built the React and TypeScript app, with help from Cursor.',
    outcome: 'A financial planning web app I use as a learning and product experiment.',
    tags: ['React', 'TypeScript', 'Node.js'],
    href: 'https://github.com/jrbuckley/SmartWallet',
  },
  {
    slug: 'personal-website',
    title: 'Personal Website',
    category: 'public',
    status: 'In progress',
    context: 'Needed a personal site that works for freelance clients and still works as a portfolio.',
    role: 'Designed and built the Astro site and content structure.',
    outcome: 'This site: portfolio, services, and notes at jorgebuckley.com.',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS'],
    href: 'https://github.com/jrbuckley/PersonalWebsite',
  },
  {
    slug: 'sanita',
    title: 'Sanita',
    category: 'public',
    status: 'Concept',
    context: 'An open-source social platform idea around health and fitness.',
    role: 'Early exploration with Next.js, React Native, and ATProtocol.',
    outcome: 'Early experiment. Not a launched product.',
    tags: ['Next.js', 'React Native', 'ATProtocol'],
    href: 'https://github.com/jrbuckley/sanita',
  },
  {
    slug: 'diamond',
    title: 'Diamond',
    category: 'public',
    status: 'Concept',
    context: 'College baseball scores and stats are annoying to follow on mobile.',
    role: 'Prototyping a React Native / Expo app.',
    outcome: 'Early concept work. Still experimental.',
    tags: ['React Native', 'Expo', 'Firebase'],
    href: 'https://github.com/jrbuckley/Diamond',
  },
  {
    slug: 'the-picks',
    title: 'The Picks',
    category: 'public',
    status: 'Concept',
    context: 'Friends wanted an easy way to pick NFL spreads and track results.',
    role: 'Built an iOS app with SwiftUI and Firebase.',
    outcome: 'Personal project with limited distribution.',
    tags: ['Swift', 'SwiftUI', 'Firebase'],
    href: 'https://github.com/jrbuckley/ThePicks',
  },
];

export const featuredWork = workItems.filter((item) => item.featured);

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return workItems.find((item) => item.slug === slug);
}
