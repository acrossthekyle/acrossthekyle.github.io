import type { Route } from './types';

export const routes: Route[] = [
  {
    base: '/about',
    isActive: false,
    label: 'Learn more about me',
    path: '',
    text: `About`,
  },
  {
    base: '/projects',
    isActive: false,
    label: `Things I've worked on`,
    path: '',
    text: 'Projects',
  },
  {
    base: '/wanderings',
    isActive: false,
    label: 'My treks, thru-hikes, and other travels',
    path: '',
    text: 'Wanderings',
  },
];

export const introduction = `Hello, I'm Kyle Gilbert, and I'm a code tinkerer and backpacker who has spent the last ${new Date().getFullYear() - 2012} years building parts of the web that you probably use today (with zero awards or recognitions), and the last ${new Date().getFullYear() - 2018} years traveling and hiking around the world.`;
