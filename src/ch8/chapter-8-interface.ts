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

export interface Photo {
  title: string;
  location: string;
  date: Date;
}

export interface OutStream {
  write: (data: string) => void;
}
