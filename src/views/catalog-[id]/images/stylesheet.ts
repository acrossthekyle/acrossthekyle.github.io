import tw from '@/styles';

const ASPECTS = [
  [
    'aspect-video',
    'aspect-square',
    'aspect-square',
  ],
  [
    'aspect-square',
    'aspect-square',
    'aspect-video',
  ],
  [
    'aspect-square',
    'aspect-square',
    'aspect-square',
  ],
];

const POSITIONS = [
  [
    'w-full mt-4 col-span-3 order-0',
    'w-full mt-0 col-span-3 order-1',
    'w-full mt-0 col-span-2 order-2',
  ],
  [
    'w-full mt-4 col-span-2 order-0',
    'w-full mt-4 col-span-3 order-1',
    'w-full mt-0 col-span-3 order-2',
  ],
  [
    'w-full mt-4 col-span-2 order-0',
    'w-full mt-0 col-span-2 order-2',
    'w-full mt-4 col-span-3 order-1',
  ],
];

const styles = tw({
  group: `
    relative
    grid grid-cols-5 gap-4
    h-auto
    mr-1

    lg:last:pb-4
  `,
  figure: (group: number, index: number) => tw(`
    ${POSITIONS[group % 3][index]}
    ${ASPECTS[group % 3][index]}
  `),
  cta: `
    group
    relative z-1
    h-full w-full
    overflow-hidden
    transform-gpu
    transition-transform
    duration-800
    ease-out
    will-change-transform

    lg:!cursor-zoom-in
  `,
  image: `
    motion-safe:grayscale
    motion-safe:sepia-10
    motion-safe:brightness-90
    motion-safe:duration-700
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-20
    motion-safe:group-hover:brightness-75
    motion-safe:group-hover:scale-102
  `,
  caption: `
    relative
    flex flex-col
    w-full
    mt-2
    text-xtiny
    font-normal
    tracking-widest
    uppercase
  `,
  index: `
    absolute top-0 right-0
    flex flex-col gap-0 items-end
    tracking-[0.125rem]
  `,
  meta: `
    flex flex-col gap-0
    pt-2
  `,
  strong: `
    font-black
  `,
});

export default styles;
