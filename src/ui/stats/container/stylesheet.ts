import tw from '@/styles';

const styles = {
  container: (columns: number) => tw(`
    grid grid-cols-1 gap-6

    ${columns === 2 && 'sm:grid-cols-2'}
    ${columns === 3 && 'xs:grid-cols-2 sm:grid-cols-3'}
  `),
};

export default styles;
