export const ROUTES = [
  {
    group: null,
    path: '/',
    subtitle: 'Home',
    text: 'Home',
  },
  {
    group: 'blogging',
    path: '/places',
    subtitle: 'Near and far',
    text: 'Places',
  },
  {
    group: 'blogging',
    path: '/words',
    subtitle: 'Quick thoughts',
    text: 'Words',
  },
  {
    group: 'blogging',
    path: '/photos',
    subtitle: 'Captured clicks',
    text: 'Photos',
  },
  {
    group: 'blogging',
    path: '/gear',
    subtitle: 'What I carry',
    text: 'Packs',
  },
  {
    group: 'info',
    path: '/about',
    subtitle: 'A brief history',
    text: 'About',
  },
  {
    group: 'info',
    path: '/resume',
    subtitle: 'Career overview',
    text: 'Resume',
  },
  {
    group: 'info',
    path: '/now',
    subtitle: 'Presently doing',
    text: 'Now',
  },
  {
    group: 'info',
    path: '/books',
    subtitle: `What I've read`,
    text: 'Books',
  },
  {
    group: 'connect',
    path: 'https://instagram.com/acrossthekyle',
    subtitle: '@acrossthekyle',
    text: 'Instagram',
  },
  {
    group: 'connect',
    path: 'https://linkedin.com/in/acrossthekyle',
    subtitle: 'in/acrossthekyle',
    text: 'LinkedIn',
  },
  {
    group: 'connect',
    path: 'mailto:hello@acrossthekyle.com',
    subtitle: 'hello@acrossthekyle',
    text: 'Email',
  },
  {
    group: 'code',
    path: '/colophon',
    subtitle: `How it's made`,
    text: 'Colophon',
  },
  {
    group: 'code',
    path: 'https://github.com/acrossthekyle',
    subtitle: 'Coding projects',
    text: 'Github',
  },
  {
    group: 'code',
    path: 'https://www.websitecarbon.com/website/acrossthekyle-com/',
    subtitle: 'A+ rating',
    text: 'Carbon',
  },
  {
    group: 'settings',
    path: '',
    subtitle: '',
    text: 'theme',
  },
];

export function route(query: string) {
  return ROUTES.find(route => route.text
    .toLowerCase()
    .includes(query.replace('/', '').toLowerCase())
  ) || {
    text: '',
    subtitle: '',
  };
}
