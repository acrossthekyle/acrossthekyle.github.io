import type { Metadata } from 'next';

import { introduction } from '@/constants';
import View from '@/views/about';

export const metadata: Metadata = {
  title: 'About',
  description: introduction,
};

export default async function Page() {
  return <View />;
}
