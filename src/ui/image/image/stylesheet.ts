import tw from '@/styles';

import { getAspectClassNames } from '../utils';

const styles = {
  image: (index?: number) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-lg

    ${getAspectClassNames(index)}
  `),
};

export default styles;
