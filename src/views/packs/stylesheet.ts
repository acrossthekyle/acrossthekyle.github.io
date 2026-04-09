import tw from '@/styles';

const styles = tw({
  definition: `
    flex justify-between
    mb-4
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  filters: `
    flex gap-2
    my-10
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
  aside: `
    grid grid-cols-2 gap-4
    mt-10
    font-mono font-normal
    text-xtiny
    uppercase
    animate-flicker-in

    sm:mt-0
    sm:text-right
    sm:absolute
    sm:top-9
    sm:right-4
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
    font-sans font-black
    text-sm
    uppercase
    whitespace-nowrap

    md:w-32
    lg:w-64
  `,
  subheading: `
    block
    mt-1
    font-mono font-normal
    text-xtiny
  `,
  grid: `
    grid grid-cols-2 gap-16 gap-y-6
  `,
  item: `
    w-60
    font-sans font-light
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
    font-mono font-normal
    text-xtiny
  `,
});

export default styles;
