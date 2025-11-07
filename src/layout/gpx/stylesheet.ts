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
    bg-black
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
    fixed top-2 right-2 z-9999
    p-2
    text-current/90

    base:right-0
    deka:top-9
    deka:right-7
  `,
  icon: `
    w-8 h-8
    stroke-2

    base:stroke-1
  `,
  view: (canRenderElevation: boolean) => tw(`
    hidden
    absolute bottom-5 right-5 z-9999
    text-current/90
    uppercase
    text-xs text-center
    font-bold
    duration-300

    ${canRenderElevation ? 'opacity-0' : 'opacity-100'}

    base:block
    deka:bottom-12
    deka:right-12
  `),
});

export default styles;
