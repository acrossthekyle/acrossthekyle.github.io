import View from '@/views/experience';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  slug: string;
};

export default function Layout({ children, slug }: Props) {
  return (
    <>
      <View slug={slug} />
      {children}
    </>
  );
}
