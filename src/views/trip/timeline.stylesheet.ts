import tw from '@/styles';

const styles = tw({
  timeline: (isFullscreen: boolean) => tw(`
    ${isFullscreen ? `
      h-screen w-full
    ` : `
      flex flex-col gap-8
    `}
  `),
  stage: (isFullscreen: boolean, isActive: boolean) => tw(`
    ${isFullscreen ? `
      absolute inset-0
      duration-500
      my-14

      ${isActive ? `
        z-1
        opacity-100
      ` : `
        z-0
        opacity-0
      `}
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
  `,
  image: (isFullscreen: boolean, isActive: boolean) => tw(`
    z-1
    object-cover
    w-full h-full
    duration-400

    ${isActive ? 'opacity-100' : 'opacity-0'}

    ${isFullscreen ? `
      absolute inset-0
      h-full
      grayscale-0
      brightness-100
    ` : `
      relative
      grayscale-100
      brightness-40

      group-hover/stage:brightness-100
    `}
  `),
  caption: `
    absolute bottom-0 left-0 z-2
    p-4

    2xs:p-0
    2xs:bottom-8
    2xs:left-8
    2xs:me-30
  `,
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
    lg:w-94
    lg:text-3xl/6
    xl:text-4xl/7
    xl:w-110
  `,
  fullscreen: `
    hidden
    absolute bottom-7 right-8 z-2
    uppercase
    text-sm text-white text-right
    font-normal font-mono
    opacity-0
    duration-400

    group-hover/stage:opacity-100

    focus:opacity-100

    md:block
  `,
  close: `
    absolute top-4 right-8 z-2
  `,
  x: `
    stroke-1
    duration-300

    hover:stroke-2
  `,
  navigation: `
    group/navigation
    absolute bottom-4.5 right-8 z-3
    flex items-center gap-1
  `,
  carousel: `
    group/navigation
    absolute bottom-4.5 left-8 z-3
    flex items-center gap-1
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
    absolute bottom-5 left-8 z-2
    flex gap-4
  `,
  stat: `
    uppercase
    text-xs text-white
    font-mono
  `,
  view: `
    !grayscale-0
    !brightness-90
  `,
  skeleton: `
    absolute inset-0 -z-1
    h-full w-full
    bg-neutral-600
    animate-pulse
  `,
});

export default styles;
