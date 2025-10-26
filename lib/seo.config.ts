import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Richard Dillman',
  defaultTitle: 'Richard Dillman',
  description: 'Engineering leadership, performance, and mentorship. Building high-performing teams and scalable systems.',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://richarddillman.com',
    siteName: 'Richard Dillman',
    images: [
      {
        url: 'https://richarddillman.com/api/og',
        width: 1200,
        height: 630,
        alt: 'Richard Dillman',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    handle: '@richarddillman',
    site: '@richarddillman',
    cardType: 'summary_large_image',
  },

  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'author',
      content: 'Richard Dillman',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],

  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
};

export default config;
