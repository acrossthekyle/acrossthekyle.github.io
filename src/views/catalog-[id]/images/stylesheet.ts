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
    'col-span-4 order-0',
    'col-span-3 order-1',
    'col-span-2 order-2',
  ],
  [
    'col-span-2 order-0',
    'col-span-3 order-1',
    'col-span-3 order-2',
  ],
  [
    'col-span-2 order-0',
    'col-span-5 order-2',
    'col-span-3 order-1',
  ],
];

export const styles = tw({
  group: `
    relative
    grid grid-cols-5 gap-8
    h-auto
    pb-8
    perspective-normal

    lg:mr-1
  `,
  figure: (group: number, index: number, isInView: boolean) => tw(`
    relative
    w-full

    ${POSITIONS[group % 3][index]}
    ${ASPECTS[group % 3][index]}

    ${isInView ? `
      motion-safe:opacity-100
      motion-safe:rotate-x-0
      motion-safe:scale-100
    ` : `
      motion-safe:opacity-50
      motion-safe:-rotate-x-10
      motion-safe:scale-75
    `}
    motion-safe:transform-gpu
    motion-safe:will-change-transform
    motion-safe:duration-500
    motion-safe:ease-in-out
  `),
  cta: `
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
    flex flex-row justify-between gap-4
    w-full
    mt-2
    text-xtiny
    font-normal
    tracking-widest
    uppercase
  `,
  index: `
    flex gap-1
    tracking-[0.125rem]
  `,
  meta: `
    flex flex-col gap-0
  `,
  strong: `
    font-black
  `,
  highlight: `
    dark:text-yellow-300
    light:text-yellow-500
  `,
});


