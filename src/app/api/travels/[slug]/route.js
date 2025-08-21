import { NextResponse } from 'next/server';

import data from '../../data';

export async function GET(request, { params }) {
  const { slug } = await params;

  return NextResponse.json(
    data.find((item) => item.slug.toLowerCase() === slug.toLowerCase()),
  );
}
