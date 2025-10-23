import type { Route } from './types';

export const routes: Route[] = [
  {
    base: '/about',
    isActive: false,
    label: 'About Me',
    text: 'About',
  },
  {
    base: '/blog',
    isActive: false,
    label: 'My Travels',
    text: 'Travels',
  },
  {
    base: '/contact',
    isActive: false,
    label: 'Reach Out',
    text: 'Contact',
  },
];
