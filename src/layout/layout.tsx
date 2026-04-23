import { cookies } from 'next/headers';

import type { Album, FilterBy } from '@/types';

import Footer from './footer';
import Header from './header';
import Main from './main';
import Splash from './splash';

type Props = {
  data: Album[];
  filterBy: FilterBy;
};

export default async function Layout({
  children,
  data,
  filterBy,
}: React.PropsWithChildren<Props>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value || 'auto';
  const units = cookieStore.get('units')?.value || 'imperial';

  const isFiltering = !!filterBy.id || !!filterBy.category;

  return (
    <>
      <Splash />
      <Header data={data} filterBy={filterBy} isFiltering={isFiltering} />
      <Main>
        {children}
      </Main>
      <Footer isFiltering={isFiltering} theme={theme} units={units} />
    </>
  );
}
