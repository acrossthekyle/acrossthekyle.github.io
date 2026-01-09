import tw, { padding } from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-end
    border-t-1

    dark:border-t-white/15 light:border-t-black/15

    ${padding.full}
  `),
  first: `
    flex flex-col
    text-left
  `,
  last: `
    text-right
  `,
  left: `
    flex items-center justify-start gap-1
  `,
  right: `
    flex items-center justify-end gap-1
  `,
  icon: `
    w-3.5 h-3.5
  `,
});

export default styles;
