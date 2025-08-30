import tw from '@/styles';

const styles = tw({
  body: (isOnRoot: boolean, isOnParent: boolean) => tw(`
    antialiased
    flex flex-col
    h-full

    ${isOnRoot || isOnParent ? 'base:flex-row' : 'hecto:flex-row'}
  `),
  loader: (isLoaded: boolean) => tw(`
    fixed inset-0 z-9999
    flex flex-col justify-start
    p-6
    font-black text-xl
    bg-black

    ${isLoaded ? `
      opacity-0
      -translate-x-full

      [transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    ` : `
      opacity-100
      translate-x-0
    `}
  `),
  message: (isLoaded: boolean) => tw(`
    ${isLoaded ? `
      duration-300
      opacity-0
    ` : `
      opacity-0
      animate-loader-one
    `}
  `),
  one: `
    opacity-0
    animate-loader-one
  `,
  two: `
    opacity-0
    animate-loader-two
  `,
  three: `
    opacity-0
    animate-loader-three
  `,
});

export default styles;
