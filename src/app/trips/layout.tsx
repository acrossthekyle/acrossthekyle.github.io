import Layout from '@/layouts/trips';

type Props = {
  children: React.ReactNode;
}

export default function TripsLayout({ children }: Props) {
  return (
    <Layout>{children}</Layout>
  );
};
