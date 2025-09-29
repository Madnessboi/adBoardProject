export interface Advertisement {
  id: string;
  name: string;
  cost: number;
  description: string;
  category: string;
  location: string;
  createdAt: string;
  imagesIds: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  name: string;
}
