import Body from './body';
import Footer from './footer';
import Header from './header';
import Loader from './loader';
import Main from './main';
import Zoom from './zoom';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Layout({ children }: Props) {
  return (
    <Body>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
      <Zoom />
      <Loader />
    </Body>
  );
}
