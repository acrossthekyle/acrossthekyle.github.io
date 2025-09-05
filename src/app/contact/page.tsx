import type { Metadata } from 'next';

import { introduction } from '@/constants';
import View from '@/views/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: `${introduction} Reach out if you want to know more.`,
};

export default async function Page() {
  return <View />;
}
