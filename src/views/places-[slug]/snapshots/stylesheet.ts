import tw from '@/styles';

import { getColSpan } from './stylesheet.utils';

const styles = tw({
  images: `
    grid grid-cols-7 gap-6
    !pb-0

    md:grid-cols-3
    md:gap-8
  `,
  image: (index: number, total: number) => tw(`
    h-40

    ${getColSpan(total, index)}
  `),
  view: `
    mt-6
    text-sm

    md:text-xs
  `,
});

export default styles;
