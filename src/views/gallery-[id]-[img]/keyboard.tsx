'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type Props = {
  albumId: string;
  next?: string | null;
  previous?: string | null;
};

export default function Keyboard({ albumId, next, previous }: Props) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && previous !== null) {
        router.push(`/gallery/${albumId}/${previous}`);
      } else if (event.key === 'ArrowRight' && next !== null) {
        router.push(`/gallery/${albumId}/${next}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return null;
}


