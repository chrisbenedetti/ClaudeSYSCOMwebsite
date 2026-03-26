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

export interface Product {
  id: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  features: string[];
  flagship: boolean;
}

export interface Vertical {
  name: string;
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

export interface ROIInputs {
  documentVolume: number;
  numberOfUsers: number;
  processingTimeMinutes: number;
}

export interface ROIResults {
  timeSavedHours: number;
  costReduction: number;
  efficiencyGain: number;
  annualSavings: number;
}
