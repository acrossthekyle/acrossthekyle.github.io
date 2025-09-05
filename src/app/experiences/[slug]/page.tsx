import type { Metadata } from 'next';

import View from '@/views/experience';

type MetadataProps = {
  params: Promise<{ slug: string }>
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const response = await fetch(`${process.env.BASE_URL}api/data/${slug.toLowerCase()}`);

  if (!response.ok) {
    return {
      title: `Experience Not Found`,
      description: 'That experience does not exist',
    };
  }

  const data = await response.json();

  return {
    title: `${data.title.join(' ')} | Experiences`,
    description: data.description[0],
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <View slug={slug} />
  );
}
