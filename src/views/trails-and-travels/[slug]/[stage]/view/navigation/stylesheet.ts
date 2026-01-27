import tw from '@/styles';

const styles = tw({
  nav: (hasPrevious: boolean) => tw(`
    flex ${hasPrevious ? 'justify-between' : 'justify-end'} items-center gap-4
    mt-16
    pt-8
    border-t-1 border-t-current/10
  `),
  first: `
    text-left
  `,
  last: `
    text-right
  `,
  eyebrow: `
    font-bold font-sans
    not-italic
    text-sm
    capitalize
  `,
  title: `
    text-sm
  `,
});

export default styles;
