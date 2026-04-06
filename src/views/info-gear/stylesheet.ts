import tw from '@/styles';

const styles = tw({
  filters: `
    flex gap-2
    mt-10
    animate-fade-in
  `,
  link: (isActive: boolean) => tw(`
    font-mono font-bold
    text-xtiny
    uppercase
    border-1 border-(--foreground)
    py-1 px-1.25
    rounded-xs

    ${isActive ? `bg-(--foreground) text-(--background)` : `text-(--foreground)`}
  `),
  section: `
    relative
    flex flex-col gap-4
    mt-10
    animate-fade-in

    lg:flex-row
    lg:gap-12
  `,
  heading: `
    flex-none
    mb-2
    font-mono font-bold
    text-tiny
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
    text-current/50

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
    text-xtiny text-current/50
    normal-case
  `,
  item: `
    w-80
    mb-8
    font-mono
    text-xs
    uppercase
    break-inside-avoid-column
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-xtiny text-current/70
  `,
  aside: `
    grid grid-cols-2 gap-4
    mt-10
    font-mono
    text-xtiny
    uppercase
    animate-flicker-in

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
