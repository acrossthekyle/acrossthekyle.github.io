import tw from '@/styles';

import { getAspectClassNames } from '../utils';

const styles = {
  placeholder: (isLoading: boolean, index: number) => tw(`
    relative

    ${isLoading && getAspectClassNames(index)}
  `),
};

export default styles;
