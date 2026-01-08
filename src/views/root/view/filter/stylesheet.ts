import tw from '@/styles';

const styles = {
  container: `
    relative
    p-6
    border-b-1

    dark:text-white light:text-black
    dark:border-b-white/15 light:border-b-black/15

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  toggle: `
    absolute top-7.5 right-7.5 bottom-7.5
    p-2
    text-tiny uppercase text-current/50
    border-1
    rounded-sm
    duration-300

    dark:bg-white/15 light:bg-black/15
    dark:border-white/15 light:border-black/15

    hover:dark:bg-white/20
    hover:light:bg-black/20
    hover:text-current/100

    base:top-9.5
    base:right-9.5
    base:bottom-9.5
    hecto:top-13.5
    hecto:right-13.5
    hecto:bottom-13.5
    kilo:top-17.5
    kilo:right-17.5
    kilo:bottom-17.5
  `,
  dialog: (isActive: boolean) => tw(`
    fixed top-0 left-0
    bg-transparent
    w-full h-full
    backdrop-blur-sm

    dark:text-white light:text-black

    base:left-86
    base:w-[calc(100%-21.5rem)]
    hecto:left-106
    hecto:w-[calc(100%-26.5rem)]
    kilo:left-150
    kilo:w-[calc(100%-37.5rem)]
    giga:left-150
    giga:w-[calc(100%-37.5rem)]
    tera:left-160
    tera:w-[calc(100%-40rem)]
    peta:left-210
    peta:w-[calc(100%-52.5rem)]

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
    p-6

    base:p-8
    hecto:p-12
    kilo:p-16

    dark:bg-black/90 light:bg-white/90
  `,
  heading: `
    mt-6 mb-4
    text-base
    uppercase
    font-bold
  `,
};

export default styles;
