'use client';

import {
  Directory,
  DirectoryItem,
  DirectoryLink,
  DirectoryText,
  DirectoryItems,
} from '@/ui/directory';

import { useModel } from './model';

type Data = {
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
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
