import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-4 top-20 bottom-4 z-2
    flex items-end
  `,
  items: `
    sticky bottom-14
    grid grid-cols-2 gap-2
  `,
  item: (index: number) => tw(`
    ${index === 0 && 'col-start-2'}
    w-32
  `),
  image: `
    rounded-lg
    aspect-square
  `,
});

export default styles;
