export interface Project {
  id: number;
  title: string;
  category: 'Steel' | 'Waterproofing' | 'Construction' | 'Renovation';
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Client {
  name: string;
  logoUrl?: string; // Placeholder for logic
}
