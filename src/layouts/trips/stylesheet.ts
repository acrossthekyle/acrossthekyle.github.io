import tw from '@/styles';

const styles = tw({
  section: (isOnTrip: boolean) => tw(`
    relative z-0
    w-full
    overflow-y-scroll
    scroll-smooth

    ml:pe-20

    ${isOnTrip ? `
      hidden

      ml:block
    ` : `
    `}
  `),
  trips: (isOnTrip: boolean) => tw(`
    group/trips
    flex flex-col gap-2
    py-6
    duration-200

    ${isOnTrip ? `
      ml-6

      ml:ml-58
      sl:ml-72
    ` : `
      ml-6

      ml:ml-60
      ml:ml-74
      sl:ml-116
    `}

    sl:py-12
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

    ${isOnTrip ? `
      text-7xl/13
      font-stretch-ultra-condensed
      duration-300

      sx:text-8xl/18

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
      text-3xl/6

      text-white
      font-black
      duration-400

      hover:font-extralight
      hover:tracking-wider
      hover:text-white

      group-hover/trips:text-white/25

      5xs:text-4xl/7
      3xs:text-5xl/9
      2xs:text-6xl/11
      md:text-7xl/13
      sl:text-8xl/18
    `}
  `),
  part: `
    block
    line-clamp-1
  `,
  skeleton: `
    h-22
    bg-neutral-600
    rounded-full
    mb-2
    animate-pulse

    [:nth-child(1)]:w-3/4
    [:nth-child(2)]:w-2/5
    [:nth-child(3)]:w-3/5
  `,
});

export default styles;
