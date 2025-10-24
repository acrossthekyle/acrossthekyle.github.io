import type { Route } from './types';

export const routes: Route[] = [
  {
    base: '/about',
    isActive: false,
    label: 'About Me',
    path: '',
    text: 'About',
  },
  {
    base: '/blog',
    isActive: false,
    label: 'My Travels',
    path: '',
    text: 'Travels',
  },
  {
    base: '/contact',
    isActive: false,
    label: 'Reach Out',
    path: '',
    text: 'Contact',
  },
];
