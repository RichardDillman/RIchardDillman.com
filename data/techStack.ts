export interface TechCategory {
  name: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  description?: string;
  primary?: boolean; // Highlight as primary tech
}

export const techStack: TechCategory[] = [
  {
    name: 'Languages & Frameworks',
    items: [
      { name: 'TypeScript', description: 'Primary language for type-safe development', primary: true },
      { name: 'JavaScript', description: 'ES6+ for modern web applications', primary: true },
      { name: 'React', description: 'Component-based UI architecture', primary: true },
      { name: 'Next.js', description: 'Full-stack React framework with SSR/SSG', primary: true },
      { name: 'Node.js', description: 'Server-side JavaScript runtime', primary: true },
      { name: 'Bash', description: 'Shell scripting and automation', primary: true },
      { name: 'YAML', description: 'Configuration and data serialization', primary: true },
      { name: 'PHP', description: 'Legacy systems and WordPress development' },
      { name: 'Python', description: 'Automation and data processing' },
    ],
  },
  {
    name: 'Frontend & Styling',
    items: [
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework', primary: true },
      { name: 'PostCSS', description: 'CSS transformation and optimization' },
      { name: 'shadcn/ui', description: 'Accessible component library' },
      { name: 'Bootstrap', description: 'Responsive CSS framework' },
      { name: 'Material-UI', description: 'React component library' },
      { name: 'CSS-in-JS', description: 'Styled Components, Emotion' },
      { name: 'SCSS/Sass', description: 'CSS preprocessing', primary: true },
      { name: 'Webpack', description: 'Module bundling and optimization' },
      { name: 'Vite', description: 'Fast modern build tooling' },
    ],
  },
  {
    name: 'Backend & Data',
    items: [
      { name: 'PostgreSQL', description: 'Relational database management', primary: true },
      { name: 'Prisma', description: 'Type-safe database ORM', primary: true },
      { name: 'MySQL', description: 'Database design and optimization' },
      { name: 'Redis', description: 'Caching and session management', primary: true },
      { name: 'GraphQL', description: 'API design and implementation' },
      { name: 'REST APIs', description: 'RESTful service architecture', primary: true },
      { name: 'MongoDB', description: 'NoSQL document database' },
      { name: 'Craft CMS', description: 'Flexible content management system' },
    ],
  },
  {
    name: 'Infrastructure & DevOps',
    items: [
      { name: 'Docker', description: 'Containerization and deployment', primary: true },
      { name: 'AWS', description: 'Cloud infrastructure (EC2, S3, CloudFront)', primary: true },
      { name: 'Vercel', description: 'Serverless deployment platform', primary: true },
      { name: 'Git', description: 'Version control and collaboration', primary: true },
      { name: 'GitHub', description: 'Code hosting and collaboration', primary: true },
      { name: 'Cloudflare', description: 'CDN, DNS, and security services' },
      { name: 'Sentry', description: 'Error tracking and performance monitoring' },
      { name: 'GitHub Actions', description: 'CI/CD automation' },
      { name: 'CircleCI', description: 'Continuous integration pipelines' },
      { name: 'nginx', description: 'Web server and reverse proxy' },
      { name: 'VS Code', description: 'Primary development environment' },
      { name: 'Jira', description: 'Project management and tracking' },
      { name: 'Figma', description: 'Design collaboration' },
      { name: 'Datadog', description: 'Application monitoring' },
    ],
  },
  {
    name: 'Performance & SEO',
    items: [
      { name: 'Lighthouse', description: 'Performance auditing and optimization', primary: true },
      { name: 'Core Web Vitals', description: 'LCP, FID, CLS optimization', primary: true },
      { name: 'Google PageSpeed Insights', description: 'Performance measurement tool' },
      { name: 'WebPageTest', description: 'Detailed performance analysis' },
      { name: 'Screaming Frog', description: 'SEO spider and site auditing' },
      { name: 'Google Search Console', description: 'Search performance and indexing', primary: true },
      { name: 'Google Analytics', description: 'Analytics and tracking' },
      { name: 'Snowplow', description: 'Behavioral data collection and analytics' },
      { name: 'Statsig', description: 'Feature flags and experimentation' },
      { name: 'Looker', description: 'Business intelligence and data visualization' },
      { name: 'SEO Best Practices', description: 'Technical SEO and schema markup', primary: true },
      { name: 'CDN Optimization', description: 'Content delivery optimization' },
    ],
  },
  {
    name: 'Testing & Quality',
    items: [
      { name: 'Jest', description: 'Unit and integration testing', primary: true },
      { name: 'Vitest', description: 'Fast unit testing with Vite' },
      { name: 'React Testing Library', description: 'Component testing', primary: true },
      { name: 'Cypress', description: 'End-to-end testing' },
      { name: 'Playwright', description: 'Cross-browser E2E testing' },
      { name: 'Puppeteer', description: 'Headless browser automation' },
      { name: 'Pytest', description: 'Python testing framework' },
      { name: 'Postman', description: 'API testing and documentation' },
      { name: 'Axe DevTools', description: 'Accessibility testing and auditing' },
      { name: 'ESLint', description: 'Code quality and standards' },
      { name: 'Prettier', description: 'Code formatting' },
    ],
  },
];

// Helper functions
export function getPrimaryTech(): TechItem[] {
  return techStack
    .flatMap(category => category.items)
    .filter(item => item.primary);
}

export function getTechByCategory(categoryName: string): TechItem[] {
  const category = techStack.find(cat => cat.name === categoryName);
  return category ? category.items : [];
}
