import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean, shouldPush: boolean) => {
    const common = `
      absolute ${shouldPush ? 'top-0' : '-top-[calc(110vh)]'} left-0 z-10
      w-full h-[calc(110vh)]
      duration-300
      backdrop-blur-md

      dark:bg-black/80 light:bg-white/80

      base:left-auto
      base:top-auto
      base:h-auto
      base:static
    `;

    if (isOnRoot) {
      return tw(`
        absolute bottom-0 left-0

        base:static
        base:pl-2
        base:pb-2
        base:flex
        base:flex-col
        base:w-full
      `);
    }

    return tw(`
      ${common}

      base:block
    `);
  },
  wrapper: `
    flex flex-col justify-end
    h-dvh

    base:h-full
    base:block
  `,
  close: `
    absolute top-0 right-0
    p-3

    base:hidden
  `,
  icon: `
    w-7 h-7
    stroke-2 stroke-current/90
  `,
  list: (shouldPush: boolean) => tw(`
    flex flex-col
    w-full
    pl-4 ${!shouldPush && 'pb-0'}

    base:pl-0
    base:pb-0
  `),
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
    shouldPush: boolean,
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

    if (shouldPush) {
      return tw(`
        ${root}
        ${fonts}
      `);
    }

    if (isOnRoot) {
      return tw(`
        ${root}
        ${fonts}

        duration-200
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
      ${!isActive && 'base:text-current/25'}
      base:font-thin
      base:font-stretch-ultra-condensed

      base:hover:text-current/90
    `;

    if (isOnParent) {
      return tw(`
        ${root}
        ${sub}
        ${fonts}

        base:text-6xl/11.5
        mega:text-8xl/18.5
        tera:text-9xl/26
      `);
    }

    return tw(`
      ${root}
      ${sub}
      ${fonts}

      base:text-5xl/9.25
      tera:text-7xl/14
      peta:text-9xl/26
    `);
  },
  block: `
    relative
    block
  `,
});

export default styles;
