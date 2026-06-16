import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: '404',
  description: 'Nothing here',
};

export default async function Page() {
  const data = await get();

  return notFound();
}
