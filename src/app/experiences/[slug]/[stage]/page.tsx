import type { Metadata } from 'next';
import { Suspense } from 'react';

import db from '@/db';
import View from '@/views/post';
import Loading from '@/views/post/loading';

type Params = Promise<{
  slug: string;
  stage: string;
}>;

type MetadataProps = {
  params: Params;
};

function getData(slug: string, stage: string) {
  const found = db.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  if (found === undefined) {
    return null;
  }

  const index = Number(stage) - 1;

  if (index < 0 || index > found.stages.length - 1) {
    return null;
  }

  const result = found.stages[Number(stage) - 1];

  return {
    date: result.date,
    description: result.description,
    elevation: result.elevation,
    experience: found.title.join(' '),
    hasElevation: result.hasElevation,
    hasRoute: result.hasRoute,
    hasStats: result.hasStats,
    route: result.route,
    slug,
    stage,
    stats: result.stats,
    termini: result.termini,
    title: result.termini.end.join(' '),
  };
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug, stage } = await params;

  const data = getData(slug, stage);

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'Sorry, this does not exist.',
    };
  }

  return {
    title: `${data.title} | ${data.experience} | Experiences`,
    description: data.description?.[0] || `${data.experience}: ${data.title} Stats`,
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug, stage } = await params;

  const data = getData(slug, stage);

  return (
    <Suspense fallback={<Loading slug={slug} />}>
      <View data={data} />
    </Suspense>
  );
}
