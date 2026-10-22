import tw from '@/styles';
import { pad } from '@/utils';

import {
  Anchor,
  Number,
  Text,
} from './components';
import { LINKS } from './constants';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export default function Links({ isActive, onClick }: Props) {
  return (
    <nav aria-label="site navigation" className={styles.container}>
      <ul className={styles.items}>
        {LINKS.map((link, index) => (
          <li key={link.url}>
            <Anchor
              index={index}
              isActive={isActive}
              onClick={onClick}
              url={link.url}
            >
              <Number>{pad(index + 1)}</Number>
              <Text>{link.label}</Text>
            </Anchor>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const styles = tw({
  container: `
    flex flex-col items-end
    mt-16
    pr-7

    sm:mt-26
  `,
  items: `
    flex flex-col items-end gap-6

    landscape-constrained:gap-4
  `,
})
