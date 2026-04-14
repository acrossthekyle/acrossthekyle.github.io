import tw from '@/styles';

const styles = tw({
  header: `
    grid grid-cols-3 gap-0
    w-full
    font-mono
    text-xtiny
    uppercase
  `,


  filters: `
    flex gap-2
    mt-8 mb-10
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
  sticky: `
    absolute right-4 top-11 bottom-4 z-2
    flex items-start
  `,
  aside: `
    sticky top-12
    grid grid-cols-2 gap-4
    font-mono font-normal
    text-xtiny
    uppercase

    motion-safe:animate-flicker-in

    sm:text-right
  `,
  section: `
    relative
    flex flex-col gap-1
    mb-12

    md:flex-row

    last:mb-0
  `,
  heading: `
    sticky top-12 z-10
    self-start
    flex-none
    w-24
    leading-[1]
    font-mono
    text-xs
    uppercase
    whitespace-nowrap

    md:w-32
    lg:w-64
  `,
  subheading: `
    block
    mt-1.5
    leading-[1]
    font-mono font-normal
    text-xtiny
  `,
  grid: `
    grid grid-cols-2 gap-16 gap-y-6
  `,
  item: `
    w-60
    leading-[1]
    font-mono
    text-xs
    uppercase
  `,
  eyebrow: `
    block
    pb-0.5
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  lid: `
    block
    pt-1
    font-mono font-normal
    text-xtiny
  `,
});

export default styles;
