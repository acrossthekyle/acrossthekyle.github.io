import tw from '@/styles';

const styles = {
  container: (isActive: boolean) => tw(`
    absolute inset-0 z-10

    ${isActive ? (`
      translate-x-0

      [transition:translate_0s]
    `) : (`
      -translate-x-full

      [transition:translate_0s_linear_.5s]
    `)}
  `),
  backdrop: (isActive: boolean) => tw(`
    absolute inset-0 z-1
    backdrop-blur-xs
    ease-in-out duration-500

    ${isActive ? `
      pointer-events-auto
      opacity-100
    ` : `
      pointer-events-none
      opacity-0
    `}
  `),
  inner: (isActive: boolean) => tw(`
    relative z-2
    h-full
    w-full
    overflow-y-scroll
    bg-black/70
    ease-in-out duration-500
    pb-2
    shadow-black shadow-2xl

    ${isActive ? (`
      translate-x-0
    `) : (`
      -translate-x-full
    `)}

    sm:w-xl
    sm:pb-6
  `),
  close: tw(`
    absolute top-4 right-4 z-1
    cursor-pointer

    sm:top-6
    sm:right-6
  `),
  arrow: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
};

export default styles;
