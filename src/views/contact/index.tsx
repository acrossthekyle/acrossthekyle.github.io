import Directory from '@/ui/directory';

export default function View() {
  return (
    <Directory
      className="h-full"
      items={[
        {
          isApp: true,
          meta: ['The old-fashioned way'],
          path: 'mailto:hello@acrossthekyle.com',
          text: ['E-mail'],
        },
        {
          isExternal: true,
          meta: ['All the work things'],
          path: 'https://linkedin.com/in/acrossthekyle',
          text: ['LinkedIn'],
        },
        {
          isExternal: true,
          meta: ['Pictures from my travels'],
          path: 'https://instagram.com/acrossthekyle',
          text: ['Instagram'],
        },
        {
          isExternal: true,
          meta: ['My coding projects'],
          path: 'https://github.com/acrossthekyle/acrossthekyle.github.io',
          text: ['GitHub'],
        },
      ]}
      title="Contact"
    />
  );
}
