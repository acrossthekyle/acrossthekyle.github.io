import tw from '@/styles';

const DELAYS = [
  'motion-safe:delay-100',
  'motion-safe:delay-150',
  'motion-safe:delay-200',
  'motion-safe:delay-250',
  'motion-safe:delay-300',
];

const styles = tw({
  container: (isOpen: boolean) => tw(`
    relative
    flex flex-col justify-between gap-0
    h-full w-full
    pointer-events-auto
    bg-(--background)

    ${isOpen ? `
      translate-y-0
    ` : `
      -translate-y-full
    `}

    motion-safe:duration-450
    motion-safe:ease-out
  `),
  header: `
    sr-only
  `,
  menu: `
    flex flex-col justify-end gap-3
    h-svh w-full
    pl-3 pr-4 pb-24
  `,
  item: (isActive: boolean, index: number) => tw(`
    relative

    motion-safe:duration-700
    motion-safe:ease-in-out

    ${isActive ? `
      motion-safe:translate-x-0
      motion-safe:opacity-100
      ${DELAYS[index]}
    ` : `
      motion-safe:opacity-0
      motion-safe:delay-450
      motion-safe:translate-x-full
    `}
  `),
  link: (isCurrent: boolean) => tw(`
    group/link
    relative
    flex flex-col items-start
    w-full
    font-black
    leading-[0.85]
    text-[min(11vw,90px)]
    uppercase
    tracking-tight
    whitespace-nowrap
    overflow-hidden

    landscape-constrained:text-[min(11vw,32px)]

    motion-safe:duration-300
    motion-safe:hover:font-thin

    ${isCurrent ? `
      dark:text-yellow-300
      light:text-yellow-500
    ` : ''}
  `),
  text: `
    relative
    flex flex-row items-end
  `,
  arrow: `
    mx-2
    w-5 h-5
  `,
  index: `
    absolute right-0 top-0
    block
    pb-1
    font-bold
    text-xtiny
    tracking-widest

    motion-safe:duration-300
    motion-safe:group-hover/link:font-black
    motion-safe:group-hover/link:text-xs
  `,
  footer: `
    absolute bottom-4 left-4 right-4
    flex flex-col gap-1
    text-xtiny
    uppercase
    tracking-widest

    sm:flex-row
    sm:justify-between

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  cell: `
    flex flex-col justify-start gap-0
  `,
  line: `
    text-current/80
  `,
});

export default styles;
