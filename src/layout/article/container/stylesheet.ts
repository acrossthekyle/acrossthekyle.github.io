import tw from '@/styles';

export const styles = {
  container: (isStacked?: boolean) => {
    if (isStacked) {
      return tw(`
        flex flex-col
      `);
    }

    return tw(`
      grid grid-cols-1
      h-auto w-full

      sm:grid-cols-2
      lg:grid-cols-3
      lg:h-full
    `);
  },
};
