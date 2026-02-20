import { type NextRequest, NextResponse } from 'next/server';

import get from './get';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string; stage: string; }> }
) {
  const { slug, stage } = await params;

  if (!slug || !stage) {
    return NextResponse.json([]);
  }

  const data = get(slug.toLowerCase(), stage);

  return NextResponse.json(data);
}
