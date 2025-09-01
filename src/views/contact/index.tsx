import {
  Directory,
  DirectoryItem,
  DirectoryEyebrow,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
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
    meta: ['Pictures from my wanderings'],
    path: 'https://instagram.com/acrossthekyle',
    text: ['Instagram'],
  },
];

export default function View() {
  return (
    <Directory align="end">
      <DirectoryItems>
        {items.map((item, index: number) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={item.path}>
              <DirectoryEyebrow text={item.meta} />
              <DirectoryText text={item.text} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
