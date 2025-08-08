import tw from '@/styles';

const styles = tw({
  dialog: `relative z-10`,
  container: (isOpen: boolean) => tw(`
    fixed inset-0 z-10
    w-screen
    overflow-y-auto

    ${isOpen ? (`
      translate-y-0

      [transition:translate_0s]
    `) : (`
      translate-y-full

      [transition:translate_0s_linear_.5s]
    `)}
  `),
  wrapper: `
    h-dvh w-full
    bg-black
  `,
  content: (isOpen: boolean) => tw(`
    relative z-1
    transform
    w-full h-dvh
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
});

export default styles;
