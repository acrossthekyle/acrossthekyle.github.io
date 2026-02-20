import tw from '@/styles';

import { getColSpan } from './stylesheet.utils';

const styles = tw({
  container: `
    relative
  `,
  images: (canShowAll: boolean) => tw(`
    grid grid-cols-7 gap-4
    overflow-hidden
    ${!canShowAll && 'h-128'}
    duration-300

    md:grid-cols-3
  `),
  image: (index: number, total: number) => tw(`
    h-40

    ${getColSpan(total, index)}
  `),
  view: `
    absolute top-1 right-0
    text-right text-sm

    md:text-xs
  `,
});

export default styles;
