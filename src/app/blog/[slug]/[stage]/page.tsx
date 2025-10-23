import type { Metadata } from 'next';
import { Suspense } from 'react';

import db from '@/db';
import { padIndex } from '@/utils';
import { Fallback, View } from '@/views/details';

type Params = Promise<{
  slug: string;
  stage: string;
}>;

type GenerateMetadata = {
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

  const next = index === found.stages.length - 1 ? undefined : index + 2;
  const previous = index === 0 ? undefined : index;

  const result = found.stages[index];

  return {
    date: result.date,
    description: result.description,
    elevation: result.elevation,
    hasElevation: result.hasElevation,
    hasRoute: result.hasRoute,
    hasStats: result.hasStats,
    next: next ? {
      date: found.stages[next - 1].date,
      index: padIndex(next),
      title: found.stages[next - 1].termini.end,
    } : undefined,
    previous: previous ? {
      date: found.stages[previous - 1].date,
      index: padIndex(previous),
      title: found.stages[previous - 1].termini.end,
    } : undefined,
    route: result.route,
    slug,
    stage,
    stats: result.stats,
    termini: result.termini,
    title: result.termini.end.join(' '),
    travel: found.title.join(' '),
  };
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { slug, stage } = await params;

  const data = getData(slug, stage);

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'Sorry, this does not exist.',
    };
  }

  return {
    title: `${data.title} | ${data.travel} | Travels`,
    description: data.description?.[0] || `${data.travel}: ${data.title}`,
  };
};

export default async function Page({ params }: { params: Params }) {
  const { slug, stage } = await params;

  const data = getData(slug, stage);

  return (
    <Suspense fallback={<Fallback />}>
      <View data={data} />
    </Suspense>
  );
}
