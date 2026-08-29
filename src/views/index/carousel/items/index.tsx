import { IMAGES } from '../constants';

import {
  Container,
  Item,
  ItemImage,
  ItemCaption,
  ItemCaptionTitle,
  ItemCaptionSub,
} from './components';

type Props = {
  current: number;
};

export default function Items({ current }: Props) {
  return (
    <Container>
      {IMAGES.map((image, index) => (
        <li key={index}>
          <Item isActive={current === index}>
            <ItemImage src={image.src} />
            <ItemCaption>
              <ItemCaptionTitle>{image.title}</ItemCaptionTitle>
              <ItemCaptionSub>{image.year}</ItemCaptionSub>
            </ItemCaption>
          </Item>
        </li>
      ))}
    </Container>
  );
};
