import tw from '@/styles';

const styles = {
  placeholder: (isLoading: boolean) => tw(`
    relative

    ${isLoading && `
      aspect-square

      base:aspect-3/2
    `}
  `),
};

export default styles;
