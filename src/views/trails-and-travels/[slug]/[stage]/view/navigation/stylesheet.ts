import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-center gap-4
    mt-16
    pt-16
    border-t-1 border-t-current/15
  `),
  first: `
    text-left
  `,
  last: `
    text-right
  `,
  eyebrow: `
    font-mono
    text-xs text-current/75
    uppercase
  `,
  title: `
    font-mono
    text-sm
  `,
});

export default styles;
