import tw from '@/styles';

const styles = {
  backdrop: (isActive: boolean) => tw(`
    fixed inset-0
    flex items-center justify-center
    backdrop-blur-xs
    bg-black/20
    cursor-default
    uppercase
    text-tiny

    ${isActive ? (`
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
  dialog: (isActive: boolean) => tw(`
    fixed inset-0

    ${isActive ? (`
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
  image: `
    brightness-80

    object-cover
    w-full
    h-full
  `,
  close: `
    absolute top-1 right-1 z-1
    p-2
    bg-black/10
    rounded-lg

    deka:top-9
    deka:right-9
  `,
  icon: `
    w-6.5 h-6.5
    stroke-1 stroke-white/90
  `,
  lock: `
    h-full
  `,
};

export default styles;
