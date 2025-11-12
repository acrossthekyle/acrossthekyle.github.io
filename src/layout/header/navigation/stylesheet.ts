import tw from '@/styles';

const styles = tw({
  toggle: (isOnRoot: boolean) => tw(`
    ${isOnRoot && 'pr-4'}
    p-2

    base:hidden
  `),
  container: (isOnRoot: boolean, isOnParent: boolean, isOpen: boolean) => {
    const common = `
      fixed ${isOpen ? 'right-0' : '-right-full'} top-0 z-10
      w-full h-full
      bg-white dark:bg-black

      base:right-auto
      base:top-auto
      base:h-auto
      base:static
    `;

    if (isOnRoot) {
      return tw(`
        ${isOpen ? common : 'absolute bottom-0 left-0'}

        base:static
        base:pl-2
        base:pb-2
        base:flex
        base:flex-col
        base:w-full
      `);
    }

    if (isOnParent) {
      return tw(`
        ${common}

        flex flex-col

        base:block
      `);
    }

    return tw(`
      ${common}

      base:block
    `);
  },
  wrapper: `
    flex flex-col justify-between
    h-full

    base:block
  `,
  heading: (isOnRoot: boolean, isOpen: boolean) => tw(`
    ${!isOpen && 'hidden'}
    ${isOnRoot && 'invisible'}
    pl-4 pt-4
    text-4xl/8
    font-extrablack font-stretch-ultra-condensed
    tracking-tight
    uppercase

    pico:text-5xl/9
    nano:text-6xl/11.5
    milli:text-7xl/13.75
    deci:text-8xl/18.5
  `),
  close: (isOpen: boolean) => tw(`
    ${!isOpen && 'hidden'}
    absolute top-1 right-1
    p-2
  `),
  x: `
    w-10 h-10
    stroke-2 stroke-current/90
  `,
  icon: `
    w-8 h-8
    stroke-2 stroke-current/90
  `,
  list: `
    flex flex-col
    w-full
    pl-4 pb-4

    base:pl-0
    base:pb-0
  `,
  item: (isFirstLoad: boolean, isOnRoot: boolean) => tw(`
    ${isFirstLoad && 'opacity-0'}
    ${isFirstLoad && 'animate-elastic-in-from-right'}

    ${isOnRoot && `
      group/item

      deka:relative
    `}
  `),
  link: (
    isOnRoot: boolean,
    isOnParent: boolean,
    isActive: boolean,
    isOpen: boolean,
  ) => {
    const root = `
      block
      overflow-hidden
      uppercase

      deka:relative
    `;

    const fonts = `
      text-5xl/9
      font-extrablack font-stretch-ultra-condensed
      tracking-tight

      pico:text-6xl/11.5
      nano:text-7xl/13.75
      milli:text-8xl/18.5
      deci:text-9xl/24.5
    `;

    if (isOpen) {
      return tw(`
        ${root}
        ${fonts}
      `);
    }

    if (isOnRoot) {
      return tw(`
        ${root}
        ${fonts}

        base:duration-200
        base:font-stretch-normal
        base:tracking-tight
        base:text-8xl/18.5
        tera:text-9xl/26

        hover:font-extralight
        hover:tracking-wide
      `);
    }

    const sub = `
      duration-200
      ${!isActive && 'text-current/25'}
      font-thin
      font-stretch-ultra-condensed

      hover:text-current/90
    `;

    if (isOnParent) {
      return tw(`
        ${root}
        ${sub}

        text-5xl/9.25

        deka:text-6xl/11.5
        mega:text-8xl/18.5
        tera:text-9xl/26
      `);
    }

    return tw(`
      ${root}
      ${sub}

      base:text-5xl/9.25
      tera:text-7xl/14
      peta:text-9xl/26
    `);
  },
  block: `
    relative
    block
  `,
  index: (isOnChild: boolean) => tw(`
    ml-0.75
    text-tiny/2
    font-light font-stretch-condensed
    tracking-normal

    base:ml-1.5

    ${isOnChild ? 'mega:text-tiny/3' : 'base:text-sm/3'}
  `),
  info: `
    hidden
    absolute left-4 bottom-60 z-1
    w-52
    pr-4
    uppercase
    text-xs/4
    font-mono font-light font-stretch-normal
    tracking-wide
    opacity-0
    duration-200

    group-hover/item:opacity-100

    base:block
    deka:text-right
    deka:right-0
    deka:left-auto
    deka:bottom-0
    deka:pr-0
  `,
});

export default styles;
