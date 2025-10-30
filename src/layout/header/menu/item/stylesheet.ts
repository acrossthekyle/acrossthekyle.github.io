import tw from '@/styles';

const styles = {
  item: (isFirstLoad: boolean, isOnRoot: boolean) => tw(`
    ${isFirstLoad && 'opacity-0'}
    ${isFirstLoad && 'animate-elastic-in-from-right'}

    ${isOnRoot && `
      [:nth-child(1)]:base:w-165
      [:nth-child(2)]:base:w-150
      [:nth-child(3)]:base:w-130
    `}
  `),
};

export default styles;
