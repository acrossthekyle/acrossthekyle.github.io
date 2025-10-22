import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        flex flex-col
        w-full
      `);
    }

    if (isOnParent) {
      return tw(`
        hidden
        flex flex-col

        base:block
      `);
    }

    return tw(`
      hidden

      base:block
    `);
  },
});

export default styles;
