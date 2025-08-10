import tw from '@/styles';

const styles = tw({
  timeline: (isFullscreen: boolean) => tw(`
    ${isFullscreen ? `
      h-full w-full

      md:h-screen
    ` : `
      flex flex-col gap-8
    `}
  `),
  stage: (isFullscreen: boolean, isActive: boolean) => tw(`
    ${isFullscreen ? `
      absolute inset-0
      duration-500

      ${isActive ? `
        z-1
        opacity-100
      ` : `
        z-0
        opacity-0
      `}

      md:my-14
    ` : `
      group/stage
      relative
      h-78
      opacity-0
      animate-in
    `}
  `),
  figure: `
    w-full h-full
    flex flex-col items-center justify-center
  `,
  image: (isFullscreen: boolean, isActive: boolean, isInView: boolean) => tw(`
    z-1
    object-cover
    duration-400

    ${isActive ? 'opacity-100' : 'opacity-0'}

    ${isFullscreen ? `
      absolute
      aspect-3/2
      grayscale-0
      brightness-100

      md:inset-0
      md:aspect-none
      md:h-full
    ` : `
      relative
      w-full h-full

      ${isInView ? `
        grayscale-0
        brightness-90

        md:grayscale-100
        md:brightness-40
      ` : `
        grayscale-100
        brightness-40
      `}

      group-hover/stage:brightness-100
    `}
  `),
  caption: (isFullscreen: boolean) => tw(`
    absolute left-4 z-2
    mr-8

    md:left-8
    md:me-30

    ${isFullscreen ? `
      bottom-4

      md:bottom-8
    ` : `
      bottom-4

      md:bottom-8
    `}
  `),
  eyebrow: `
    mb-1
    text-tiny text-white text-left
    font-medium
    uppercase
    tracking-wider
    transform-gpu duration-500

    group-hover/stage:font-normal
    group-hover/stage:tracking-tighter

    lg:textxs
    xl:text-sm
  `,
  title: `
    text-xl/4 text-left
    font-black
    uppercase
    tracking-tight
    transform-gpu duration-500

    group-hover/stage:font-extralight
    group-hover/stage:tracking-normal
    w-full

    2xs:text-2xl/5
    md:w-76
    lg:w-100
    lg:text-3xl/6
    xl:text-4xl/7
    xl:w-110
  `,
  fullscreen: `
    absolute inset-0 z-2
    uppercase
    text-sm text-white text-right
    font-normal font-mono
    opacity-0

    md:inset-auto
    md:bottom-7
    md:right-8
    md:duration-400
    md:group-hover/stage:opacity-100
    md:focus:opacity-100
  `,
  close: `
    absolute bottom-4 right-4 z-2

    md:top-4
    md:bottom-auto
    md:right-8
  `,
  x: `
    stroke-1
    duration-300

    hover:stroke-2
  `,
  navigation: `
    group/navigation
    absolute top-4.5 right-4 z-3
    flex items-center gap-1

    md:bottom-4.5
    md:right-8
    md:top-auto
  `,
  carousel: `
    group/navigation
    absolute top-4.5 left-4 z-3
    flex items-center gap-1

    md:left-8
    md:bottom-4.5
    md:top-auto
  `,
  current: `
    text-xs text-white
    font-mono
    uppercase
  `,
  control: `
    group/control
    p-1
  `,
  previous: `
    w-3 h-3
    fill-transparent
    stroke-2 stroke-white
    -rotate-90
    duration-300

    group-hover/control:fill-white
  `,
  next: `
    w-3 h-3
    fill-transparent
    stroke-2 stroke-white
    rotate-90
    duration-400

    group-hover/control:fill-white
  `,
  stats: `
    absolute top-4 left-4 z-2
    flex flex-col gap-1

    md:flex-row
    md:gap-4
    md:bottom-5
    md:top-auto
    md:left-8
  `,
  stat: `
    uppercase
    text-xs text-white
    font-mono
  `,
  skeleton: (isFullscreen: boolean, isActive: boolean) => tw(`
    z-1
    object-cover
    bg-neutral-600
    animate-pulse
    absolute

    ${isActive ? 'opacity-100' : 'opacity-0'}

    ${isFullscreen ? `
      aspect-3/2
      h-auto w-full

      md:inset-0
      md:aspect-auto
      md:h-full
    ` : `
      w-full h-full
    `}
  `),
});

export default styles;
