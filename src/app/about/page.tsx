import type { Metadata } from 'next';

import View from '@/views/about';

export const metadata: Metadata = {
  title: 'About',
  description: `I'm a thru-hiker and UI developer seeking new ways to move forward with intention and curiosity. Find me on the socials: @acrossthekyle.`,
};

export default async function Page() {
  return <View />;
}
