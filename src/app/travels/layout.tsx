import Travels from '@/layouts/travels';

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <Travels>{children}</Travels>
  );
};
