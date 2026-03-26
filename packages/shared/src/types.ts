export interface LeadershipMember {
  name: string;
  title: string;
  bio: string;
}

export interface Service {
  id: string;
  name: string;
  shortName: string;
  description: string;
  icon: string;
}

export interface ProductFeature {
  title: string;
  description: string;
}

export interface WorkflowStep {
  icon: string;
  label: string;
}

export interface Product {
  id: string;
  name: string;
  shortName?: string;
  tagline: string;
  badge: string;
  description: string;
  features: ProductFeature[];
  connectors: string[];
  workflow: WorkflowStep[];
  flagship: boolean;
}

export interface AICapability {
  title: string;
  description: string;
  icon: string;
}

export interface Vertical {
  name: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}
