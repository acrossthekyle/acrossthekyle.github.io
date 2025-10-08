import { NextResponse } from 'next/server';

import data from '../../db';

export async function GET(request, { params }) {
  const { slug } = await params;

  const found = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  return NextResponse.json({
    ...found,
    stages: found.stages.map(({ date, description, hasStats, image, readingTime, termini }) => ({
      date,
      hasPost: description !== undefined && readingTime !== undefined,
      hasStats,
      image,
      termini,
    })),
  });
}
