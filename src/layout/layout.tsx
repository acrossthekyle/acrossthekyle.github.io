import Footer from './footer';
import Header from './header';
import Main from './main';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isRoot?: boolean;
};

export default function Layout({ children, isRoot }: Props) {
  return (
    <>
      <Header isRoot={isRoot || false} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}
