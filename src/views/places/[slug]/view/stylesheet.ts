import tw from '@/styles';

import { getColSpan } from './utils';

const styles = tw({
  marker: `
    absolute z-2
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
    h-full
    rounded-lg
  `,
  image: `
    md:hover:grayscale-0
    md:grayscale-100
    md:duration-800
  `,
});

export default styles;
