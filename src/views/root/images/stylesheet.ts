import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-0 bottom-2
  `,
  items: `
    grid grid-cols-3 grid-rows-3 gap-1
  `,
  item: `
    relative
    w-16
  `,
  link: `
    group
  `,
  image: `
    rounded-xs
    aspect-square
    duration-300

    group-hover:opacity-75
  `,
});

export default styles;
