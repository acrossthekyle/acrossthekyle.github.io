'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Hooks from '@/hooks';
import Utils from '@/utils';

type Stage = {
  cta?: string;
  eyeBrow: string;
  title: string;
  uri: string;
};

type Return = {
  isReady: boolean;
  stages: Stage[];
};

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

export const useViewModel = (): Return => {
  const router = useRouter();

  const { data, fetchData, isReady } = Hooks.useApi();

  const [canScrollToTimeline, setCanScrollToTimeline] = useState(false);

  useEffect(() => {
    const { id } = Utils.getPostParameters(router.route);

    fetchData(`posts/${id}/stages`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  useEffect(() => {
    if (router.isReady) {
      const base = router.asPath.split('/posts/');

      setCanScrollToTimeline(base[1].indexOf('#timeline') > -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (isReady && canScrollToTimeline) {
      const content = document.getElementById('timeline');

      if (content) {
        content.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [isReady, canScrollToTimeline]);

  return {
    isReady,
    stages: (data || []).map(({ dateShort, garmin, title }, index) => ({
      cta: getCtaText(garmin),
      eyeBrow: dateShort,
      title,
      uri: getUri(router.asPath, index, garmin),
    })),
  };
};

export default function Node() {
  return null;
}
