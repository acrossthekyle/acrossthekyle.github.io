import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-0 bottom-2
  `,
  items: `
    grid grid-cols-3 grid-rows-3 gap-1
  `,
  item: `
    w-16
    grayscale-100
  `,
  image: `
    rounded-xs
    aspect-square
  `,
});

export default styles;
