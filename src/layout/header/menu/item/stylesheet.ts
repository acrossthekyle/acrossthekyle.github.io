import tw from '@/styles';

const styles = {
  item: (isFirstLoad: boolean) => tw(`
    ${isFirstLoad && 'opacity-0'}
    ${isFirstLoad && 'animate-elastic-in-from-right'}
  `),
};

export default styles;
