import tw from '@/styles';

const styles = tw({
  timeline: (isFullscreen: boolean) => tw(`
    ${isFullscreen ? `
      h-screen w-full
    ` : `
      flex flex-col gap-4
    `}
  `),
  stage: (isFullscreen: boolean, isActive: boolean) => tw(`
    ${isFullscreen ? `
      absolute inset-0
      h-screen w-screen
      duration-400

      ${isActive ? `
        z-1
        opacity-100
      ` : `
        z-0
        opacity-0
      `}
    ` : `
      opacity-0
      group/stage
      relative
      animate-in
    `}
  `),
  image: (isFullscreen: boolean, isActive: boolean) => tw(`
    z-1
    aspect-3/2
    object-cover
    w-full h-full
    duration-400

    ${isActive ? 'opacity-100' : 'opacity-0'}

    ${isFullscreen ? `
      absolute inset-0
      grayscale-0
      brightness-80
    ` : `
      relative
      grayscale-100
      brightness-40

      group-hover/stage:brightness-75
    `}
  `),
  caption: `
    absolute bottom-8 left-8 z-2
    me-30
  `,
  eyebrow: `
    mb-1
    text-sm text-white text-left
    font-medium
    uppercase
    tracking-wider
    transform-gpu duration-500

    group-hover/stage:font-normal
    group-hover/stage:tracking-tighter
  `,
  index: `
    hidden
    mb-0.5
    text-tiny
  `,
  title: `
    text-4xl/7 text-left
    font-black
    uppercase
    tracking-tight
    transform-gpu duration-500

    group-hover/stage:font-extralight
    group-hover/stage:tracking-normal
  `,
  fullscreen: `
    absolute bottom-7 right-8 z-2
    uppercase
    text-sm text-white text-right
    font-normal font-mono
    opacity-0
    duration-400

    group-hover/stage:opacity-100

    focus:opacity-100
  `,
  close: `
    absolute bottom-7 right-8 z-2
    uppercase
    text-sm
    font-normal font-mono
  `,
  navigation: `
    absolute bottom-6 right-6 z-3
    flex items-center gap-1
  `,
  current: `
    text-xs
    font-mono
    uppercase
  `,
  control: `
    group/control
    p-1
    text-sm text-white
    font-normal font-mono
    uppercase
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
    absolute top-7 left-8 z-2
    flex gap-4
  `,
  stat: `
    uppercase
    text-xs text-white text-right
    font-normal font-mono
  `,
});

export default styles;
