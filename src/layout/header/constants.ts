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
    base: '/blog/trekking',
    isActive: false,
    label: 'My treks and thru-hikes',
    path: '',
    text: 'Thru-hikes',
  },
  {
    base: '/blog/destinations',
    isActive: false,
    label: 'World-wide destinations',
    path: '',
    text: 'Getaways',
  },
];
