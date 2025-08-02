// src/types/tender.ts

export interface Tender {
  id: string;
  title: string;
  customer: {
    name: string;
    rating: number;
    paymentHistory: 'excellent' | 'good' | 'average' | 'poor';
    inn?: string;
    region?: string;
  };
  amount: number;
  category: string;
  region: string;
  deadline: string;
  publishDate: string;
  status: 'active' | 'ending_soon' | 'new';
  
  // AI Analytics
  aiScore: number; // 0-100
  marginPrediction: {
    min: number;
    max: number;
    confidence: number;
  };
  expectedProfit: {
    min: number;
    max: number;
  };
  roi: number;
  
  // Competition & Risk
  competitionLevel: number; // 1-10
  participantsCount: number;
  riskLevel: 'low' | 'medium' | 'high';
  winProbability: number; // 0-100
  
  // Requirements
  requirements: string[];
  executionPeriod: number; // days
  location: string;
  distanceFromUser?: number; // km
  
  // AI Recommendations
  recommendation: 'participate' | 'consider' | 'skip';
  insights: string[];
  warnings: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  avgMargin: number;
  riskLevel: 'low' | 'medium' | 'high';
  activeCount: number;
  totalValue: number;
}

export interface FilterState {
  search: string;
  category: string[];
  region: string[];
  amountFrom: number | null;
  amountTo: number | null;
  aiScoreMin: number | null;
  marginMin: number | null;
  riskLevel: string[];
  deadline: string;
  sortBy: 'aiScore' | 'amount' | 'deadline' | 'margin';
  sortOrder: 'asc' | 'desc';
}

export interface DashboardStats {
  totalTenders: number;
  totalValue: number;
  avgAiScore: number;
  highMarginCount: number;
  newToday: number;
  endingSoon: number;
}

export interface UserProfile {
  id: string;
  companyName: string;
  categories: string[];
  regions: string[];
  minAmount: number;
  maxAmount: number;
  preferences: {
    riskTolerance: 'low' | 'medium' | 'high';
    marginThreshold: number;
    competitionThreshold: number;
  };
}