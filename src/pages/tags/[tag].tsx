import { capitalize, map } from 'lodash';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { posts } from '@/cache/posts';
import Components from '@/components';
import Styles from '@/styles';
import type { Posts } from '@/types';
import Utils from '@/utils';

const scss = Styles.Pages.Tags.Tag.Page;

function mutateTag(tag: string | null) {
  if (tag === null) {
    return '';
  }

  let divider = ' ';

  if (tag.includes('-')) {
    divider = '-';
  }

  return map(tag.split(divider), capitalize).join(divider);
}

export const getServerSideProps = async (request) => {
  const tag = request.query.tag[0].toLowerCase();

  const results = posts
    .filter(({ tags }) => tags.includes(tag))
    .map(({ date, image, snippet, tags, title, uri }) => ({
      date,
      image,
      snippet,
      tags,
      title,
      uri,
    }));

  return {
    props: {
      posts: results,
      tag: mutateTag(tag),
      total: results.length,
    },
  };
};

type Props = {
  posts: Posts.Post[];
  tag: string;
  total: number;
};

function Page({ posts, tag, total }: Props) {
  return (
    <Components.View title={`Tags | ${tag}`}>
      <h1 className={scss.header}>{tag}</h1>
      <p className={scss.total}>{`${total} Item(s)`}</p>
      <Components.Masonry items={Utils.masonry.transformPosts(posts)} />
    </Components.View>
  );
}

export default Page;
