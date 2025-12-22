import Body from './body';
import Dialogs from './dialogs';
import Header from './header';
import Loader from './loader';
import Main from './main';

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
      <Dialogs />
      <Loader />
    </Body>
  );
}
