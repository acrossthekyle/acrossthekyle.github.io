import tw from '@/styles';

export const styles = tw({
  container: (isOpen: boolean) => tw(`
    relative
    flex flex-col justify-between
    h-full w-full
    pointer-events-auto
    bg-(--background)
    border-r-1 border-current/10

    sm:w-[50vw]
    lg:w-[33.33333336vw]

    motion-safe:duration-200
    ${isOpen ? `motion-safe:translate-y-0 motion-safe:sm:translate-x-0 motion-safe:opacity-100` : `motion-safe:-translate-y-8 motion-safe:sm:translate-y-0 motion-safe:sm:-translate-x-8 motion-safe:opacity-0`}
  `),
  header: `
    absolute top-4 left-4 z-2
    font-bold font-serif
    uppercase
    text-(--foreground)

    sm:right-4
    sm:left-auto
  `,
  menu: `
    flex flex-col justify-end gap-6
    h-svh w-full
    px-4 pb-16
  `,
  item: `
    relative
  `,
  link: `
    group/link
    relative
    flex flex-col items-start gap-1
    w-full
    font-serif
    leading-[0.85]
    text-[min(11vw,50px)] text-(--foreground)
    uppercase
    tracking-tight
    whitespace-nowrap
    overflow-hidden
    italic

    sm:text-[min(6vw,44px)]
    lg:text-[min(4vw,50px)]

    landscape-constrained:text-[min(11vw,32px)]

    motion-safe:duration-300
    motion-safe:hover:font-thin
    motion-safe:hover:tracking-wide
  `,
  text: (isCurrent: boolean) => tw(`
    relative
    flex flex-row items-end

    ${isCurrent ? `
      line-through decoration-1
    ` : ''}
  `),
  dash: `
    text-sm
  `,
  context: `
    font-sans font-extralight
    text-tiny
    tracking-widest
    not-italic
  `,
  arrow: `
    mx-2
    w-5 h-5
    stroke-1
  `,
  index: `
    absolute right-0 top-0
    block
    pb-1
    font-bold
    text-xtiny
    tracking-[0.25rem]
  `,
  footer: `
    absolute bottom-4 left-4 right-4
    flex flex-col gap-1
    text-xtiny text-(--foreground)/75
    font-medium font-mono
    uppercase
    tracking-tight

    sm:flex-row
    sm:justify-between
  `,
  cell: `
    flex flex-col justify-start gap-0
  `,
  line: `
    text-current/80
  `,
});


