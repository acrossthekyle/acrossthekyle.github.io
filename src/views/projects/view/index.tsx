import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

type Props = {
  data: Array<{
    date: string[];
    location: string;
    slug: string;
    title: string[];
  }>;
};

export default function View({ data }: Props) {
  return (
    <Directory align="end" label="wanderings">
      <DirectoryItems>
        {data.map(({ slug, title }, index) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={`/projects/${slug}`}>
              <DirectoryText index={index} words={title} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
