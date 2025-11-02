import tw from '@/styles';

const styles = {
  item: (isFirstLoad: boolean, isOnRoot: boolean) => tw(`
    ${isFirstLoad && 'opacity-0'}
    ${isFirstLoad && 'animate-elastic-in-from-right'}

    ${isOnRoot && `
      mb-1

      base:mb-0
      base:mr-20
    `}
  `),
};

export default styles;
