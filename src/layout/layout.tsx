import type { Album } from '@/types';

import Header from './header';
import Main from './main';

type Props = {
  data: Album[];
  filterBy?: string;
};

export default function Layout({ children, data, filterBy }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Header data={data} filterBy={filterBy} />
      <Main>
        {children}
      </Main>
    </>
  );
}
