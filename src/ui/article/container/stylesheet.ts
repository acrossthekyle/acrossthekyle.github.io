import tw from '@/styles';

const styles = tw({
  container: (hasBorder: boolean) => tw(`
    p-6
    opacity-0
    animate-in-fade

    ${hasBorder && `
      border-b-1

      dark:border-b-white/15 light:border-b-black/15

      last:border-b-0
    `}

    dark:text-white light:text-black

    base:p-8
    hecto:p-12
    kilo:p-16
  `),
});

export default styles;
