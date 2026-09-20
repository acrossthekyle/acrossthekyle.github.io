'use client';

import { MoveDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import tw from '@/styles';

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.container} role="presentation">
      <span className={styles.text}>Scrl</span>
      <div className={styles.bouncer}>
        <MoveDown className={styles.icon} />
      </div>
    </div>
  );
};

const styles = tw({
  container: `
    fixed bottom-18 right-4 z-0
    flex flex-col-reverse items-center gap-2
    pointer-events-none
    select-none

    sm:left-1/2
    sm:right-auto
    sm:bottom-6
    sm:-translate-x-11
    lg:hidden
  `,
  text: `
    text-xtiny text-current/32.5
    font-medium
    tracking-wide
    uppercase
  `,
  bouncer: `
    animate-bounce
  `,
  icon: `
    w-4 h-4
    stroke-1 stroke-current/32.5
  `,
});
