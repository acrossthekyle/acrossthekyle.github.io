import shuffle from 'lodash.shuffle';
import { NextResponse } from 'next/server';

import data from '../data';

export async function GET() {
  const shuffled = shuffle(data);

  return NextResponse.json(shuffled.map(({ date, slug, title, type }) => ({
    date,
    slug,
    title,
    type,
  })));
}
