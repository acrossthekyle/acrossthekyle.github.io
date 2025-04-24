import { flatten, uniq } from 'lodash';

import { posts } from '@/cache/posts';
import { stages } from '@/cache/posts/stages';
import Components from '@/components';
import Styles from '@/styles';
import type { Posts } from '@/types';
import { transformPostsOrStagesForMasonry } from '@/utils/components';

const scss = Styles.Pages.Categories.Page;

export async function getStaticPaths() {
  const categories = uniq(
    flatten([...posts, ...stages].map(({ categories }) => categories)),
  );

  return {
    paths: categories.map((category) => `/categories/${category}`),
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const category = context.params.category.toLowerCase();

  const results = [...posts, ...stages]
    .filter(({ categories }) => categories.includes(category))
    .map(({ categories, date, image, snippet, title, uri }) => ({
      categories,
      date,
      image,
      snippet: snippet || null,
      title,
      uri,
    }));

  return {
    props: {
      results,
      category,
      total: results.length,
    },
  };
};

type Props = {
  category: string;
  results: Posts.Post[] | Posts.Stage[];
  total: number;
};

function Page({ category, results, total }: Props) {
  return (
    <Components.View title={`Categories | ${category}`}>
      <h1 className={scss.header}>Category: {category}</h1>
      <p className={scss.total}>{`${total} Item(s)`}</p>
      <Components.Masonry items={transformPostsOrStagesForMasonry(results)} />
    </Components.View>
  );
}

export default Page;
