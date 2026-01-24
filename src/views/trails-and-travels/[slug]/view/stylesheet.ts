import tw from '@/styles';

import { getColSpan } from './utils';

const styles = tw({
  list: `
    grid grid-cols-7 gap-6
    pt-2
    mb-16

    md:grid-cols-3
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
    md:hover:grayscale-0
    md:hover:scale-103
    md:grayscale-100
    md:duration-800
  `,
});

export default styles;
