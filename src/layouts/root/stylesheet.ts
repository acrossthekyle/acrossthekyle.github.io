import tw from '@/styles';

const styles = tw({
  header: `
    relative z-1
    flex justify-between
    px-6 pt-6

    ml:left-0
    ml:top-0
    ml:absolute
    sl:pt-12
    sl:px-20
  `,
  home: (isOnRoot: boolean) => tw(`
    text-xl text-white
    font-black

    ${!isOnRoot ? `
      hidden

      ml:block
    ` : `
      block
    `}
  `),
  back: (isOnRoot: boolean) => tw(`
    text-base text-white
    font-black
    uppercase

    ${!isOnRoot ? `
      block

      ml:hidden
    ` : `
      hidden
    `}
  `),
  main: `
    md:h-full
    ml:flex
  `,
  nav: (isOnRoot: boolean) => tw(`
    absolute bottom-0 left-0 z-1
    flex items-end
    pl-6 pb-6

    sl:pl-20
    sl:pb-12

    ${isOnRoot ? '' : `
      hidden

      ml:block
    `}
  `),
  item: `
    overflow-hidden
    mb-2

    md:mb-0
  `,
  link: (isOnRoot: boolean, isOnTrip: boolean, isActive: boolean) => tw(`
    ${isOnRoot ? `
      text-3xl/5 text-white
      font-black
      transform-gpu duration-200

      5xs:text-4xl/7
      2xs:text-6xl/12
      md:text-8xl/20
      lg:text-9xl/26

      hover:font-light
      hover:tracking-wider
    ` : `
      transform-gpu duration-200
      font-thin font-stretch-ultra-condensed

      ${isOnTrip ? `
        text-5xl/10
      ` : `
        text-5xl/10

        ml:text-6xl/12
        sl:text-8xl/18
      `}

      ${isActive ? `
        text-white
      ` : `
        text-white/25
        hover:text-white
      `}
    `}

    uppercase
  `),
  footer: (isOnTrip: boolean) => tw(`
    hidden
    absolute right-8 bottom-6 z-0
    duration-300

    ${isOnTrip ? 'opacity-0' : 'opacity-100'}

    ml:block
    lg:right-6
    sl:bottom-11
    sl:right-20
  `),
  fullscreen: `
    group/fullscreen
  `,
  icon: `
    w-8 h-8
    stroke-1
    duration-300

    group-hover/fullscreen:stroke-2
  `,
});

export default styles;
