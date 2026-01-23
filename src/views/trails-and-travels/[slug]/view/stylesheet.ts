import tw from '@/styles';

import { getColSpan } from './utils';

const styles = tw({
  subtitle: `
    flex justify-between gap-8
    w-full
    text-current/75
    uppercase
    font-mono !text-xs
  `,
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
    grayscale-100
    duration-800

    hover:grayscale-0
    hover:scale-103
  `,
  caption: `
    absolute bottom-1.5 right-2.5 z-2
    text-white text-shadow-lg
    font-bold font-mono
    uppercase
  `,
});

export default styles;
