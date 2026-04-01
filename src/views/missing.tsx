import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';

export default function View() {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ 00-m01 ]</HeaderEyebrow>
        <HeaderPrefix>/</HeaderPrefix>Missing
        <HeaderSubtitle>Page not found</HeaderSubtitle>
      </Header>
      <Introduction>
        While I web surfed, weak and weary,<br />
        For pages long forgotten yore.<br />
        When I clicked my fav'rite href,<br />
        Suddenly there came a warning,<br />
        and my heart was filled with mourning,<br />
        Mourning for my dear missing page,<br />
        "Tis not possible!", I muttered,<br />
        "Give thine pages, I emplore!"<br />
        Quoth the server, 404.
      </Introduction>
    </>
  );
}
