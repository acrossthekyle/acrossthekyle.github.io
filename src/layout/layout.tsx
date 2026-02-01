import Footer from './footer';
import Header from './header';
import Main from './main';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  group: string;
};

export default function Layout({ children, group }: Props) {
  return (
    <>
      <Header route={group} />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}
