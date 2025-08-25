import type { Metadata } from 'next';

import View from '@/views/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Hello, I'm Kyle, a crafty UI developer who calls Chicago home, and hiking long-distance trails a vacation. Reach out if you're interested in working together, or want to know more about my travels.`,
};

export default async function Page() {
  return <View />;
}
