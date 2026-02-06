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
    h-full
    !mt-0
    rounded-lg
    duration-500

    md:hover:scale-104
  `,
  image: `
    md:hover:grayscale-0
    md:grayscale-100
    md:duration-800
  `,
});

export default styles;
