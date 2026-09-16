export const siteConfig = {
  name: 'Jorge Buckley',
  email: 'jbuckley.tech@gmail.com',
  location: 'Charlotte, NC',
  siteUrl: 'https://jorgebuckley.com',
  defaultOgImage: 'https://jorgebuckley.com/website-images/website-preview.png',
  resumePath: '/JorgeBuckley_Resume.pdf',
  github: 'https://github.com/jrbuckley',
  linkedin: 'https://linkedin.com/in/jorge-buckley',
  letterboxd: 'https://letterboxd.com/hiphipjorge001/',
  selumaStudio: 'https://selumastudio.com',
  pricing: {
    projectFrom: 5000,
    hourlyFrom: 95,
  },
  proofStrip: [
    'Enterprise engineering experience',
    '6 years building product interfaces',
    'React · TypeScript · AI features',
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Notes', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function inquiryMailto(): string {
  const subject = encodeURIComponent('Freelance inquiry');
  const body = encodeURIComponent(
    [
      'Name:',
      'Work email:',
      'Company or project:',
      'What are you trying to build or fix?',
      'Target timeline:',
      'Budget range:',
      'Optional link to designs, product, or repository:',
      '',
    ].join('\n')
  );
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}
