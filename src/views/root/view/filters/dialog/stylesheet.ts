import tw from '@/styles';

const styles = {
  dialog: (isActive: boolean) => tw(`
    fixed inset-0
    bg-transparent
    w-full

    dark:text-white light:text-black

    base:left-86
    base:w-[calc(100%-21.5rem)]
    hecto:left-106
    hecto:w-[calc(100%-26.5rem)]
    mega:left-150
    mega:w-[calc(100%-37.5rem)]

    ${isActive ? (`
      opacity-100
      translate-x-0
      z-99999

      [transition:opacity_.3s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `)}
  `),
  lock: `
    h-screen w-full
    flex flex-col items-start
    overflow-y-auto
    p-8

    hecto:p-12
    mega:p-16

    dark:bg-black/90 light:bg-white/90
  `,
  header: `
    w-full
    flex justify-between items-center
    mb-4
  `,
  heading: `
    text-xs
    uppercase
    font-bold
  `,
  icon: `
    w-6.5 h-6.5
    stroke-1
    dark:stroke-white light:stroke-black
  `,
  list: `
    flex flex-col items-start
    mb-16
  `,
  item: `
    mb-4

    last:mb-0
  `,
  cta: `
    relative
    flex flex-row justify-end items-start
    uppercase
    text-xl
    font-extralight
    duration-300

    hover:font-medium
  `,
  count: `
    ml-1
    text-tiny

    plank:text-xs
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
