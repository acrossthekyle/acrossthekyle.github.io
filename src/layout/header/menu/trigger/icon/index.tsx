import {
  Container,
  Lower,
  Middle,
  Upper,
} from './components';

type Props = {
  isActive: boolean;
};

export default function Icon({ isActive }: Props) {
  return (
    <Container isActive={isActive}>
      <Lower isActive={isActive} />
      <Middle isActive={isActive} />
      <Upper isActive={isActive} />
    </Container>
  );
};
