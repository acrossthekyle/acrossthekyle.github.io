import type { Album, FilterBy } from '@/types';

import Header from './header';
import Main from './main';
import Splash from './splash';

type Props = {
  data: Album[];
  filterBy?: FilterBy;
};

export default function Layout({ children, data, filterBy }: React.PropsWithChildren<Props>) {
  return (
    <>
      <Splash />
      <Header data={data} filterBy={filterBy} />
      <Main>
        {children}
      </Main>
    </>
  );
}
