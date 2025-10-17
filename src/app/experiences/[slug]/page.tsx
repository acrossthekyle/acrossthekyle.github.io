import type { Metadata } from 'next';

import get from './get';

type Params = Promise<{ slug: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const data = get(slug.toLowerCase());

  if (data === null) {
    return {
      title: '404 Not Found',
      description: 'Sorry, this does not exist',
    };
  }

  return {
    title: `${data.title.join(' ')} | Experiences`,
    description: data.description[0],
  };
};

export default function Page() {
  return null;
}
