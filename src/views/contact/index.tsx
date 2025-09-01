import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

const items = [
  {
    path: 'mailto:hello@acrossthekyle.com',
    text: ['E-mail'],
  },
  {
    path: 'https://linkedin.com/in/acrossthekyle',
    text: ['LinkedIn'],
  },
  {
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
              <DirectoryText text={item.text} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
