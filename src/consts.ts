import type { Site, Socials } from './types';

export const SITE: Site = {
  COMPANY_NAME: 'Multi Clarity',
  LEGAL_NAME: 'Multi Clarity, LLC',
  TITLE: 'Clarity for the moments that matter most',
  DESCRIPTION: 'Discover strategies to empower your children and navigate development smoothly.',
  CANONICAL_URL: import.meta.env.DEV
    ? 'http://localhost:4321'
    : 'https://multi-clarity-orlando.pages.dev',
  LOCALE: 'en',
  TELEPHONE: '(414) 555-1234',
  EMAIL: 'info@multiclarity.com',
  ADDRESS: '123 Orange Ave, Suite 200, Orlando, FL 32801',

  OG_IMAGE: '/og-image.webp',

  TWITTER: {
    CREATOR: '@one_space_away',
    CARD: 'summary_large_image',
  },
};

export const SOCIALS: Socials = [
  {
    NAME: 'Instagram',
    ICON: 'instagram',
    LABEL: `${SITE.COMPANY_NAME} on Instagram`,
    HREF: 'https://www.instagram.com/',
  },
  {
    NAME: 'Facebook',
    ICON: 'facebook',
    LABEL: `${SITE.COMPANY_NAME} on Facebook`,
    HREF: 'https://www.facebook.com/',
  },
  {
    NAME: 'Pinterest',
    ICON: 'pinterest',
    LABEL: `${SITE.COMPANY_NAME} on Pinterest`,
    HREF: 'https://www.pinterest.com/',
  },
  {
    NAME: 'Youtube',
    ICON: 'youtube',
    LABEL: `${SITE.COMPANY_NAME} on YouTube`,
    HREF: 'https://www.youtube.com/',
  },
];
