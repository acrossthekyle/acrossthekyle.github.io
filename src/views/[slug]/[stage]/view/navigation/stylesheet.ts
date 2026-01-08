import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-end
    p-6
    border-t-1

    dark:text-white light:text-black
    dark:border-t-white/15 light:border-t-black/15

    base:p-8
    hecto:p-12
    kilo:p-16
  `),
  first: `
    text-left
  `,
  last: `
    text-right
  `,
});

export default styles;
