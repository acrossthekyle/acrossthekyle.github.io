import tw from '@/styles';

const styles = {
  item: (isFirstLoad: boolean, isOnRoot: boolean) => tw(`
    ${isFirstLoad && 'opacity-0'}
    ${isFirstLoad && 'animate-elastic-in-from-right'}

    ${isOnRoot && `
      group/item
      relative

      base:mr-20
    `}
  `),
};

export default styles;
