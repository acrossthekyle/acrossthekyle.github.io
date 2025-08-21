import type { Route } from './types';

export const routes: Route[] = [
  {
    base: '/about',
    isActive: false,
    path: '/about',
    text: 'About',
  },
  {
    base: '/travels',
    isActive: false,
    path: '/travels',
    text: 'Travels',
  },
  {
    base: '/contact',
    isActive: false,
    path: '/contact',
    text: 'Contact',
  },
];
