import tw from '@/styles';

const styles = tw({
  grid: `
    relative z-0
    grid grid-cols-1 gap-3
    w-full
    mt-36 pb-14 px-2

    min-[336px]:mt-12
    min-[336px]:grid-cols-2
    md:grid-cols-3
    md:gap-6
    md:px-6
    md:mt-6
    lg:px-10
    lg:grid-cols-4
    lg:mt-6
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
    motion-safe:group-hover:scale-101
  `),
  caption: `
    mt-1
    font-sans font-medium
    text-xs

    lg:mt-2
  `,
  faded: `
    block
    text-current/30
  `,
  options: `
    flex flex-col items-center justify-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  categories: `
    flex flex-wrap gap-1
    mb-1
  `,
  category: (isActive: boolean) => tw(`
    flex items-center gap-1
    text-sm
    p-1
    rounded-md
    capitalize
    text-left

    md:text-tiny

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  tag: `
    w-3.5 h-3.5

    lg:w-3
    lg:h-3
  `,
});

export default styles;
