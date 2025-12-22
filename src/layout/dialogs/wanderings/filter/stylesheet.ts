import tw from '@/styles';

const styles = {
  backdrop: (isActive: boolean) => tw(`
    absolute top-0 left-0
    h-[calc(110vh)] w-full
    cursor-default
    backdrop-blur-md

    dark:bg-black/80 light:bg-white/80

    base:left-64
    deka:left-84
    mega:left-98

    ${isActive ? (`
      opacity-100
      translate-y-0
      z-99998

      [transition:opacity_.3s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      -translate-y-full
      z-0

      [transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `)}
  `),
  dialog: (isActive: boolean) => tw(`
    absolute inset-0

    base:left-62
    deka:left-72
    mega:left-98

    ${isActive ? (`
      opacity-100
      translate-y-0
      z-99999

      [transition:opacity_.3s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      -translate-y-full
      z-0

      [transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `)}
  `),
  close: `
    absolute top-0 right-0 z-1
    p-2

    deka:top-9
    deka:right-9
  `,
  icon: `
    w-6.5 h-6.5
    stroke-1 stroke-current/90
  `,
  lock: `
    h-full
    px-4 py-2

    deka:p-12
  `,
  heading: `
    mb-12
    uppercase
    font-extrablack
  `,
  item: `
    mb-4

    deka:mb-10

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
