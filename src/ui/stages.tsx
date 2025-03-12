'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { GARMIN_URL } from '../constants';
import posts from '../posts';
import { getPostIdAndStageFromUriSegment } from '../utils';

import Timeline from './timeline';

function getUri(path: string, index: number, garmin?: string) {
  if (garmin) {
    return `${GARMIN_URL}${garmin}`;
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

  const [post, setPost] = useState(null);
  const [scrollToTimeline, setScrollToTimeline] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const base = router.asPath.split('/posts/');

      const { id } = getPostIdAndStageFromUriSegment(base);

      setPost(posts.getById(id));
      setScrollToTimeline(base[1].indexOf('#timeline') > -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  useEffect(() => {
    if (post && scrollToTimeline) {
      const content = document.getElementById('timeline');

      if (content) {
        content.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  }, [post, scrollToTimeline]);

  if (!post) {
    return null;
  }

  return (
    <Timeline
      indexPrefix="Day"
      segments={post.stages.map((stage, index) => ({
        ...stage,
        cta: getCtaText(stage.garmin),
        eyeBrow: stage.dateShort,
        uri: getUri(router.asPath, index, stage.garmin),
      }))}
    />
  );
}

export default Stages;
