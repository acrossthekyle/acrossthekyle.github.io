import { LinkBackdrop } from '../../../link';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  href: string;
};

export default function Link({ children, href }: Props) {
  return (
    <LinkBackdrop href={href}>
      {children}
    </LinkBackdrop>
  );
}
