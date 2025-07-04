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
    backdrop-blur-sm
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
    bg-black/60
    ease-in-out duration-500
    pb-2

    ${isActive ? (`
      translate-x-0
    `) : (`
      -translate-x-full
    `)}

    sm:w-98
    sm:pb-6
  `),
};

export default styles;
