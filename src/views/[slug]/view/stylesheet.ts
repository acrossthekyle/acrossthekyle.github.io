import tw, { padding } from '@/styles';

const styles = tw({
  gear: `
    flex items-center justify-between
    border-t-1

    dark:border-t-white/15 light:border-t-black/15

    ${padding.full}
  `,
  icon: `
    w-5 h-5
    stroke-2
  `,
});

export default styles;
