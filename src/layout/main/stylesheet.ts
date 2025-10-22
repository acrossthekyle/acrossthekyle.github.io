import tw from '@/styles';

const styles = {
  main: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && 'flex-1'}
    flex flex-col

    base:flex-row
  `)
};

export default styles;
