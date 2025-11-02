import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryTextInfo,
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
    <Directory align="end">
      <DirectoryItems>
        {data.map(({ date, location, slug, title }, index) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={`/projects/${slug}`}>
              <DirectoryText index={index} words={title} />
              <DirectoryTextInfo
                first="Work"
                second={date.join(' - ')}
                third={location}
              />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
