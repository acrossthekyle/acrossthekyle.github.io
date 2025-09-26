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
    experience: found.title.join(' '),
    title: result.termini.end.join(' '),
  });
}
