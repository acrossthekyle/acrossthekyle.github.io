import tw from '@/styles';

const styles = tw({
  header: `
    absolute left-0 right-0 top-0 z-1
    flex justify-between
    px-20 pt-12
  `,
  home: `
    text-xl text-white
    font-black
  `,
  main: `
    flex
    h-full
  `,
  nav: `
    absolute bottom-0 left-0 z-1
    flex items-end
    ps-20 pb-12
  `,
  item: `
    overflow-hidden
  `,
  link: (isOnRoot: boolean, isOnTrip: boolean, isActive: boolean) => tw(`
    ${isOnRoot ? `
      transform-gpu duration-200
      text-9xl/26 text-white font-black
      h-26

      hover:font-light
      hover:tracking-wider
    ` : `
      transform-gpu duration-200
      font-thin font-stretch-ultra-condensed

      ${isOnTrip ? 'text-5xl/8' : 'text-8xl/18'}

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
    absolute right-20 bottom-10.5 z-0
    duration-300

    ${isOnTrip ? 'opacity-0' : 'opacity-100'}
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
