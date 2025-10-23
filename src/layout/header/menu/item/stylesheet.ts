import tw from '@/styles';

const styles = {
  item: (isOnRoot: boolean) => tw(`
    ${isOnRoot && 'opacity-0'}
    ${isOnRoot && 'animate-elastic-in-from-right'}
  `),
};

export default styles;
