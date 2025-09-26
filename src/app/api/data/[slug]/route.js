import { NextResponse } from 'next/server';

import data from '../../db';

export async function GET(request, { params }) {
  const { slug } = await params;

  const found = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  return NextResponse.json({
    ...found,
    stages: found.stages.map(({ date, description, image, location, readingTime, termini }) => ({
      date,
      hasPost: description !== undefined && readingTime !== undefined,
      image,
      location,
      readingTime,
      termini,
    })),
  });
}
