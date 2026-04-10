import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-4 top-11 bottom-4 z-2
    flex items-start
  `,
  items: `
    grid grid-cols-2 gap-2
  `,
  item: (index: number) => tw(`
    ${index === 0 && 'col-start-3'}
    w-24
  `),
  image: `
    rounded-lg
    aspect-square
  `,
});

export default styles;
