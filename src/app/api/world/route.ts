import { NextResponse } from 'next/server';

import data from '../data';

export async function GET() {
  const coordinates = data
    .map(({ coordinates }) => coordinates)
    .filter(Boolean);

  // cancun
  coordinates.push({
    left: '16.4',
    top: '42',
  });
  // argentina
  coordinates.push({
    left: '26',
    top: '85',
  });
  // uruguay
  coordinates.push({
    left: '28',
    top: '83',
  });
  // chile
  coordinates.push({
    left: '23',
    top: '85.5',
  });
  // puerto rico
  coordinates.push({
    left: '22',
    top: '43',
  });

  return NextResponse.json(coordinates);
}
