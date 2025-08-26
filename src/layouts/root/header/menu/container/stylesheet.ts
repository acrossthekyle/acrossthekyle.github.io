import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean, isOnParent: boolean) => {
    if (isOnRoot) {
      return tw(`
        flex flex-col
      `);
    }

    if (isOnParent) {
      return tw(`
        hidden
        flex flex-col

        md:block
      `);
    }

    return tw(`
      hidden

      lg:block
    `);
  },
});

export default styles;
