import { Heading } from '../../typography';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Header({ children }: Props) {
  return (
    <Heading level={2} id="timeline">
      {children}
    </Heading>
  );
}
