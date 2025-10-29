import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-2 gap-3
    opacity-0
    animate-elastic-in-from-right

    base:gap-6
  `,
  half: `
    grid gap-3

    base:gap-6
  `,
  cell: `
    group
    relative
  `,
  image: (index: number) => tw(`
    ${index === 0 ? `
      group-[&:nth-child(odd)]:aspect-square group-[&:nth-child(even)]:aspect-9/10
    ` : `
      group-[&:nth-child(even)]:aspect-square group-[&:nth-child(odd)]:aspect-9/10
    `}
  `),
  item: `
    block
    text-xs
    mb-0.5 mr-4
    opacity-0
    animate-elastic-in-from-right
  `,
  index: `
    inline-block
    w-5
  `,
});

export default styles;
