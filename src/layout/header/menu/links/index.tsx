import tw from '@/styles';
import { pad } from '@/utils';

import {
  Anchor,
  Label,
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
              <span>
                <Number>{pad(index + 1)}</Number>
                <Text>{link.title}</Text>
              </span>
              <Label>{link.label}</Label>
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
    pr-7

    landscape-constrained:pr-20
  `,
  items: `
    flex flex-col items-end gap-10

    landscape-constrained:gap-4
  `,
})
