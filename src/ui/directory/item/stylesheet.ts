import tw from '@/styles';

const styles = {
  item: (canAnimate: boolean) => tw(`
    ${!canAnimate ? 'opacity-100' : 'opacity-0'}
    ${canAnimate && 'animate-elastic-in-from-right'}
  `),
};

export default styles;
