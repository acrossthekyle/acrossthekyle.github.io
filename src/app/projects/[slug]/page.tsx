import type { Metadata } from 'next';
import { Suspense } from 'react';

import db from '@/db/projects';
import { Fallback, View } from '@/views/projects/[slug]';

type Params = Promise<{
  slug: string;
}>;

type GenerateMetadata = {
  params: Params;
};

function get(slug: string) {
  const data = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (data === undefined) {
    return null;
  }

  const {
    date,
    industry,
    location,
    overview,
    position,
    responsibilities,
    title,
    website,
  } = data;

  return {
    date,
    industry,
    location,
    overview,
    position,
    responsibilities,
    title,
    website,
  };
};


export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'Sorry, this does not exist',
    };
  }

  return {
    title: `${data.title.join(' ')} | Projects`,
    description: data.overview,
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
