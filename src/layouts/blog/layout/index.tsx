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
  children: React.ReactNode | React.ReactNode[];
  data: Data[];
};

export default function Layout({ children, data }: Props) {
  const { ref } = useModel();

  return (
    <>
      <Directory align="start">
        <DirectoryItems>
          {data.map((item, index: number) => (
            <DirectoryItem index={index} key={index} lines={item.title.length}>
              <DirectoryLink
                href={`/blog/${item.slug}`}
                lines={item.title.length}
                ref={ref}
              >
                <DirectoryText text={item.title} />
              </DirectoryLink>
            </DirectoryItem>
          ))}
        </DirectoryItems>
      </Directory>
      {children}
    </>
  );
}
