import tw from '@/styles';

const styles = {
  container: (numberOfColumns: number) => tw(`
    grid grid-cols-1 gap-8
    !mb-0

    ${numberOfColumns === 2 ? 'md:grid-cols-2' : 'xs:grid-cols-2 md:grid-cols-3'}
  `),
};

export default styles;
