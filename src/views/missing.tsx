import { Main } from '@/layout';
import {
  Header,
  HeaderEyebrow,
  HeaderSubtitle,
  HeaderText,
} from '@/ui/header';

export default function View() {
  return (
    <Main>
      <Header>
        <HeaderEyebrow>[ 404 ]</HeaderEyebrow>
        <HeaderText>Missing</HeaderText>
        <HeaderSubtitle>Page not found</HeaderSubtitle>
      </Header>
      <p className="font-mono uppercase text-tiny mt-10">
        While I web surfed, weak and weary,<br />
        For pages long forgotten yore.<br />
        When I clicked my fav'rite href,<br />
        Suddenly there came a warning,<br />
        and my heart was filled with mourning,<br />
        Mourning for my dear missing page,<br />
        "Tis not possible!", I muttered,<br />
        "Give thine pages, I emplore!"<br />
        Quoth the server, 404.
      </p>
    </Main>
  );
}
