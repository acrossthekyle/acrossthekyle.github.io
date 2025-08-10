import tw from '@/styles';

const styles = tw({
  close: (isOnCategory: boolean) => tw(`
    absolute top-6 left-6

    sl:top-12
    sl:left-20

    ${isOnCategory ? 'opacity-0 z-0' : 'opacity-100 z-2'}
  `),
  back: (isOnCategory: boolean) => tw(`
    relative
    p-6

    ml:p-0
    ml:absolute
    ml:top-6
    ml:left-6
    sl:top-12
    sl:left-20

    ${isOnCategory ? 'opacity-100 z-2' : 'opacity-0 z-0'}
  `),
  x: `
    stroke-1
    duration-300

    hover:stroke-2
  `,
  stats: (isOnCategory: boolean) => tw(`
    absolute top-6 right-6 z-0
    flex flex-col gap-4
    duration-400

    ${isOnCategory ? 'opacity-0' : 'opacity-100'}

    sm:flex-row
    md:gap-8
    sl:right-20
    sl:top-12
  `),
  stat: `
    text-xs text-white text-right
    font-normal font-mono
    uppercase

    sl:text-sm
  `,
  label: `
    block
  `,
  categories: (isOnCategory: boolean) => tw(`
    group/categories
    absolute bottom-6 left-6 z-1
    flex flex-col

    sl:bottom-12
    sl:left-20

    ${isOnCategory ? `
      hidden

      ml:block
    ` : `

    `}
  `),
  category: `
    overflow-hidden
    opacity-0
    animate-elastic-in
  `,
  link: (isOnCategory: boolean, isActive: boolean) => tw(`
    uppercase
    w-full
    text-left

    ${isOnCategory ? `
      font-light
      text-2xl/4
      tracking-tighter
      duration-300

      lg:text-4xl/8

      ${isActive ? `
        text-white
      ` : `
        text-white/20

        hover:text-white
      `}
    ` : `
      text-xl/5 text-white
      font-black
      duration-400
      group-hover/categories:text-white/25

      hover:font-thin
      hover:text-white

      4xs:text-2xl/4
      2xs:text-4xl/6
      sm:text-5xl/8
      sl:text-6xl/11
    `}
  `),
  list: `
    relative left-auto right-auto top-auto bottom-auto z-0
    py-6 pr-6 pl-6 pt-0
    scroll-smooth
    overflow-y-scroll

    ml:pt-6
    ml:pl-0
    ml:absolute
    ml:right-0
    ml:top-0
    ml:bottom-0
    ml:left-74
    lg:left-106
    sl:left-116
    sl:py-12
    sl:pr-20
  `,
  items: `
    group/items
    flex flex-col gap-2

    lg:gap-4
  `,
  item: (isLink: boolean) => tw(`
    group/item
    relative
    text-xl/4 text-white text-left
    font-black
    uppercase
    transform-gpu duration-400

    group-hover/items:text-white/25

    hover:text-white
    hover:font-extralight

    3xs:text-3xl/6
    sm:text-5xl/10
    lg:text-6xl/12
    xl:text-7xl/14
    sx:text-8xl/18

    ${isLink ? `
      after:content-['_↗']
      after:font-light
      after:text-xl
      after:relative
      after:top-0.5

      3xs:after:absolute
      3xs:after:right-0
      3xs:after:-top-1.5
      lg:after:font-thin
      lg:after:text-4xl
      lg:after:top-4
      xl:after:top-6
      sx:after:top-10
    ` : 'cursor-default'}
  `),
  name: `
    block
  `,
  weight: `
    relative z-0
    text-base
    font-mono
    opacity-100
    pr-1

    group-hover/item:opacity-100

    3xs:pr-8
    3xs:absolute
    3xs:-top-1
    3xs:right-0
    lg:pr-0
    xl:text-lg
    sx:text-xl
  `,
  part: `
    block
  `,
});

export default styles;
