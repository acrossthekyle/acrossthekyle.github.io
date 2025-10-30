'use client';

import { X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useEvent } from '@/hooks/useEvent';

import styles from './stylesheet';

export default function Close() {
  const router = useRouter();

  useEvent('onEscape', () => {
    router.push('/');
  });

  return (
    <Link
      className={styles.close}
      href="/"
      title="Close"
    >
      <X className={styles.icon} />
    </Link>
  );
}
