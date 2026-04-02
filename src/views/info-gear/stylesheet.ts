import tw from '@/styles';

const styles = tw({
  filters: `
    flex gap-4
    mt-10
  `,
  link: (isActive: boolean) => tw(`
    font-mono font-bold
    text-xtiny
    uppercase

    border-1 border-(--foreground)
    py-1 px-1.25
    rounded-md

    ${isActive ? `bg-(--foreground) text-(--background)` : `text-(--foreground)`}
  `),
  section: `
    relative
    flex flex-col gap-4
    mt-10

    lg:flex-row
    lg:gap-12
  `,
  heading: `
    flex-none
    mb-2
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
    whitespace-nowrap

    md:grid
    md:grid-cols-2
    md:w-32
    lg:mb-0
    lg:w-48
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50

    lg:inline-block
    lg:mr-3
  `,
  grid: `
    columns-3xs gap-4

    md:ml-16
    lg:columns-2
    lg:ml-20
  `,
  eyebrow: `
    block
    mb-0.5
    font-normal
    text-xtiny text-(--foreground)/50
    normal-case
  `,
  item: `
    w-80
    mb-8
    font-mono
    text-xs text-(--foreground)
    uppercase
    break-inside-avoid-column
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-xtiny text-(--foreground)/70
  `,
  aside: `
    grid grid-cols-2 gap-4
    mt-10
    font-mono
    text-xtiny text-(--foreground)
    uppercase

    xs:flex
    xs:flex-row
    sm:mt-0
    sm:flex-col
    sm:text-right
    sm:absolute
    sm:top-4
    sm:right-4
  `,
});

export default styles;
