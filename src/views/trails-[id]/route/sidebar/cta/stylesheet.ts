import tw from '@/styles';

const styles = tw({
  container: (isActive: boolean) => tw(`
    w-full
    p-3
    text-left
    uppercase
    duration-300
    rounded-md

    ${isActive && `bg-(--background) text-(--foreground)`}
    ${!isActive && `md:hover:bg-(--background)/12.5`}
  `),
  heading: `
    flex flex-col gap-1
    text-tiny
    font-bold

    lg:flex-row
    lg:gap-4
  `,
  index: `
    font-normal
    opacity-70
  `,
  items: `
    mt-1

    lg:ml-23.75
  `,
  item: `
    text-xtiny
    opacity-70
  `,
});

export default styles;
