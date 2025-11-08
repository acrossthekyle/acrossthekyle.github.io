import type { Route } from './types';

export const routes: Route[] = [
  {
    base: '/wanderings',
    isActive: false,
    label: 'My treks, thru-hikes, and other travels',
    path: '',
    text: 'Wanderings',
  },
  {
    base: '/about',
    isActive: false,
    label: 'Learn more about me',
    path: '',
    text: `Selfdom`,
  },
  {
    base: '/projects',
    isActive: false,
    label: `Things I've worked on`,
    path: '',
    text: 'Projects',
  },
];
