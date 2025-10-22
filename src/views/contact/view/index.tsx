import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

const items = [
  {
    path: 'https://instagram.com/acrossthekyle',
    text: ['Instagram'],
  },
  {
    path: 'mailto:hello@acrossthekyle.com',
    text: ['E-mail'],
  },
  {
    path: 'https://linkedin.com/in/acrossthekyle',
    text: ['LinkedIn'],
  },
];

export default function View() {
  return (
    <Directory align="end">
      <DirectoryItems>
        {items.map((item, index) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={item.path}>
              <DirectoryText index={index} words={item.text} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
