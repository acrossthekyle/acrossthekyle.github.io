import {
  Header,
  HeaderEyebrow,
  HeaderPrefix,
  HeaderSubtitle,
} from '@/ui/header';
import Introduction from '@/ui/introduction';
import { Highlight } from '@/ui/typography';

type Props = {
   data: Array<{
    coordinates: string;
    id: string;
    images: Array<{
      src: string;
      title: string;
    }>;
    location: string;
    title: string;
    when: string;
  }>;
};

export default function View({ data }: Props) {
  return (
    <>
      <Header>
        <HeaderEyebrow>[ 04 ]</HeaderEyebrow>
        <HeaderPrefix>/</HeaderPrefix>Gallery
        <HeaderSubtitle>Photographic Journal</HeaderSubtitle>
      </Header>
      <Introduction>
        <Highlight>The world</Highlight> as seen <Highlight>through</Highlight> the lens of <Highlight>my</Highlight> various <Highlight>phone</Highlight>s.
      </Introduction>
      <>{data[0].title}</>
    </>
  );
}
