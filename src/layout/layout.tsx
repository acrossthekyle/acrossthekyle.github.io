import type { Collection } from '@/types';

import Dialog from './dialog';
import Footer from './footer';
import Header from './header';
import Main from './main';
import Splash from './splash';

type Props = {
  collections: Collection[];
};

export default async function Layout({
  children,
  collections,
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <Splash />
      <Header collections={collections} />
      <Main>
        {children}
      </Main>
      <Footer />
      <Dialog />
    </>
  );
}
