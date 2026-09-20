export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'service-detail'
  | 'portfolio'
  | 'project-detail'
  | 'blog'
  | 'blog-article'
  | 'contact'
  | 'consultation'
  | 'faq'
  | 'privacy-policy'
  | 'terms-conditions'
  | 'terms'
  | '404'
  | 'not-found';

export interface CompanyInfo {
  name: string;
  tagline: string;
  supportingStatement: string;
  address: string;
  street: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  phoneRaw: string;
  hours: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  deliverables: string[];
  approach: string;
  keyPhases: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Architecture' | 'Construction' | 'Interior' | 'Renovation';
  location: string;
  status: 'Design Concept' | 'Planning Stage' | 'In Progress' | 'Completed' | 'Studio Showcase';
  scope: string;
  year?: string;
  heroImage: string;
  galleryImages: string[];
  overview: string;
  brief: string;
  approach: string;
  workScope: string[];
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Construction' | 'Architecture' | 'Design' | 'Project Management' | 'Property' | 'Industry Insights' | 'Renovation';
  date: string;
  readTime: string;
  featuredImage: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export interface FaqItem {
  id: string;
  category: 'General' | 'Services & Scope' | 'Consultation & Process' | 'Location & Operations';
  question: string;
  answer: string;
}

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  projectType: string;
  projectLocation: string;
  servicesRequired: string[];
  projectScope: string;
  estimatedBudget: string;
  targetTimeline: string;
  projectDescription: string;
  uploadedFileName?: string;
}
