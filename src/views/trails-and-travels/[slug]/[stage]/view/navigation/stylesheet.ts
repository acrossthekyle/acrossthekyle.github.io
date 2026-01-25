import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-center gap-4
    pb-8
    border-b-1 border-b-current/15
  `),
  first: `
    text-left
  `,
  last: `
    text-right
  `,
  eyebrow: `
    font-medium
    text-sm
    capitalize
  `,
  title: `
    text-sm
  `,
});

export default styles;
