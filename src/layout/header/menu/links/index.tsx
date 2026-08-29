import tw from '@/styles';

import Anchor from './anchor';
import { LINKS } from './constants';
import Icon from './icon';
import Prefix from './prefix';

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
              isExternal={link.isExternal}
              onClick={onClick}
              url={link.url}
            >
              <Prefix>{link.prefix}</Prefix>
              {link.label}
              <Icon isExternal={link.isExternal} />
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
    mt-12
    p-6

    sm:mt-10
  `,
  items: `
    flex flex-col items-end gap-6
    text-xs
    font-semibold
    uppercase
    tracking-wider

    landscape-constrained:gap-4

    sm:text-xtiny
  `,
})
