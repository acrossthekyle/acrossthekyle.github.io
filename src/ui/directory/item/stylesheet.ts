import tw from '@/styles';

const styles = {
  item: (isOnChild: boolean) => tw(`
    ${!isOnChild && 'opacity-0'}
    ${!isOnChild && 'animate-elastic-in-from-right'}
  `),
};

export default styles;
