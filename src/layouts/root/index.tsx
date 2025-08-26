import Footer from './footer';
import Header from './header';
import Main from './main';
import Zoom from './zoom';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
      <Zoom />
    </>
  );
}
