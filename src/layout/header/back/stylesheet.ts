import tw from '@/styles';

const styles = tw({
  close: (isOnRoot: boolean) => {
    if (isOnRoot) {
      return tw(`
        hidden
      `);
    }

    return tw(`
      block
      font-bold font-stretch-ultra-condensed
      text-xl

      base:hidden
    `);
  },
});

export default styles;
