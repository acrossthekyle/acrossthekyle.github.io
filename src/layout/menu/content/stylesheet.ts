import tw from '@/styles';

const styles = tw({
  container: (isOpen: boolean) => tw(`
    relative
    flex flex-col-reverse justify-between gap-4
    h-full w-full
    p-4
    pointer-events-auto
    bg-(--background)

    ${isOpen ? `
      translate-y-0
    ` : `
      -translate-y-full
    `}

    motion-safe:duration-450
    motion-safe:ease-in-out

    sm:flex-row-reverse
    sm:justify-start
    sm:gap-8
  `),
  header: `
    sr-only
  `,
  menu: `
    group
    flex flex-col justify-end gap-3
    h-full w-full
    divide-y divide-current/25

    landscape-constrained:gap-3

    sm:gap-6
    sm:divide-y-0
  `,
  item: `
    pb-3

    last:pb-0

    sm:pb-0
  `,
  link: `
    relative
    flex flex-col items-end
    w-full
    font-black
    leading-[0.85]
    text-[min(11vw,90px)]
    uppercase
    tracking-tight
    whitespace-nowrap
    overflow-hidden

    landscape-constrained:text-[min(11vw,32px)]

    sm:text-[min(8vw,90px)]

    motion-safe:duration-300
    motion-safe:hover:font-thin
  `,
  text: (isActive: boolean) => tw(`
    relative
    flex flex-row-reverse items-end

    ${isActive ? 'line-through decoration-1' : ''}
  `),
  arrow: `
    mx-2
    w-5 h-5
  `,
  index: `
    absolute left-0 bottom-0
    block
    pb-1
    font-normal
    text-xtiny text-current/70 text-right
    tracking-widest

    sm:relative
    sm:left-auto
    sm:bottom-auto
  `,
  other: `
    flex flex-col items-start justify-end gap-4
    w-full
    mt-12
    text-xtiny
    uppercase
    tracking-widest

    sm:mt-0
  `,
  cell: `
    flex flex-col justify-start gap-0
  `,
  heading: `
    mb-1.5
    font-black
    text-tiny
    uppercase
  `,
  line: `
    text-current/80
  `,
});

export default styles;
