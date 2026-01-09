import tw, { padding } from '@/styles';

const styles = {
  container: (bottom?: boolean, top?: boolean) => tw(`
    ${padding.full}

    ${top && `
      border-b-1

      dark:border-b-white/15 light:border-b-black/15
    `}

    ${bottom && `
      border-t-1

      dark:border-t-white/15 light:border-t-black/15
    `}
  `),
};

export default styles;
