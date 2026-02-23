import Footer from './footer';
import Main from './main';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  isRoot?: boolean;
};

export default function Layout({ children, isRoot }: Props) {
  return (
    <>
      <Main>
        {children}
      </Main>
      <Footer isRoot={isRoot || false} />
    </>
  );
}
