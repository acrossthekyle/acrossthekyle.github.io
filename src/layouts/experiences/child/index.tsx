import type { Experience } from '@/types';
import View from '@/views/experience';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  data: Experience | null;
};

export default function Layout({ children, data }: Props) {
  return (
    <>
      <View data={data} />
      {children}
    </>
  );
}
