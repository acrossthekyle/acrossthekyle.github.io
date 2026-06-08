import tw from '@/styles';

const ASPECTS = [
  'aspect-square',
  'aspect-video',
  'aspect-4/3',
  'aspect-video',
  'aspect-4/3',
  'aspect-4/3',
  'aspect-video',
];

const styles = tw({
  container: `
    relative
    col-span-3 order-1
    h-full w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  images: `
    flex flex-row items-center gap-4

    w-full
    p-4
    overflow-x-auto
    scrollbar-hide
  `,
  item: `
    flex-shrink-0
  `,
  link: `
    group
    relative z-1
    block
    overflow-hidden
    rounded-lg

    after:absolute
    after:inset-0
    after:z-2
  `,
  image: (index: number, isActive: boolean) => tw(`
    ${ASPECTS[index % ASPECTS.length]}
    !h-20

    motion-safe:grayscale
    motion-safe:sepia-10
    ${isActive ? 'motion-safe:brightness-90' : 'motion-safe:brightness-40'}
    motion-safe:duration-700
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-20
    motion-safe:group-hover:brightness-75
    motion-safe:group-hover:scale-102
  `),
});

export default styles;
