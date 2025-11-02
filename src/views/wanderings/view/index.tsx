'use client';

import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryTextInfo,
  DirectoryItems,
} from '@/ui/directory';

import { useModel } from './model';

type Data = {
  date: string;
  location: string;
  slug: string;
  title: string[];
  type: string;
};

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { ref } = useModel();

  return (
    <Directory>
      <DirectoryItems>
        {data.map((item, index: number) => (
          <DirectoryItem index={index} key={index}>
            <DirectoryLink href={`/wanderings/${item.slug}`} ref={ref}>
              <DirectoryText index={index} words={item.title} />
              <DirectoryTextInfo
                first={item.type}
                second={item.location}
                third={item.date}
              />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
