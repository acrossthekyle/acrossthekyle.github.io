'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { usePostStagesData } from '@/data/posts';

import Timeline from '../timeline';

function getUri(path: string, index: number, garmin?: string) {
  if (garmin) {
    return garmin;
  }

  return `${path.indexOf('#') > -1 ? path.substring(0, path.indexOf('#')) : path}/${String(index + 1).padStart(2, '0')}`;
}

function getCtaText(garmin?: string) {
  if (garmin) {
    return 'View Route on Garmin.com';
  }

  return 'View';
}

function Stages() {
  const router = useRouter();

  const [scrollToTimeline, setScrollToTimeline] = useState(false);

  const { data, isReady } = usePostStagesData();

  useEffect(() => {
    if (router.isReady) {
      const base = router.asPath.split('/posts/');

      setScrollToTimeline(base[1].indexOf('#timeline') > -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (isReady && scrollToTimeline) {
      const content = document.getElementById('timeline');

      if (content) {
        content.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [isReady, scrollToTimeline]);

  if (!isReady) {
    return null;
  }

  return (
    <Timeline
      indexPrefix="Day"
      segments={data.map(({ dateShort, garmin, title }, index) => ({
        cta: getCtaText(garmin),
        eyeBrow: dateShort,
        title,
        uri: getUri(router.asPath, index, garmin),
      }))}
    />
  );
}

export default Stages;
