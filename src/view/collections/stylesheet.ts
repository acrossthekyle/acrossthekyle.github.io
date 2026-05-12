import tw from '@/styles';

const styles = tw({
  wrapper: (isReady: boolean) => tw(`
    ${isReady ? 'absolute top-0' : 'absolute top-full'}

    flex items-center justify-center
    h-dvh w-screen

    motion-safe:duration-300
    motion-safe:delay-5800
    ${isReady ? 'motion-safe:scale-100' : 'motion-safe:scale-25'}
  `),
  container: `
    w-screen h-svh
  `,
  slide: `
    !flex items-center text-center
  `,
  cta: (isInView: boolean) => tw(`
    group
    relative
    h-auto w-full
    mx-2

    motion-safe:duration-700
    ${isInView ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}

    lg:mx-3
  `),
  image: (colorMode: string) => tw(`
    aspect-12/16
    rounded-lg

    motion-safe:duration-700
    motion-safe:transition-all
    motion-safe:group-hover:-translate-y-1
    motion-safe:group-focus:translate-y-0

    ${colorMode === 'monochrome' && 'grayscale contrast-125'}
    ${colorMode === 'monochrome' && 'motion-safe:group-hover:grayscale-0'}
    ${colorMode === 'monochrome' && 'motion-safe:group-hover:contrast-100'}
  `),
  caption: `
    absolute -bottom-14 left-1/2
    -translate-x-1/2
    flex flex-col items-center gap-1
    w-full
    leading-[1]
    text-tiny text-center
    uppercase
    pointer-events-none

    motion-safe:sm:duration-700
    motion-safe:sm:opacity-0
    motion-safe:sm:group-hover:delay-700
    motion-safe:sm:group-hover:opacity-100
    motion-safe:sm:group-focus:delay-700
    motion-safe:sm:group-focus:opacity-100
  `,
  title: `
    block
    mb-0.5
    rounded-sm
    bg-(--foreground)
    text-(--background)
    tracking-wide
    px-2 py-1
  `,
  when: `
    block
    text-current/60
    tracking-wide
  `,
});

export default styles;
