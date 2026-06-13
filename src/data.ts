import { IApp } from './interfaces/app.interface';

export const mockApps: IApp[] = [
  {
    id: '1',
    name: 'Nova Messenger',
    category: 'Apps',
    subCategory: 'Communication',
    rating: 4.5,
    reviewsCount: '12M',
    size: '42 MB',
    iconUrl: 'https://unsplash.com',
    isFree: true,
    developer: 'Nova Labs',
    description: 'Fast and secure communication app for everyone.'
  },
  {
    id: '2',
    name: 'Shadow Run 3D',
    category: 'Games',
    subCategory: 'Action',
    rating: 4.8,
    reviewsCount: '5M',
    size: '150 MB',
    iconUrl: 'https://unsplash.com',
    isFree: true,
    developer: 'Pixel Games',
    description: 'An endless running game with stunning 3D graphics.'
  }
];
