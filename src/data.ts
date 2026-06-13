// ১. আইটেমের ইন্টারফেস স্ট্রাকচার
export interface IApp {
  id: string;
  name: string;
  category: 'Apps' | 'Games';
  subCategory: string; // যেমন: Top Free, Action, Productivity
  rating: number;
  reviewsCount: string;
  size: string;
  iconUrl: string;
  isFree: boolean;
  price?: number;
  developer: string;
  description: string;
}

// ২. বাস্তবসম্মত অ্যাপস এবং গেমসের ডেটা লিস্ট
export const mockApps: IApp[] = [
  {
    id: '1',
    name: 'Subway Surfers',
    category: 'Games',
    subCategory: 'Action',
    rating: 4.5,
    reviewsCount: '12M',
    size: '135 MB',
    iconUrl: 'https://googleusercontent.com',
    isFree: true,
    developer: 'SYBO Games',
    description: 'Dash as fast as you can! Dodge the oncoming trains in this endless runner!'
  },
  {
    id: '2',
    name: 'WhatsApp Messenger',
    category: 'Apps',
    subCategory: 'Communication',
    rating: 4.3,
    reviewsCount: '150M',
    size: '45 MB',
    iconUrl: 'https://googleusercontent.com',
    isFree: true,
    developer: 'WhatsApp LLC',
    description: 'Simple. Reliable. Private. Free messaging and calling available worldwide.'
  },
  {
    id: '3',
    name: 'PUBG MOBILE',
    category: 'Games',
    subCategory: 'Action',
    rating: 4.2,
    reviewsCount: '45M',
    size: '1.2 GB',
    iconUrl: 'https://googleusercontent.com',
    isFree: true,
    developer: 'Level Infinite',
    description: 'The original battle royale style game on mobile. Epic 10-minute matches!'
  },
  {
    id: '4',
    name: 'Candy Crush Saga',
    category: 'Games',
    subCategory: 'Casual',
    rating: 4.6,
    reviewsCount: '38M',
    size: '85 MB',
    iconUrl: 'https://googleusercontent.com',
    isFree: true,
    developer: 'King',
    description: 'Master the legendary match 3 puzzle game from King and have fun!'
  },
  {
    id: '5',
    name: 'Notion - Notes & Docs',
    category: 'Apps',
    subCategory: 'Productivity',
    rating: 4.7,
    reviewsCount: '2M',
    size: '32 MB',
    iconUrl: 'https://googleusercontent.com',
    isFree: true,
    developer: 'Notion Labs Inc',
    description: 'Write, plan, and get organized in one place. Customize Notion to work your way.'
  },
  {
    id: '6',
    name: 'Minecraft',
    category: 'Games',
    subCategory: 'Casual',
    rating: 4.8,
    reviewsCount: '4.9M',
    size: '650 MB',
    iconUrl: 'https://googleusercontent.com',
    isFree: false,
    price: 6.99,
    developer: 'Mojang Studios',
    description: 'Explore infinite worlds and build everything from the simplest of homes to castles.'
  }
];
