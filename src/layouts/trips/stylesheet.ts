import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    w-full
    pe-20
    overflow-y-scroll
    scroll-smooth
  `,
  trips: (isOnTrip: boolean) => tw(`
    group/trips
    flex flex-col gap-2
    py-14 pb-12
    duration-200

    ${isOnTrip ? `
      ml-72
    ` : `
      pe-20
      ml-116
    `}
  `),
  item: `
    w-full
    opacity-0
    animate-elastic-in
  `,
  link: (isOnTrip: boolean, isActive: boolean) => tw(`
    block
    w-full
    transform-gpu
    uppercase
    text-8xl/18

    ${isOnTrip ? `
      font-stretch-ultra-condensed
      duration-300

      ${isActive ? `
        font-medium
        text-white
        tracking-tighter
      ` : `
        font-thin
        text-white/20

        hover:tracking-tighter
        hover:text-white
        hover:font-medium
      `}
    ` : `
      text-white
      font-black
      duration-400

      hover:font-extralight
      hover:tracking-wider
      hover:text-white

      group-hover/trips:text-white/25
    `}
  `),
  part: `
    block
    line-clamp-1
  `,
});

export default styles;
