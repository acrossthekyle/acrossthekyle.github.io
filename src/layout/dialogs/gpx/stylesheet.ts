import tw from '@/styles';

const styles = tw({
  backdrop: (isOpen: boolean) => tw(`
    h-full
    absolute inset-0
    bg-black
    cursor-default

    ${isOpen ? (`
      opacity-100
      translate-x-0
      z-9998

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      -translate-x-full
      z-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  gpx: (isOpen: boolean) => tw(`
    flex flex-col
    fixed inset-0
    w-full h-full
    bg-white dark:bg-black
    duration-250
    overflow-contain

    ${isOpen ? (`
      opacity-100
      translate-x-0
      z-9999

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  close: `
    fixed top-1 right-0.5 z-9999
    p-2
    text-current/90

    base:right-0
    deka:top-9
    deka:right-9
  `,
  icon: `
    w-7 h-7
    stroke-2

    base:stroke-1
  `,
  container: `
    relative
    flex flex-col-reverse
    h-full w-full

    base:flex-row
  `,
  content: `
    flex flex-col-reverse justify-between

    base:flex-col
    base:flex-1
    base:border-r-1
    base:border-r-current/20
  `,
});

export default styles;
