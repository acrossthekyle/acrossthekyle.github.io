import tw from '@/styles';

const styles = tw({
  link: (isOnRoot: boolean) => tw(`
    ${!isOnRoot && '-mt-1'}
  `),
  icon: `
    w-6 h-6

    base:w-7
    base:h-7
  `,
});

export default styles;
