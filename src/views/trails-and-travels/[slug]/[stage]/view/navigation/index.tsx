import { LinkItalic } from '@/ui/link';
import type { Navigation } from '@/types';

import styles from './stylesheet';

type Props = {
  next?: Navigation;
  slug: string;
};

export default function Navigation({ next, slug }: Props) {
  return (
    <section
      aria-label="supplementary navigation"
      className={styles.container}
    >
      {next === undefined && (
        <LinkItalic href={`/trails-and-travels/${slug}`}>
          The End: Back to summary
        </LinkItalic>
      )}
      {next !== undefined && (
        <LinkItalic href={`/trails-and-travels/${slug}/${next.index}`}>
          Next: {next.label} {next.index}, {next.title.join(' ')}
        </LinkItalic>
      )}
    </section>
  );
}
