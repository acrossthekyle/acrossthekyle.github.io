'use client';

import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants';
import { useHierarchy } from '@/hooks/useHierarchy';

import styles from './stylesheet';

export default function Heading() {
  const { isOnChild, path } = useHierarchy();

  const match = routes.find((route) => path.includes(route.base));

  return (
    <div className={styles.container}>
      <Link aria-label="acrossthekyle.com home" className={styles.logo} href="/">
        <Image
          alt="Picture of Kyle Gilbert"
          aria-hidden="true"
          className={styles.image}
          height={40}
          role="presentation"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          width={40}
        />
      </Link>
      {match && (
        <Link href={match.base}>
          <div className={styles.heading}>
            <h1 className={styles.item}>
              {match.text}
            </h1>
          </div>
          {!!match.label && (
            <p className={styles.label}>
              {isOnChild ? (
                <>
                  <ArrowLeft className={styles.icon}/> Back
                </>
              ) : <>{match.label}</>}
            </p>
          )}
        </Link>
      )}
    </div>
  );
}
