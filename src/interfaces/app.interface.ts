export interface IApp {
  id: string;
  name: string;
  category: 'Apps' | 'Games';
  subCategory: string;
  rating: number;
  reviewsCount: string;
  size: string;
  iconUrl: string;
  isFree: boolean;
  price?: number;
  developer: string;
  description: string;
}
