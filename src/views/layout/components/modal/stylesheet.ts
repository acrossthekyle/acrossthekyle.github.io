import tw from '@/styles';

const styles = tw({
  dialog: `relative z-10`,
  backdrop: (isOpen) => tw(`
    fixed inset-0
    backdrop-blur-lg
    cursor-default

    ${isOpen ? (`
      opacity-100
      translate-x-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  container: (isOpen) => tw(`
    fixed inset-0 z-10
    w-screen
    overflow-y-auto
    pointer-events-none

    ${isOpen ? (`
      translate-y-0

      [transition:translate_0s]
    `) : (`
      translate-y-full

      [transition:translate_0s_linear_.5s]
    `)}
  `),
  wrapper: `
    flex items-center justify-center
    min-h-full
    p-0
    text-center

    sm:p-4
    lg:p-0
  `,
  content: (isOpen, size) => tw(`
    relative
    transform
    transition-all
    pointer-events-auto
    w-full
    overscroll-contain

    ${isOpen ? (`
      ease-out duration-300
      opacity-100
      translate-y-0

      sm:scale-100
    `) : (`
      ease-in duration-200
      opacity-0
      translate-y-4

      sm:translate-y-0
      sm:scale-95
    `)}
  `),
  close: `
    absolute top-0 right-2.5 z-3
    cursor-pointer
    p-3

    sm:p-6
    sm:left-2.5
    sm:right-auto
  `,
  icon: `
    w-5 h-5
    stroke-1
  `,
});

export default styles;
