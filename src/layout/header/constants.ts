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
    label: 'All about me',
    path: '',
    text: `Inspired by`,
  },
  {
    base: '/projects',
    isActive: false,
    label: 'Things I have worked on',
    path: '',
    text: 'Projects',
  },
];
