import Trips from '@/layouts/trips';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Trips>{children}</Trips>
  );
};
