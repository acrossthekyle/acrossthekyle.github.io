'use client';

import { Article } from '@/ui/article';

import { Breakdown, Header, Pictures } from './sections';
import Loading from './loading';
import { useModel } from './model';

type Props = {
  slug: string;
};

export default function View({ slug }: Props) {
  const { handleOnScrollEnd, shown, data } = useModel(slug);

  if (!data) {
    return <Loading />;
  }

  return (
    <Article onScrollEnd={handleOnScrollEnd}>
      <Header title={data.title} />
      <Breakdown data={data} />
      <Pictures slug={slug} stages={[...data.stages].splice(0, shown)} />
    </Article>
  );
}
