import tw from '@/styles';

const PATTERNS = [
  [
    'aspect-square sm:aspect-auto sm:col-span-9 sm:row-span-7 sm:border-r-1',
    'aspect-5/6 sm:aspect-auto sm:col-span-7 sm:row-span-7',
    'aspect-16/12 sm:aspect-auto sm:col-span-16 sm:row-span-5'
  ],
  [
    'aspect-square sm:aspect-auto sm:col-span-7 sm:row-span-7 sm:border-r-1',
    'aspect-5/6 sm:aspect-auto sm:col-span-9 sm:row-span-7',
    'aspect-16/12 sm:aspect-auto sm:col-span-16 sm:row-span-5'
  ]
];

const styles = tw({
  container: `
    h-auto w-full
    divide-x divide-current/10
    border-b-1 border-x-1 border-current/10

    md:h-[calc(100vh-5rem)]
    md:grid
    md:grid-cols-12
    lg:h-screen
    lg:border-b-0

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
    ml-1.25
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
    border-t-1 border-current/10
    uppercase
    font-normal
    text-tiny
    tracking-widest

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
  cell: (parent: number, total: number, group: number) => {
    const isLastGroup = parent === total - 1;
    const isIncomplete = group < 3;

    if (isLastGroup && isIncomplete) {
      return tw(`
        h-auto w-full

        sm:grid
        sm:grid-cols-16
        sm:grid-rows-7
        sm:h-[calc((100vh-5rem)*7/12)]
        lg:h-[calc(100vh*7/12)]
      `);
    }

    return tw(`
      h-auto w-full

      sm:grid
      sm:grid-cols-16
      sm:grid-rows-12
      sm:h-[calc(100vh-5rem)]
      lg:h-full
    `);
  },
  figure: (parent: number, index: number) => tw(`
    ${PATTERNS[parent % 2][index]}

    relative
    w-full
    p-4 pt-10
    border-t-1 border-current/10

    sm:h-full
    md:border-b-1
    md:border-t-0

    motion-safe:duration-800
    motion-safe:ease-in-out
    motion-safe:hover:shadow-xl
  `),
  cta: `
    group
    w-full h-full
    overflow-hidden
  `,
  image: `
    motion-safe:grayscale
    motion-safe:opacity-85
    motion-safe:duration-1000
    motion-safe:ease-in-out
    motion-safe:group-hover:scale-102
    motion-safe:group-hover:grayscale-0
    motion-safe:group-hover:opacity-90
  `,
  caption: `
    absolute inset-4 z-10
    grid grid-cols-2 grid-rows-2
    text-tiny
    font-normal
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
  location: `
    justify-self-start self-end
    pointer-events-auto
  `,
  elevation: `
    justify-self-end self-end
    pointer-events-auto
  `,
});

export default styles;
