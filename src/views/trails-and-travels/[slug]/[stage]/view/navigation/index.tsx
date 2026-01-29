import { LinkItalic } from '@/ui/link';
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
        <LinkItalic href={`/trails-and-travels/${slug}/${next.index}`}>
          Next {next.label}:{' '}<TerminiRange termini={next.termini} />
        </LinkItalic>
      ) : (
        <LinkItalic href={`/trails-and-travels/${slug}`}>
          The End: Back to summary
        </LinkItalic>
      )}
    </section>
  );
}
