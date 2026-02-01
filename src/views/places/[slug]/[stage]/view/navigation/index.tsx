import Link from 'next/link';

import { TerminiRange } from '@/ui/termini';
import type { Navigation } from '@/types';

type Props = {
  next?: Navigation;
  slug: string;
};

export default function Navigation({ next, slug }: Props) {
  return (
    <section aria-label="supplementary navigation">
      {next !== undefined ? (
        <Link href={`/places/${slug}/${next.index}`}>
          Next {next.label}:{' '}<TerminiRange termini={next.termini} />
        </Link>
      ) : (
        <Link href={`/places/${slug}`}>
          The End: Back to summary
        </Link>
      )}
    </section>
  );
}
