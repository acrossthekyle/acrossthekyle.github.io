import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'App Icon';

export const size = {
  width: 18,
  height: 18,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 10,
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        K.G.
      </div>
    ),
    {
      ...size,
    }
  )
}
