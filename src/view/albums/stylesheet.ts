import tw from '@/styles';

const styles = tw({
  container: (isReady: boolean) => tw(`
    ${isReady ? 'absolute top-0' : 'absolute top-full'}
    w-screen h-svh

    motion-safe:duration-300
    motion-safe:delay-5800
    ${isReady ? 'motion-safe:scale-100' : 'motion-safe:scale-25'}
  `),
  slide: `
    !flex items-center text-center
  `,
  cta: (isInView: boolean) => tw(`
    group
    relative
    h-auto w-full
    mx-5

    motion-safe:duration-700
    ${isInView ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}

    lg:mx-3
  `),
  image: `
    aspect-12/16
    rounded-lg
    grayscale contrast-125

    motion-safe:duration-700
    motion-safe:transition-all
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:contrast-100
    motion-safe:group-hover:scale-101
  `,
});

export default styles;
