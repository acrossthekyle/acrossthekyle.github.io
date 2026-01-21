import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-end

    mt-16
  `),
  first: `
    flex flex-col
    text-left
  `,
  last: `
    text-right
  `,
});

export default styles;
