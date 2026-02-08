import tw from '@/styles';

const styles = tw({
  list: (isMenu?: boolean) => tw(`
    grid grid-cols-2 gap-8
    ${isMenu && '!mb-16 last-of-type:!mb-0'}

    md:grid-cols-3
  `),
  hr: `
    w-3
    my-7
    border-(--foreground)/50
  `,
});

export default styles;
