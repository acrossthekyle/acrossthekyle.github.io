import tw from '@/styles';

import { getColSpan } from './utils';

const styles = tw({
  header: `
    pr-14
    mb-4
  `,
  list: `
    grid grid-cols-7 gap-4

    md:grid-cols-3
  `,
  item: (index: number, total: number) => tw(`
    h-44
    ${getColSpan(total, index)}
  `),
  figure: `
    group
    relative
    h-full
    !mt-0
    rounded-lg

    before:absolute
    before:inset-0
    before:rounded-lg
    before:bg-black
    before:opacity-0
    before:duration-500

    hover:before:opacity-25
  `,
  caption: `
    left-2.75
    whitespace-nowrap
    truncate

    md:!text-left
  `,
});

export default styles;
