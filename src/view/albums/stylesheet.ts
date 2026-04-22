import tw from '@/styles';

const styles = tw({
  mountable: (isActive: boolean) => {
    if (isActive) {
      return tw(`
        absolute z-1
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
  container: (isReady: boolean) => tw(`
    ${isReady ? 'absolute top-0' : 'absolute top-full'}
    w-screen h-svh

    motion-safe:duration-300
    motion-safe:delay-4000
    ${isReady ? 'motion-safe:scale-100' : 'motion-safe:scale-25'}
  `),
  slide: `
    !flex items-center text-center
  `,
  cta: (isInView: boolean) => tw(`
    group
    relative
    h-auto w-full
    mx-3

    motion-safe:duration-700
    ${isInView ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}
  `),
  image: `
    aspect-14/16
    rounded-lg
    grayscale contrast-125

    motion-safe:duration-700
    motion-safe:transition-all
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:contrast-100
    motion-safe:group-hover:scale-108
  `,
});

export default styles;
