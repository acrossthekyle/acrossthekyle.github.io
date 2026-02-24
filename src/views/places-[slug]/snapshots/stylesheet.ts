import tw from '@/styles';

import { getColSpan } from './stylesheet.utils';

const styles = tw({
  images: `
    grid grid-cols-7 gap-0
    !pb-0

    md:grid-cols-3
  `,
  image: (index: number, total: number) => tw(`
    h-40
    grayscale-100
    duration-300

    hover:grayscale-0

    ${getColSpan(total, index)}
  `),
  view: `
    mt-6
    text-sm

    md:text-xs
  `,
});

export default styles;
