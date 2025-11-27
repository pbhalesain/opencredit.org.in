// app/api/og/route.tsx
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Democratizing Credit Access';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
          fontSize: 60,
          fontWeight: 700,
        }}
      >
        <div style={{ color: 'white' }}>{title}</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}