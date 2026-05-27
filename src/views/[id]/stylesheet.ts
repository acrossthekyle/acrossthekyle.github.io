import tw from '@/styles';

const PATTERNS = [
  [
    'aspect-square xs:aspect-auto xs:col-span-8 xs:row-span-6 sm:col-span-9 sm:row-span-7',
    'aspect-5/6 xs:aspect-auto xs:col-span-8 xs:row-span-6 sm:col-span-7 sm:row-span-7',
    'aspect-16/12 xs:aspect-auto xs:col-span-16 xs:row-span-6 sm:col-span-16 sm:row-span-5'
  ],
  [
    'aspect-square xs:aspect-auto xs:col-span-8 xs:row-span-6 sm:col-span-7 sm:row-span-7',
    'aspect-5/6 xs:aspect-auto xs:col-span-8 xs:row-span-6 sm:col-span-9 sm:row-span-7',
    'aspect-16/12 xs:aspect-auto xs:col-span-16 xs:row-span-6 sm:col-span-16 sm:row-span-5'
  ]
];

const styles = tw({
  container: `
    h-auto w-full
    border-b-0 border-current/10

    md:h-[calc(100vh-5rem)]
    md:grid
    md:grid-cols-12
    md:border-x-1
    md:divide-x
    md:divide-current/10
    md:border-b-1
    lg:h-screen

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  header: `
    flex flex-col justify-between
    h-[calc(100vh-8.5rem)]

    landscape-constrained:h-full

    md:col-span-4
    md:h-full
    lg:col-span-5

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  meta: `
    flex justify-between
    p-4
    text-tiny
    font-light
    tracking-widest
    uppercase

    md:text-xtiny
  `,
  back: `
    flex items-center gap-2
    font-normal
    text-left
    uppercase
  `,
  icon: `
    w-3 h-3
  `,
  title: `
    flex flex-col items-start
    p-4
    text-[min(10vw,32px)]
    font-black
    leading-[0.85]
    uppercase
    tracking-tight

    xs:text-[2.25rem]
    md:text-[min(3.5vw,32px)]
    lg:text-[min(3vw,42px)]
  `,
  chunk: `
    relative
    inline
    whitespace-nowrap
  `,
  count: `
    absolute left-full
    ml-2
    text-tiny
    font-light
  `,
  eyebrow: `
    block
    mb-1.5
    text-tiny
    font-normal
    tracking-widest
    uppercase

    md:text-xtiny
  `,
  notes: `
    px-4 pb-4

    sm:columns-2
    md:columns-1
    lg:columns-2
  `,
  paragraph: `
    text-sm
    mb-4

    md:text-xs

    last:mb-0
  `,
  footer: `
    flex justify-between
    p-4
    border-t-1 border-b-1 border-current/10
    uppercase
    font-normal
    text-tiny
    tracking-widest

    md:border-b-0
    md:text-xtiny
  `,
  grid: `
    w-full
    overflow-y-scroll overflow-x-hidden

    md:col-span-8
    lg:col-span-7

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  cell: (total: number) => {
    const isIncomplete = total < 3;

    const common = `
      p-4

      md:h-[calc((100vh-5rem)*7/12)]
      lg:h-[calc(100vh*7/12)]
    `;

    if (isIncomplete) {
      if (total === 1) {
        return tw(`
          h-auto w-full

          xs:h-124

          ${common}
        `);
      }

      return tw(`
        h-auto w-full

        xs:gap-4
        xs:grid
        xs:grid-cols-16
        xs:grid-rows-5
        xs:min-h-84
        sm:grid-rows-7

        ${common}
      `);
    }

    return tw(`
      h-auto w-full
      p-4 pb-0

      xs:grid
      xs:grid-cols-16
      xs:grid-rows-12
      xs:gap-4
      sm:h-screen
      sm:grid-rows-12
      md:h-[calc(100vh-5rem)]
      lg:h-[calc(100vh-1rem)]
    `);
  },
  figure: (parent: number, index: number) => tw(`
    ${PATTERNS[parent % 2][index]}

    relative
    w-full

    sm:h-full
  `),
  cta: `
    group
    w-full h-full
    overflow-hidden
  `,
  image: `
    rounded-sm

    motion-safe:grayscale
    motion-safe:opacity-85
    motion-safe:duration-1000
    motion-safe:ease-in-out
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:opacity-100
  `,
  caption: `
    absolute inset-2 z-10
    grid grid-cols-2 grid-rows-2
    text-tiny text-white
    font-semibold
    tracking-widest
    uppercase
    pointer-events-none

    md:text-xtiny
  `,
  when: `
    justify-self-start self-start
    pointer-events-auto
  `,
  key: `
    justify-self-end self-start
    pointer-events-auto
  `,
});

export default styles;
