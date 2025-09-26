import { Experiences } from '@/layouts/experiences';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Experiences>{children}</Experiences>
  );
};
