import { NextResponse } from 'next/server';

import data from '../../db';

export async function GET(request, { params }) {
  const { slug } = await params;

  const found = data.find((item) => item.slug.toLowerCase() === slug.toLowerCase());

  return NextResponse.json({
    ...found,
    stages: found.stages.map(({ date, description, image, location, termini }) => ({
      date,
      description: description !== undefined ? [description[0]] : undefined,
      image,
      location,
      termini,
    })),
  });
}
