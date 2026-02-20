import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;

  const src = params.get('src');

  const privateKey = process.env.IMAGE_KIT_IO_PRIVATE_KEY;

  if (!src || !privateKey) {
    return NextResponse.json([]);
  }

  try {
    const encodedUrl = encodeURIComponent(`https://ik.imagekit.io/acrossthekyle/uploads/${src}`);
    const auth = `${btoa(privateKey)}Og==`;

    const response = await fetch(
      `https://api.imagekit.io/v1/metadata?url=${encodedUrl}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Basic ${auth}`,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json([]);
    }

    const metadata = await response.json();

    return NextResponse.json(metadata);
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (error) {
    return NextResponse.json([]);
  }
}
