import {
  Directory,
  DirectoryItem,
  DirectoryEyebrow,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
  DirectoryTitle,
} from '@/ui/directory';

const items = [
  {
    meta: ['The old-fashioned way'],
    path: 'mailto:hello@acrossthekyle.com',
    text: ['E-mail'],
  },
  {
    meta: ['All the work things'],
    path: 'https://linkedin.com/in/acrossthekyle',
    text: ['LinkedIn'],
  },
  {
    meta: ['Pictures from my travels'],
    path: 'https://instagram.com/acrossthekyle',
    text: ['Instagram'],
  },
  {
    meta: ['My coding projects'],
    path: 'https://github.com/acrossthekyle/acrossthekyle.github.io',
    text: ['GitHub'],
  },
];

export default function View() {
  return (
    <Directory align="end" className="h-full">
      <DirectoryTitle>Contact</DirectoryTitle>
      <DirectoryItems>
        {items.map((item, index: number) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={item.path}>
              <DirectoryEyebrow text={item.meta} />
              <DirectoryText index={index} text={item.text} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
