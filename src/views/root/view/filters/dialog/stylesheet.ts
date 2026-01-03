import tw from '@/styles';

const styles = {
  dialog: (isActive: boolean) => tw(`
    fixed top-0 left-0
    bg-transparent
    w-full h-full

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
    p-6

    base:p-8
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
    text-sm
    uppercase
    font-bold
  `,
  icon: `
    stroke-2

    dark:stroke-white light:stroke-black
  `,
  list: `
    flex flex-col items-start
    mb-8
  `,
  item: `
    mb-2

    last:mb-0
  `,
  label: `
    flex items-center gap-3
    cursor-pointer
  `,
  radio: `
    hidden
    peer
  `,
  dot: `
    relative
    flex items-center justify-center
    w-3.5 h-3.5
    rounded-full
    border

    dark:border-white light:border-black

    peer-checked:after:content-['']
    peer-checked:after:w-1.5
    peer-checked:after:h-1.5
    peer-checked:after:rounded-full
    peer-checked:after:absolute

    peer-checked:dark:after:bg-white
    peer-checked:light:after:bg-black
    peer-checked:dark:border-white
    peer-checked:light:border-black
  `,
  text: `
    relative
    flex flex-row justify-end items-start
    capitalize
    text-xl
    font-extralight
    select-none

    dark:text-white light:text-black

    base:text-lg
  `,
  count: `
    ml-1
    text-tiny
  `,
};

export default styles;
