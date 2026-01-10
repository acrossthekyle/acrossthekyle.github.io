import tw, { padding } from '@/styles';

const styles = tw({
  container: (hasBorder: boolean) => tw(`
    ${hasBorder && `
      border-b-1

      dark:border-b-white/15 light:border-b-black/15

      last:border-b-0
    `}

    ${padding.full}
  `),
});

export default styles;
