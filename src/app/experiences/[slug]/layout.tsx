import { Experience } from '@/layouts/experiences';

type Params = Promise<{
  slug: string;
}>;

type Props = {
  children: React.ReactNode;
  params: Params;
};

export default async function Layout({ children, params }: Props) {
  const { slug } = await params;

  return (
    <Experience slug={slug}>{children}</Experience>
  );
};
