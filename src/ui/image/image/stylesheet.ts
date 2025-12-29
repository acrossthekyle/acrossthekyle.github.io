import tw from '@/styles';

import { getAspectClassNames } from '../utils';

const styles = {
  image: (isInView: boolean, index?: number, color?: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-lg
    ${!color && 'grayscale-100'}
    ${!color ? 'brightness-60' : 'brightness-80'}

    ${getAspectClassNames(index)}

    base:rounded-sm

    ${!color && isInView && `
      brightness-80
      !grayscale-0

      base:brightness-80
      base:!grayscale-100
    `}

    group-hover/figure:scale-102
    group-hover/figure:!grayscale-0
  `),
};

export default styles;
