import { capitalize, map } from 'lodash';
import Link from 'next/link';

import { posts } from '@/cache/posts';
import { stages } from '@/cache/posts/stages';
import Components from '@/components';
import Styles from '@/styles';
import type { Posts } from '@/types';
import {
  transformPostsForMasonry,
  transformStagesForTimeline,
} from '@/utils/components';

const scss = Styles.Pages.Categories.Page;

function format(category: string | null) {
  if (category === null) {
    return '';
  }

  return category;
}

export const getServerSideProps = async (request) => {
  const category = request.query.category.toLowerCase();

  let results = [];
  let total = 0;

  if (category === 'stage') {
    results = stages;

    total = stages.reduce((sum, stage) => sum + stage.stages.length, 0);
  } else {
    results = posts
      .filter(({ categories }) => categories.includes(category))
      .map(({ categories, date, image, snippet, title, uri }) => ({
        categories,
        date,
        image,
        snippet,
        title,
        uri,
      }));

    total = results.length;
  }

  return {
    props: {
      results,
      category: format(category),
      total,
    },
  };
};

type PostAndStages = {
  date: string;
  stages: Posts.Stage[];
  stats: Posts.Stats;
  title: string;
  uri: string;
};

type Props = {
  category: string;
  results: Posts.Post[] | PostAndStages[];
  total: number;
};

function Page({ category, results, total }: Props) {
  return (
    <Components.View title={`Categories | ${category}`}>
      <h1 className={scss.header}>Category: {category}</h1>
      <p className={scss.total}>{`${total} Item(s)`}</p>
      {category === 'stage' ? (
        <>
          {(results as unknown as PostAndStages[]).map(
            ({ date, stages, stats, title, uri }) => (
              <div className={scss.stages} key={title}>
                <h2 className={scss.post}>
                  <Link href={uri}>{title}</Link>
                </h2>
                <h3 className={scss.date}>
                  <time>{date}</time>
                </h3>
                <Components.Post.Stats className={scss.stats} {...stats} />
                <Components.Timeline
                  indexPrefix="Day"
                  segments={transformStagesForTimeline(stages)}
                />
              </div>
            ),
          )}
        </>
      ) : (
        <Components.Masonry
          items={transformPostsForMasonry(results as unknown as Posts.Post[])}
        />
      )}
    </Components.View>
  );
}

export default Page;
