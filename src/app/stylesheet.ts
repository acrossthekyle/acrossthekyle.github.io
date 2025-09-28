import tw from '@/styles';

const styles = tw({
  html: `
    h-full
    overflow-x-hidden
  `,
  body: `
    antialiased
    flex flex-col
    h-full

    base:flex-row
  `,
  loader: (isLoaded: boolean) => tw(`
    fixed inset-0 z-9999
    flex flex-col justify-end
    p-6
    font-black
    text-5xl/10
    uppercase
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
