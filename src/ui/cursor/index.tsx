'use client';

import { useEffect, useRef, useState } from 'react';

import styles from './stylesheet';

export default function Cursor() {
  const [isPressed, setIsPressed] = useState(false);

  const inner = useRef<HTMLDivElement | null>(null);
  const outer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      if (inner.current) {
        inner.current.style.left = x + 'px';
        inner.current.style.top = y + 'px';
      }

      if (outer.current) {
        outer.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      }
    };

    const handleMouseDown = () => {
      setIsPressed(true);
    };

    const handleMouseUp = () => {
      setIsPressed(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div className={`${styles.inner(isPressed)} cursor-custom`} ref={inner} />
      <div className={`${styles.outer(isPressed)} cursor-custom`} ref={outer} />
    </>
  );
};
