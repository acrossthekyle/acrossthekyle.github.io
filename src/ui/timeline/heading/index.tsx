import { Heading as TypographyHeading } from '../../typography';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Heading({ children }: Props) {
  return (
    <TypographyHeading level={3}>
      <>
        {children}
      </>
    </TypographyHeading>
  );
}
