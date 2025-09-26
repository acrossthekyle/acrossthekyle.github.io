import type { Metadata } from 'next';
import { Suspense } from 'react';

import View from '@/views/post';

type Params = Promise<{
  slug: string;
  stage: string;
}>;

type MetadataProps = {
  params: Params;
};

async function getData(slug: string, stage: string) {
  const response = await fetch(`${process.env.BASE_URL}api/data/${slug.toLowerCase()}/${stage}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug, stage } = await params;

  const data = await getData(slug, stage);

  if (data === null) {
    return {
      title: 'Post Not Found',
      description: 'That post does not exist',
    };
  }

  return {
    title: `${data.title} | ${data.experience} | Experiences`,
    description: data.description[0],
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug, stage } = await params;

  const data = getData(slug, stage);

  return (
    <Suspense fallback={<div className="fixed inset-0 z-5 backdrop-blur-md bg-black/80 opacity-0 animate-in-fade-quick" />}>
      <View post={data} slug={slug} />
    </Suspense>
  );
}
