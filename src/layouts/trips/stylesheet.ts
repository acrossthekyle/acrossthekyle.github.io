import tw from '@/styles';

const styles = tw({
  section: `
    relative z-0
    w-full
    pe-20
    overflow-y-scroll
  `,
  trips: (isOnTrip: boolean) => tw(`
    group
    flex flex-col
    py-14 pb-12
    duration-500

    ${isOnTrip ? `
      w-80
      ml-72
    ` : `
      pe-20
      w-auto
      ml-116
    `}
  `),
  item: `
    w-full
    mb-2
    opacity-0
    animate-slide-in-right
  `,
  link: (isOnTrip: boolean, isActive: boolean) => tw(`
    block
    w-full
    transform-gpu
    uppercase

    ${isOnTrip ? `
      text-8xl/18
      font-stretch-ultra-condensed
      duration-400

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
      text-9xl/25 text-white font-black
      duration-300

      hover:font-extralight
      hover:tracking-wider
      hover:text-white

      group-hover:text-white/25
    `}
  `),
});

export default styles;
