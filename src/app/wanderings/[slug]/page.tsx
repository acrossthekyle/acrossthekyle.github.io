import type { Metadata } from 'next';

import get from './get';

type GenerateMetadata = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: GenerateMetadata): Promise<Metadata> {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'Sorry, this does not exist',
    };
  }

  return {
    title: `${data.title.join(' ')} | Wanderings`,
    description: data.description[0],
  };
};

export default function Page() {
  return null;
}
