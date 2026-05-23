import tw from '@/styles';

const PATTERNS = [
  [
    'h-100 sm:h-auto sm:col-span-10 sm:row-span-6 lg:col-span-6 lg:row-span-4 order-0',
    'h-60 sm:h-auto sm:col-span-6 sm:row-span-4 lg:col-span-6 lg:row-span-8 order-1',
    'h-75 sm:h-auto sm:col-span-6 sm:row-span-6 lg:col-span-4 lg:row-span-4 order-2',
    'h-100 sm:h-auto sm:col-span-10 sm:row-span-4 lg:col-span-6 lg:row-span-8 order-3',
    'h-60 sm:h-auto sm:col-span-6 sm:row-span-6 lg:col-span-4 lg:row-span-8 order-4',
    'h-75 sm:h-auto sm:col-span-10 sm:row-span-6 lg:col-span-6 lg:row-span-4 order-5',
  ],
  [
    'h-100 sm:h-auto sm:col-span-10 sm:row-span-6 lg:col-span-4 lg:row-span-8 order-0',
    'h-60 sm:h-auto sm:col-span-6 sm:row-span-4 order-1',
    'h-75 sm:h-auto sm:col-span-6 sm:row-span-6 lg:col-span-6 lg:row-span-8 order-2',
    'h-100 sm:h-auto sm:col-span-10 sm:row-span-4 sm:order-3 lg:col-span-4 lg:row-span-4 lg:order-4',
    'h-60 sm:h-auto sm:col-span-6 sm:row-span-6 lg:col-span-6 lg:row-span-8 order-3',
    'h-75 sm:h-auto sm:col-span-10 sm:row-span-6 lg:col-span-6 lg:row-span-4 order-5',
  ]
];

const styles = tw({
  grid: `
    h-auto
    border-l-1 border-current/10

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed

    sm:h-dvh
    sm:grid
    sm:grid-cols-16
    sm:grid-rows-16
    lg:h-screen
    lg:grid-rows-12
  `,
  cell: (parent: number, index: number) => tw(`
    ${PATTERNS[parent % 2][index]}

    border-b-1 border-r-1 border-current/10

    motion-safe:opacity-0
    motion-safe:duration-800
    motion-safe:ease-in-out
    motion-safe:transition-[opacity]
    motion-safe:data-[in-view=true]:opacity-100
  `),
  quadrants: `
    relative
    grid grid-cols-2 grid-rows-2
    h-full w-full
    p-4
  `,
  anchor: `
    group

    motion-safe:duration-800
    motion-safe:ease-in-out
    motion-safe:hover:shadow-xl
  `,
  index: `
    justify-self-end self-start

    text-tiny
    font-normal
    tracking-widest

    md:text-xtiny
    md:font-light
  `,
  location: `
    justify-self-start self-start

    text-tiny text-left
    font-normal
    uppercase
    tracking-widest
    whitespace-nowrap

    md:text-xtiny
    md:font-light
  `,
  title: `
    justify-self-start self-end
    flex flex-col items-start
    text-[min(10vw,32px)]
    leading-[0.85]
    font-black
    uppercase
    tracking-tight

    xs:text-[2rem]
    sm:text-[min(3.5vw,32px)]
    lg:text-[min(3vw,42px)]

    motion-safe:duration-300
    motion-safe:group-hover:font-thin
    motion-safe:group-hover:font-stretch-condensed
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
  icon: `
    justify-self-end self-end
    w-5 h-5
  `,
});

export default styles;
