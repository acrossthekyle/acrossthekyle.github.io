import tw from '@/styles';

const styles = tw({
  block: `block`,
  categories: `
    flex gap-4
    mb-4
  `,
  category: `
    uppercase
    text-sm

    sm:text-base
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
    font-black
    uppercase
    font-black font-stretch-condensed
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
    text-3xl/7 text-white/90
    font-medium font-stretch-ultra-condensed
    uppercase
    tracking-tight

    3xs:text-3xl/6
    2xs:text-4xl/8
    sm:text-5xl/10
    md:text-6xl/13
  `,
  date: `
    text-yellow-300/60
    font-thin font-stretch-ultra-condensed
    uppercase
    tracking-tight
    ms-2
  `,
  stats: `
    text-white/40
    font-thin
    uppercase
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
    duration-400

    ${isFullscreen ? `
      h-full
    ` : `
      aspect-square

      sm:aspect-auto
    `}
  `),
  image: (isInView: boolean, isFullscreen: boolean) => {
    const common = `
      object-cover
      w-full h-full
      duration-500
    `;

    if (isFullscreen) {
      return tw(`
        ${common}

        brightness-90
        grayscale-0
      `);
    }

    return tw(`
      ${common}

      ${isInView ? `
        brightness-90
        grayscale-0
      ` : `
        brightness-40
        grayscale-100
      `}
    `);
  },
  skeleton: `
    absolute z-1
    w-full h-full
    object-cover
    bg-neutral-600
    animate-pulse
  `,
  caption: `
    relative z-2
    mt-4

    2xs:mt-0
    2xs:absolute
    2xs:left-4
    2xs:bottom-4
    md:left-8
    md:bottom-8
  `,
  heading: `
    text-4xl/7 text-white/80
    font-bold font-stretch-ultra-condensed
    uppercase
    mb-3 me-4

    md:me-8
    sl:text-5xl/10
  `,
  subheading: `
    mb-1
    font-mono
    text-sm
  `,
  highlight: `
    py-0.5 px-2
    bg-yellow-300/90
    text-black
  `,
  toggle: (isInView: boolean) => tw(`
    hidden
    absolute right-8 bottom-8 z-2
    uppercase
    font-black
    text-white/80
    duration-200

    ml:block

    hover:text-white

    ${isInView ? `
      opacity-100
    ` : `
      opacity-0
    `}
  `),
  footer: `
    mt-12
    flex flex-col items-center
  `,
  more: `
    group/more
    flex items-center
    p-2
    text-white
  `,
  plus: `
    w-10 h-10
    stroke-1
    duration-200

    group-hover/more:scale-125
  `,
});

export default styles;
