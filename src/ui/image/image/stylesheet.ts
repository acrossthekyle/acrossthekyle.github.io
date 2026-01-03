import tw from '@/styles';

import { getAspectClassNames } from '../utils';

const styles = {
  image: (isInView: boolean, index?: number, color?: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-sm
    ${!color && 'grayscale-100'}
    ${!color ? 'brightness-60' : 'brightness-100'}

    ${getAspectClassNames(index)}

    ${!color && isInView && `
      brightness-100
      !grayscale-0

      base:brightness-100
      base:!grayscale-100
    `}

    group-hover/figure:scale-102
    group-hover/figure:!grayscale-0
  `),
};

export default styles;
