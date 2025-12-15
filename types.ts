export interface NavItem {
  label: string;
  path: string;
}

export interface SocialLink {
  platform: 'instagram' | 'facebook' | 'linkedin';
  url: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
