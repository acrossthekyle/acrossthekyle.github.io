'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import posts from '../posts';

import Timeline from './timeline';

function Stages() {
  const router = useRouter();

  const [post, setPost] = useState(null);
  const [scrollToTimeline, setScrollToTimeline] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      const base = router.asPath.split('/posts/');
      const parts = (
        base[1].indexOf('#') > -1
          ? base[1].substring(0, base[1].indexOf('#'))
          : base[1]
      ).split('/');

      setPost(posts.getById(parts[0]));
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
      segments={post.stages.map((stage) => ({
        ...stage,
        date: stage.dateShort,
      }))}
      title="Stages"
    />
  );
}

export default Stages;
