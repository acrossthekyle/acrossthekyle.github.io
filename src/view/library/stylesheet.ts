import tw from '@/styles';

const styles = tw({
  container: `
    mt-16

    lg:mt-18
  `,
  grid: `
    relative z-0
    grid grid-cols-1 gap-3
    w-full
    mt-10 pb-4 px-2

    min-[336px]:grid-cols-2
    md:grid-cols-3
    md:gap-6
    md:px-6
    lg:px-10
    lg:grid-cols-4
  `,
  cell: (canRender: boolean) => tw(`
    relative

    motion-safe:duration-700
    ${canRender ?
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
  image: (colorMode: string) => tw(`
    aspect-12/16
    rounded-lg
    ${colorMode === 'monochrome' && 'grayscale contrast-125'}

    motion-safe:duration-700
    motion-safe:transition-all
    ${colorMode === 'monochrome' && 'motion-safe:group-hover:grayscale-0'}
    ${colorMode === 'monochrome' && 'motion-safe:group-hover:contrast-100'}
    motion-safe:group-hover:-translate-y-1
  `),
  caption: `
    flex flex-col
    mt-1
    text-xs

    lg:mt-2
  `,
  tags: `
    flex gap-1
    mb-1
  `,
  tag: `
    rounded-sm
    px-1.25 py-1 pb-0.75
    bg-yellow-300
    font-normal
    text-black
    leading-[1]
    text-xtiny
    uppercase
    tracking-wider

    motion-safe:duration-300
    motion-safe:hover:bg-yellow-400
  `,
  faded: `
    block
    mt-0.25
    text-xs text-current/60
  `,
  divider: `
    inline-block
    w-4
    text-center
  `,
});

export default styles;
