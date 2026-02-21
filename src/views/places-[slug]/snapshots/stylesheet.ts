import tw from '@/styles';

import { getColSpan } from './stylesheet.utils';

const styles = {
  images: (canShowAll: boolean) => tw(`
    grid grid-cols-7 gap-4
    overflow-hidden
    ${!canShowAll && 'h-124'}
    duration-300

    md:grid-cols-3
  `),
  image: (index: number, total: number) => tw(`
    h-40

    ${getColSpan(total, index)}
  `),
  view: (canShowAll: boolean) => tw(`
    relative ${canShowAll ? 'top-0' : '-top-14'} z-3
    w-full h-14
    py-2
    text-center text-sm
    bg-linear-to-t from-(--background) to-transparent

    md:text-xs
  `),
};

export default styles;
