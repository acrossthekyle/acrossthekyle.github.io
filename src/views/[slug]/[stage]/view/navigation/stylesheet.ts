import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-end
  `),
  first: `
    text-left
  `,
  last: `
    text-right
  `,
});

export default styles;
