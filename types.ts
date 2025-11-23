

export interface Coach {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Package {
  name: string;
  price?: string;
  duration: string;
  level: string;
  features: string[];
  highlight?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  content: string;
}

export interface AccommodationService {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  tags: string[];
  affiliateUrl: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
}