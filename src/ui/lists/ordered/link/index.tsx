import { LinkBackdrop } from '../../../link';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
  target?: string;
};

export default function Link({ children, href, target }: Props) {
  return (
    <LinkBackdrop href={href} target={target}>
      {children}
    </LinkBackdrop>
  );
}
