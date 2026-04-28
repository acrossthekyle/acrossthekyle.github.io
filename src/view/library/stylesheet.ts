import tw from '@/styles';

const styles = tw({
  grid: `
    relative z-0
    grid grid-cols-1 gap-3
    w-full
    mt-36 pb-14 px-2

    min-[310px]:mt-12
    min-[330px]:grid-cols-2
    md:grid-cols-3
    md:gap-6
    md:px-6
    md:mt-18
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
    aspect-12/16
    rounded-lg
    grayscale contrast-125

    motion-safe:duration-700
    motion-safe:opacity-0
    motion-safe:animate-fade-in
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:contrast-100

    md:motion-safe:group-hover:scale-101
  `,
  caption: `
    mt-1
    font-sans font-medium
    text-xs

    lg:mt-2
  `,
  faded: `
    block
    opacity-30
  `,
});

export default styles;
