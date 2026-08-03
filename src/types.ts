import type socialIcons from '@assets/socialIcons';

export type Site = {
  COMPANY_NAME: string;
  LEGAL_NAME: string;
  TITLE: string;
  DESCRIPTION: string;
  CANONICAL_URL: string;
  LOCALE?: string; // default en
  TELEPHONE: string;
  /** Simple Practice — new / interested client intake (placeholder until live) */
  NEW_CLIENT_INTAKE_URL: string;
  /** Simple Practice — existing client portal (placeholder until live) */
  EXISTING_CLIENT_PORTAL_URL: string;
  /** Short mission blurb in the site footer */
  FOOTER_MISSION?: string;
  OG_IMAGE: string;

  TWITTER?: {
    CREATOR?: string; // twitter handle
    CARD?: 'summary' | 'summary_large_image' | 'app' | 'player';
  };
};

export type Socials = {
  NAME: string;
  ICON: keyof typeof socialIcons;
  LABEL: string;
  HREF: string;
}[];
