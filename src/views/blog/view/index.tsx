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
};

type Props = {
  data: Data[];
};

export default function View({ data }: Props) {
  const { ref } = useModel();

  return (
    <Directory align="start">
      <DirectoryItems>
        {data.map((item, index: number) => (
          <DirectoryItem key={index}>
            <DirectoryLink href={`/blog/${item.slug}`} ref={ref}>
              <DirectoryText index={index} words={item.title} />
            </DirectoryLink>
          </DirectoryItem>
        ))}
      </DirectoryItems>
    </Directory>
  );
}
