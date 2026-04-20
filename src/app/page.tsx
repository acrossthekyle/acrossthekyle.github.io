import { cookies } from 'next/headers';

import View from '@/view';

import get from './get';

export default async function Page() {
  const cookieStore = await cookies();
  const view = cookieStore.get('view')?.value || 'albums';

  const data = await get();

  return (
    <View
      data={data}
      view={view}
    />
  );
}
