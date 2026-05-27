import tw from '@/styles';

const PATTERNS = [
  [
    'h-100 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-6 sm:col-span-10 lg:border-r-0 lg:col-span-6 lg:row-span-4 order-0',
    'h-60 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-6 lg:col-span-6 lg:row-span-8 order-1',
    'h-75 xs:h-auto xs:col-span-8 xs:row-span-6 sm:col-span-6 lg:col-span-4 lg:row-span-4 order-2',
    'h-100 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-10 lg:border-r-0 lg:col-span-6 lg:row-span-8 order-3',
    'h-60 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-6 sm:row-span-6 lg:border-r-0 lg:col-span-4 lg:row-span-8 order-4',
    'h-75 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-10 sm:row-span-6 lg:col-span-6 lg:row-span-4 order-5',
  ],
  [
    'h-100 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-6 sm:col-span-10 lg:border-r-0 lg:col-span-6 lg:row-span-4 order-0',
    'h-60 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-6 lg:col-span-6 lg:row-span-8 order-1',
    'h-75 xs:h-auto xs:col-span-8 xs:row-span-6 sm:col-span-6 lg:col-span-4 lg:row-span-4 order-2',
    'h-100 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-10 lg:border-r-0 lg:col-span-6 lg:row-span-8 order-3',
    'h-60 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-6 sm:row-span-6 lg:border-r-0 lg:col-span-4 lg:row-span-8 order-4',
    'h-75 xs:h-auto xs:col-span-8 xs:row-span-4 sm:col-span-10 sm:row-span-6 lg:col-span-6 lg:row-span-4 order-5',
  ],
];

const INCOMPLETE = [
  // 1 - TODO
  [],
  // 2 - TODO
  [],
  // 3 - TODO
  [
    'h-100 border-r-1 xs:h-auto xs:col-span-8 xs:row-span-7 sm:col-span-8 sm:row-span-8 lg:col-span-4 lg:row-span-12 order-0 lg:border-r-0',
    'h-60 xs:h-auto xs:col-span-8 xs:row-span-7 sm:col-span-8 sm:row-span-8 lg:col-span-6 lg:row-span-12 order-1',
    'h-75 xs:h-auto xs:col-span-16 xs:row-span-7 sm:col-span-16 sm:row-span-8 lg:col-span-6 lg:row-span-12 order-2',
  ],
  // 4 - TODO
  [],
  // 5 - TODO
  [],
];

function getRatio(id: string) {
  const sum = id.split('').reduce((accumulator, character) => accumulator + character.charCodeAt(0), 0);

  const index = sum % 3;

  return index === 0 ? 'h-100' : index === 1 ? 'h-120' : 'h-84';
}

const styles = tw({
  // masonry: `
  //   my-4
  //   flex flex-row gap-4
  // `,
  grid: (isIncomplete: boolean) => {
    // return tw(`
    //   flex-1
    //   flex flex-col gap-4
    // `);

    const common = `
      h-auto

      motion-safe:opacity-0
      motion-safe:animate-fade-in-up-slightly-delayed

      xs:grid
      xs:grid-cols-16
      xs:grid-rows-14
      sm:grid-rows-16
      lg:border-l-1
      lg:border-current/10
      lg:grid-rows-12
    `;

    if (isIncomplete) {
      return tw(`
        ${common}

        xs:h-124
        sm:h-136
        lg:h-112
      `);
    }

    return tw(`
      ${common}

      xs:h-svh
      sm:h-screen
    `);
  },
  cell: (parent: number, total: number, index: number, id: string) => {
    // return tw(`
    //   break-inside-avoid
    //   border border-current/10
    //   rounded-sm
    //   ${getRatio(id)}
    // `);

    const common = `
      border-b-1 border-current/10

      motion-safe:opacity-0
      motion-safe:duration-800
      motion-safe:ease-in-out
      motion-safe:transition-[opacity]
      motion-safe:data-[in-view=true]:opacity-100

      lg:border-r-1
    `;

    const isIncomplete = total < 6;

    if (isIncomplete) {
      return tw(`
        ${INCOMPLETE[total - 1][index]}

        ${common}
      `);
    }

    return tw(`
      ${PATTERNS[parent % 2][index]}

      ${common}
    `);
  },
  quadrants: `
    relative
    grid grid-cols-2 grid-rows-2
    h-full w-full
    p-4
  `,
  anchor: `
    group
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

    flex flex-col gap-0

    text-tiny text-left
    leading-[1.2]
    font-normal
    uppercase
    tracking-widest
    whitespace-nowrap

    sm:flex-row
    sm:gap-1
    md:text-xtiny
    md:font-light
  `,
  title: `
    justify-self-start self-end
    flex flex-col items-start
    text-[min(10vw,2rem)]
    leading-[0.95]
    font-black
    uppercase
    tracking-tight

    xs:text-[min(4.25vw,2rem)]
    sm:leading-[0.85]
    sm:text-[min(3.5vw,2rem)]
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
    ml-2
    text-tiny
    font-light
  `,
  icon: `
    justify-self-end self-end
    w-3 h-3

    md:w-4
    md:h-4
  `,
});

export default styles;
