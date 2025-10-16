import { NextResponse } from 'next/server';

import data from '../../../db';

export async function GET(request, { params }) {
  const { slug, stage } = await params;

  const found = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  const index = Number(stage) - 1;

  if (index < 0 || index > found.stages.length - 1) {
    return NextResponse.json({}, {
      status: 404,
    });
  }

  const result = found.stages[Number(stage) - 1];

  return NextResponse.json({
    date: result.date,
    description: result.description,
    elevation: result.elevation,
    experience: found.title.join(' '),
    hasElevation: result.hasElevation,
    hasRoute: result.hasRoute,
    hasStats: result.hasStats,
    route: result.route,
    stats: result.stats,
    termini: result.termini,
    title: result.termini.end.join(' '),
  });
}
