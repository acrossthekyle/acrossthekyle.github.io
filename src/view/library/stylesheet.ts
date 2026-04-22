import tw from '@/styles';

const styles = tw({
  mountable: (isActive: boolean) => {
    if (isActive) {
      return tw(`
        absolute z-1
        w-full
        translate-x-0
        translate-y-0

        motion-safe:[animation:slide-up-fade_.5s_var(--ease-in-out)_0s_forwards]
      `);
    }

    return tw(`
      absolute z-0
      -translate-x-full
      -translate-y-full

      motion-safe:opacity-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `);
  },
  grid: `
    relative z-0
    grid grid-cols-1 gap-6
    w-full
    mt-6 pb-14 px-6

    xs:grid-cols-2
    md:grid-cols-3
    lg:mt-18
    lg:px-10
    lg:grid-cols-4
  `,
  cell: (isInView: boolean, isInitialBatch: boolean) => tw(`
    relative

    motion-safe:duration-700
    ${isInView || isInitialBatch ?
      `
        motion-safe:top-0
        motion-safe:opacity-100
      ` :
      `
        motion-safe:top-20
        motion-safe:opacity-0
      `
    }
  `),
  cta: `
    group
    relative
    h-auto w-full
  `,
  image: `
    aspect-14/16
    rounded-lg
    grayscale contrast-125

    motion-safe:duration-700
    motion-safe:opacity-0
    motion-safe:animate-fade-in
    motion-safe:group-hover:scale-105
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:contrast-100
  `,
  caption: `
    mt-3
    font-sans font-medium
    text-xs
  `,
  faded: `
    block
    opacity-40
  `,
  dialog: `
    p-20
  `,
});

export default styles;
