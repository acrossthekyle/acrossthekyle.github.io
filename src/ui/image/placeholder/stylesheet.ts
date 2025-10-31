import tw from '@/styles';

const styles = {
  placeholder: (isLoading: boolean) => tw(`
    relative

    ${isLoading && `
      landscape:aspect-3/2
      portrait:aspect-10/9

      base:landscape:aspect-16/9
      base:portrait:aspect-16/9
    `}
  `),
};

export default styles;
