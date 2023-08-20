export interface Point {
  latitude: number;
  longitude: number;
}

export enum AccountType {
  NORMAL = 'Normal',
  PREMIUM = 'Premium',
}

export interface Person {
  name: string;
  photo: Photo;
}

export interface PersonChapter7 {
  age: number;
  salary: number;
}

export interface Photo {
  title: string;
  location: string;
  date: Date;
}

export interface OutStream {
  write: (data: string) => void;
}

export interface PricingPlan {
  unit: number;
}

export interface Order {}

export interface Resource {}

export interface DataRecord {
  city: string;
  phone: string;
}
