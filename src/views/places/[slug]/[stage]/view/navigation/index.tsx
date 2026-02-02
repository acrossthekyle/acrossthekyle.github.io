import { LinkInternal } from '@/ui/link';
import type { Navigation } from '@/types';

type Props = {
  next?: Navigation;
  slug: string;
};

export default function Navigation({ next, slug }: Props) {
  return (
    <section aria-label="supplementary navigation">
      {next !== undefined ? (
        <LinkInternal href={`/places/${slug}/${next.index}`}>
          Next {next.label}
        </LinkInternal>
      ) : (
        <LinkInternal href={`/places/${slug}`}>
          The End: Back to summary
        </LinkInternal>
      )}
    </section>
  );
}
