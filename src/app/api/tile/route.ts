import { NextResponse, type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const r = searchParams.get('r');
  const x = searchParams.get('x');
  const y = searchParams.get('y');
  const z = searchParams.get('z');

  let tile = `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;

  if (process.env.NODE_ENV === 'production') {
    tile = `https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/${z}/${x}/${y}${r}.png?api_key=${process.env.LEAFLET_STADIA_API_KEY}`;
  }

  try {
    const result = await fetch(tile);
    const blob = await result.blob();
    const buffer = await blob.arrayBuffer();

    return new NextResponse(Buffer.from(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': blob.size.toString(),
        'Cache-Control': 'max-age=2592000',
      },
    });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return new NextResponse('invalid', { status: 500 });
  }
}
