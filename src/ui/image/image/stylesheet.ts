import tw from '@/styles';

import { getAspectClassNames } from '../utils';

const styles = {
  image: (isInView: boolean, index: number) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-2xl
    brightness-60
    grayscale-100

    ${getAspectClassNames(index)}

    base:rounded-sm

    ${isInView && `
      brightness-80
      !grayscale-0

      base:brightness-60
      base:!grayscale-100
    `}

    group-hover/figure:scale-102
    group-hover/figure:!grayscale-0
  `),
};

export default styles;
