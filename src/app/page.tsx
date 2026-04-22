import View from '@/view';

import get from './get';

type Params = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: Params) {
  const { a, c } = await searchParams;

  const data = await get();

  return (
    <View data={data} filterBy={{ id: a, category: c}} />
  );
}
