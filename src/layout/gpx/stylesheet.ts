import tw from '@/styles';

const styles = tw({
  backdrop: (isOpen: boolean) => tw(`
    fixed inset-0
    bg-black
    cursor-default

    ${isOpen ? (`
      opacity-100
      translate-x-0
      z-9998

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  gpx: (isOpen: boolean) => tw(`
    flex flex-col
    fixed inset-0
    w-full h-full
    bg-black
    duration-250

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
    fixed top-1 left-1 z-9999
    p-2
    text-white/90

    base:right-0
    base:left-auto
    deka:top-9
    deka:right-7
  `,
  icon: `
    w-7 h-7
    stroke-1
  `,
});

export default styles;
