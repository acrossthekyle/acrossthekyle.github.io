import tw from '@/styles';

const styles = {
  main: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && 'flex-1'}
    flex flex-col
    duration-300

    base:flex-row
  `)
};

export default styles;
