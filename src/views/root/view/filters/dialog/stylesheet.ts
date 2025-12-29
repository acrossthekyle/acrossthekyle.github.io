import tw from '@/styles';

const styles = {
  dialog: (isActive: boolean) => tw(`
    fixed inset-0

    base:left-86
    hecto:left-106
    mega:left-150

    ${isActive ? (`
      opacity-100
      translate-x-0
      z-99

      [transition:opacity_.3s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `)}
  `),
  lock: `
    h-full w-full
    flex flex-col items-start
    overflow-y-auto

    dark:bg-black/80 light:bg-white/80
  `,
  header: `
    w-full
    flex justify-between items-center
    p-12
  `,
  heading: `
    font-extrablack
    uppercase
  `,
  icon: `
    w-6.5 h-6.5
    stroke-1 stroke-current/90
  `,
  list: `
    h-screen w-full
    flex flex-col items-start
    p-12
  `,
  item: `
    mb-4

    mega:mb-12

    last:mb-0
  `,
  cta: `
    relative
    uppercase
    text-xl
    font-extralight
    duration-300

    hover:font-medium

    plank:text-3xl
    deka:text-4xl
    kilo:text-5xl
  `,
  count: `
    absolute top-0.25
    ml-2
    text-xs
    duration-300

    plank:text-sm
    plank:top-1
    deka:top-1
    kilo:top-2
  `,
  active: `
    absolute top-1.5 -right-12
    w-4 h-4
    stroke-1
    duration-300

    plank:top-2.5
    deka:-right-16
    deka:top-3
    deka:w-5
    deka:h-5
    kilo:w-6
    kilo:h-6
    kilo:top-4
  `,
};

export default styles;
