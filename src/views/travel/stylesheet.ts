import tw from '@/styles';

const styles = tw({
  block: `block`,
  categories: `
    flex gap-4
    mb-4

    ml:hidden
  `,
  category: `
    uppercase
    text-xs

    sm:text-sm
  `,
  header: `
    relative
    flex flex-col
    animate-elastic-in-from-right
  `,
  title: `
    flex flex-col gap-0
    mb-4
    text-4xl/8 text-white/90
    font-black font-stretch-condensed
    uppercase
    tracking-tighter

    5xs:text-5xl/10
    4xs:text-6xl/12
    2xs:text-7xl/14
    sm:text-8xl/19
    sm:mb-8
    ml:hidden
  `,
  subtitle: `
    mb-12
    text-xl text-white/90
    font-normal font-stretch-condensed

    xs:text-2xl
  `,
  date: `
    text-yellow-300/90
    font-thin
  `,
  stages: `
    group/stages
    flex flex-col gap-8

    sm:gap-12
  `,
  stage: `
    group/stage
    relative
    cursor-default
    opacity-0
    animate-elastic-in-from-right
  `,
  figure: (isFullscreen: boolean) => tw(`
    relative
    duration-400
    bg-black

    ${isFullscreen ? `
      h-full
    ` : `
      aspect-square

      xs:aspect-auto
    `}
  `),
  image: (
    isInView: boolean,
    isActive: boolean,
    isFullscreen: boolean,
    isPlaceholder: boolean,
  ) => {
    const common = `
      object-cover
      w-full h-full
      duration-500
    `;

    if (isPlaceholder) {
      return tw(`
        relative z-0
        ${common}
        opacity-0
      `);
    }

    const gallery = `
      absolute inset-0 z-2

      ${isActive ? 'opacity-100' : 'opacity-0'}
    `;

    if (isFullscreen) {
      return tw(`
        ${common}
        ${gallery}

        brightness-90
        grayscale-0
      `);
    }

    return tw(`
      ${common}
      ${gallery}

      ${isInView ? `
        brightness-90
        grayscale-0
      ` : `
        brightness-40
        grayscale-100
      `}
    `);
  },
  gallery: (hasEnteredView: boolean) => tw(`
    absolute z-3 bottom-2
    p-2
    duration-200

    ${hasEnteredView ? 'opacity-100' : 'opacity-0'}

    ml:-mt-5
    ml:top-1/2
    ml:bottom-auto
  `),
  previous: `
    right-10

    ml:left-1
    ml:right-auto
    2ml:left-6
  `,
  next: `
    right-1

    2ml:right-6
  `,
  arrow: `
    h-6 w-6
    stroke-2
    stroke-white/90
  `,
  skeleton: `
    absolute z-5 inset-0
    bg-black
  `,
  pulse: `
    relative
    aspect-square
    bg-neutral-900
    animate-pulse

    sm:w-full
    sm:h-full
    sm:aspect-auto
  `,
  caption: `
    absolute z-2 left-4 bottom-4

    2ml:left-8
    2ml:bottom-8
  `,
  heading: `
    text-2xl/3 text-white/80
    font-bold font-stretch-ultra-condensed
    uppercase
    me-4

    4xs:text-3xl/6
    3xs:text-4xl/7
    md:mb-3
    md:me-8
    sl:text-5xl/10
  `,
  index: `
    ms-2
    w-8
    text-xl
    font-normal
    tracking-normal
  `,
  slash: `
    inline
    h-3.5
    w-3
    -mt-0.5
  `,
  subheading: `
    mb-1
    font-mono
    text-xs

    2xs:block
    sl:text-sm
  `,
  highlight: `
    inline
    py-0.5 px-2
    bg-yellow-300/90
    text-black
  `,
  break: `
    block
    opacity-0
    text-tiny/1

    2xs:text-xs
    2xs:opacity-100
    2xs:py-0.5
    2xs:bg-yellow-300/90
    2xs:text-black
    2xs:inline
    sl:text-sm
  `,
  toggle: (isInView: boolean) => tw(`
    hidden
    absolute right-4 bottom-4 z-2
    uppercase
    font-black
    text-white/80
    duration-200

    2ml:bottom-8
    2ml:right-8
    ml:block

    hover:text-white

    ${isInView ? `
      opacity-100
    ` : `
      opacity-0
    `}
  `),
  footer: `
    mt-6
    flex flex-col items-center

    sl:mt-12
  `,
  more: `
    p-2
    text-xl text-white
    font-black font-stretch-extra-condensed
    uppercase
    duration-300

    hover:text-yellow-300
  `,
});

export default styles;
