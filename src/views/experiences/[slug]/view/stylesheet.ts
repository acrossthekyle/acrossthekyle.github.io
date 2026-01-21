import tw from '@/styles';

import { getColSpan } from './utils';

const styles = tw({
  badge: `
    flex items-center gap-1
  `,
  icon: `
    w-3 h-3
    stroke-3
  `,
  subtitle: `
    block
    text-current/50
  `,
  list: `
    grid grid-cols-3 gap-6
    pt-2
  `,
  item: (index: number, total: number) => tw(`
    h-44
    ${getColSpan(total, index)}
  `),
  figure: `
    h-full
    overflow-hidden
    rounded-lg
  `,
  image: `
    grayscale-100
    duration-800

    hover:grayscale-0
    hover:scale-103
  `,
});

export default styles;
