import { Suspense } from 'react';

import {
  Directory,
  DirectoryItems,
  DirectoryLoading,
} from '@/ui/directory';
import { Experiences } from '@/layouts/experiences';

import db from '@/db';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const data = db.map(({ slug, title }) => ({
    slug,
    title,
  }));

  return (
    <Suspense fallback={
      <Directory align="start">
        <DirectoryItems>
          {Array.from({ length: 13 }).map((_, index) => (
            <DirectoryLoading key={index} lines={2} />
          ))}
        </DirectoryItems>
      </Directory>
    }>
      <Experiences data={data}>{children}</Experiences>
    </Suspense>
  );
};
