import tw from '@/styles';

const styles = tw({
  container: (isActive: boolean) => tw(`
    w-full
    rounded-md
    p-3
    text-left
    uppercase
    duration-300

    ${isActive && `bg-(--background) text-(--foreground)`}
    ${!isActive && `md:hover:bg-(--background)/12.5`}
  `),
  heading: `
    flex gap-4
    text-tiny
    font-bold
  `,
  index: `
    font-normal
    opacity-70
  `,
  items: `
    mt-1
    ml-23.75
  `,
  item: `
    text-xtiny
    opacity-70
  `,
});

export default styles;
