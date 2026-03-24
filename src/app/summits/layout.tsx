import { Suspense } from 'react';

import {
  Directory,
  DirectoryList,
  DirectoryListItem,
  DirectoryListItemAnchor,
} from '@/ui/directory';
import Loading from '@/ui/loading';

import get from './get';

export default function Layout({ children }: React.PropsWithChildren) {
  const data = get();

  return (
    <Suspense fallback={<Loading />}>
      <Directory>
        <DirectoryList>
          {data.map(({ id, title }) => (
            <DirectoryListItem key={id}>
              <DirectoryListItemAnchor path={`/summits/${id}`} text={title} />
            </DirectoryListItem>
          ))}
        </DirectoryList>
      </Directory>
      {children}
    </Suspense>
  );
}
