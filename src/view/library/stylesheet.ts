import tw from '@/styles';

const styles = tw({
  container: `
    mt-0

    sm:mt-16
  `,
  masonry: `
    flex flex-row gap-2
    w-full max-w-3xl
    my-0 mx-auto
    mt-2
    pb-4 px-2

    md:gap-6
    md:px-6
    md:mt-6
  `,
  grid: `
    flex-1
    flex flex-col gap-0
  `,
  cell: (canRender: boolean) => tw(`
    relative mb-6 break-inside-avoid

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
    inline-block
    h-auto w-full
  `,
  image: (colorMode: string, ratio: string) => tw(`
    w-full
    rounded-lg

    ${ratio === 'video' && 'aspect-video'}
    ${ratio === 'portrait' && 'aspect-12/16'}
    ${ratio === 'square' && 'aspect-square'}

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
    flex flex-wrap gap-1
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
    whitespace-nowrap

    motion-safe:duration-300
    motion-safe:hover:bg-yellow-400
  `,
  faded: `
    block
    mt-0.25
    text-tiny text-current/60
  `,
  divider: `
    inline-block
    w-4
    text-center
  `,
});

export default styles;
