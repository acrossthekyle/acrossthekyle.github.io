import tw from '@/styles';

const ASPECTS = [
  'aspect-square',
  'aspect-video',
  'aspect-portrait',
];

const styles = tw({
  container: `
    relative
    col-span-1 order-1
    h-80 w-full
    border-b-1 border-current/10

    sm:h-screen
    sm:border-l-1
    sm:border-b-0
    sm:absolute
    sm:top-0
    sm:right-0
    sm:w-[50vw]
    lg:w-1/4

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed

    lg:motion-safe:animate-fade-in-down-slightly-delayed
  `,
  images: `
    flex flex-col gap-4
    py-4 pr-4
  `,
  link: `
    group
    relative z-1
    block
    h-full w-full
    overflow-hidden
    rounded-lg

    after:absolute
    after:inset-0
    after:z-2
  `,
  image: (index: number) => tw(`
    ${ASPECTS[index % ASPECTS.length]}

    motion-safe:grayscale
    motion-safe:sepia-10
    motion-safe:brightness-90
    motion-safe:duration-700
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-20
    motion-safe:group-hover:brightness-75
    motion-safe:group-hover:scale-102
  `),
});

export default styles;
