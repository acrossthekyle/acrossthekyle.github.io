import Directory from '@/ui/directory';

const ITEMS = [
  {
    isApp: true,
    path: 'mailto:hello@acrossthekyle.com',
    text: ['E-mail'],
  },
  {
    isExternal: true,
    path: 'https://linkedin.com/in/acrossthekyle',
    text: ['LinkedIn'],
  },
  {
    isExternal: true,
    path: 'https://instagram.com/acrossthekyle',
    text: ['Instagram'],
  },
  {
    isExternal: true,
    path: 'https://github.com/acrossthekyle/acrossthekyle.github.io',
    text: ['GitHub'],
  },
];

export default function View() {
  return (
    <Directory items={ITEMS} />
  );
}
