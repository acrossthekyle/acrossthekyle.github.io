import Body from './body';
import { Gpx, Zoom } from './dialogs';
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
      <Zoom />
      <Gpx />
      <Loader />
    </Body>
  );
}
