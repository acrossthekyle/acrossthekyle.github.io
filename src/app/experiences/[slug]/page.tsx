import type { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = await params;

  const response = await fetch(`${process.env.BASE_URL}api/data/${slug.toLowerCase()}`);

  if (!response.ok) {
    return {
      title: 'Experience Not Found',
      description: 'That experience does not exist',
    };
  }

  const data = await response.json();

  return {
    title: `${data.title.join(' ')} | Experiences`,
    description: data.description[0],
  };
};

export default function Page() {
  return null;
}
