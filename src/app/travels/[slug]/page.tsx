import type { Metadata } from 'next';

import View from '@/views/travel';

type MetadataProps = {
  params: Promise<{ slug: string }>
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const response = await fetch(`${process.env.BASE_URL}api/travels/${slug.toLowerCase()}`);

  if (!response.ok) {
    return {
      title: `Travel Not Found`,
      description: 'That travel does not exist',
    };
  }

  const data = await response.json();

  return {
    title: `${data.title.join(' ')} | Travels`,
    description: data.description[0],
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  return (
    <View slug={slug} />
  );
}
