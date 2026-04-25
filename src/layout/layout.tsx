import type { Album } from '@/types';

import Footer from './footer';
import Header from './header';
import Main from './main';
import Splash from './splash';

type Props = {
  data: Album[];
};

export default async function Layout({
  children,
  data,
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <Splash />
      <Header data={data} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}
