import tw from '@/styles';

const styles = {
  container: (numberOfColumns: number) => tw(`
    grid grid-cols-1 gap-8
    !pb-0

    ${numberOfColumns === 2 && 'sm:grid-cols-2'}
    ${numberOfColumns === 3 && 'xs:grid-cols-2 sm:grid-cols-3'}
  `),
};

export default styles;
