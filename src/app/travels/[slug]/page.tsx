import View from '@/views/travel';

type Params = Promise<{ slug: string }>;

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <View slug={slug} />
  );
}
