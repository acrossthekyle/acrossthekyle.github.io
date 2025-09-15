import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import View from '@/views/stage';

type Params = Promise<{ slug: string, stage: string }>;

type MetadataProps = {
  params: Params;
}

async function fetchData(slug: string, stage: string) {
  const response = await fetch(`${process.env.BASE_URL}api/data/${slug.toLowerCase()}/${stage}`);

  if (!response.ok && response.status === 404) {
    return {
      notFound: true,
    };
  }

  return response.json();
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug, stage } = await params;

  const data = await fetchData(slug, stage);

  if (data.notFound) {
    return {
      title: '404 | Experiences',
      description: '',
    };
  }

  return {
    title: `${data.stage.termini.start.join(' ')} to ${data.stage.termini.end.join(' ')} | ${data.title.join(' ')} | Experiences`,
    description: '',
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug, stage } = await params;

  const data = await fetchData(slug, stage);

  if (data.notFound) {
    notFound();
  }

  return (
    <View data={data} />
  );
}
