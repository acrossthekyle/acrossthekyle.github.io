import tw from '@/styles';

const styles = tw({
  container: `
    group/images
    flex flex-row items-center gap-4
    w-full
    p-4
    overflow-hidden
    no-scrollbar

    landscape-constrained:py-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  item: `
    flex-shrink-0
    h-full
  `,
  figure: `
    relative
    h-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  image: (isInView: boolean) => tw(`
    aspect-video
    grayscale-20
    sepia-10
    rounded-lg

    ${isInView ? 'motion-safe:brightness-90' : 'motion-safe:brightness-40'}
    ${isInView ? 'motion-safe:scale-100' : 'motion-safe:scale-90'}
    motion-safe:duration-700
    motion-safe:ease-in-out
  `),
  caption: (isInView: boolean) => tw(`
    absolute inset-4
    flex flex-col items-center justify-center
    leading-[0.85]
    font-bold
    text-tiny text-center
    uppercase
    tracking-widest

    ${isInView ? 'motion-safe:opacity-100' : 'motion-safe:opacity-0'}
    motion-safe:duration-700
    motion-safe:ease-in-out
  `),
  heading: `
    flex flex-col
    mb-2
    text-[min(5vw,72px)]
    font-black
    uppercase
  `,
  stack: `
    flex flex-col justify-end gap-1
    mb-2
  `,
});

export default styles;
