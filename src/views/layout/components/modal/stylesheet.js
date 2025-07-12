import tw from '@/styles';

const styles = {
  dialog: tw(`relative z-10`),
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
  wrapper: tw(`
    flex items-center justify-center
    min-h-full
    p-0
    text-center

    sm:p-4
    lg:p-0
  `),
  content: (isOpen, size) => tw(`
    relative
    transform
    transition-all
    pointer-events-auto
    w-full
    overscroll-contain

    lg:my-8

    ${size === 'md' ? 'sm:max-w-md' : ''}
    ${size === 'lg' ? 'sm:max-w-lg' : ''}
    ${size === 'xl' ? 'sm:max-w-xl' : ''}
    ${size === '2xl' ? 'sm:max-w-2xl' : ''}
    ${size === '3xl' ? 'sm:max-w-3xl' : ''}
    ${size === '4xl' ? 'sm:max-w-4xl' : ''}
    ${size === '5xl' ? 'sm:max-w-5xl' : ''}
    ${size === '6xl' ? 'sm:max-w-6xl' : ''}
    ${size === '7xl' ? 'sm:max-w-7xl' : ''}

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
  close: tw(`
    absolute top-0 right-2.5 z-3
    cursor-pointer
    p-3

    sm:p-6
    sm:left-2.5
    sm:right-auto
  `),
  icon: tw(`
    w-5 h-5
    stroke-1
  `),
};

export default styles;
