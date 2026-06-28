'use client';

import { useEffect, useRef, useState } from 'react';

import { styles } from './stylesheet';

export default function Scrollable() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [trackHeight, setTrackHeight] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Measure the elements once they render
  useEffect(() => {
    if (trackRef.current && thumbRef.current) {
      setTrackHeight(trackRef.current.clientHeight);
      setThumbHeight(thumbRef.current.clientHeight);
    }
  }, []);

  // Handle page scrolling
  useEffect(() => {
    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
      const totalScrollableHeight = scrollHeight - clientHeight;

      if (scrollTop > 0 && !hasScrolled) {
        setHasScrolled(true);
      }

      if (totalScrollableHeight > 0) {
        setScrollPercentage(scrollTop / totalScrollableHeight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

  // Calculate maximum pixel distance the thumb can actually slide
  const maxTranslatePixels = trackHeight - thumbHeight;
  const currentTranslation = scrollPercentage * maxTranslatePixels;

  return (
    <div className={styles.scroll} ref={trackRef} >
      <span
        className={styles.wheel(hasScrolled)}
        ref={thumbRef}
        style={hasScrolled ? {
          transform: `translateY(${currentTranslation}px)`,
        } : undefined}
      />
    </div>
  );
}
