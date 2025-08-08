import tw from '@/styles';

const styles = tw({
  close: `
    absolute top-12 left-20 z-1
    text-sm text-white
    font-normal font-mono
    uppercase
  `,
  stats: (isNotActive: boolean) => tw(`
    absolute top-12 right-20 z-0
    flex gap-8
    duration-400

    ${isNotActive ? 'opacity-100' : 'opacity-0'}
  `),
  stat: `
    text-sm text-white text-right
    font-normal font-mono
    uppercase
  `,
  label: `
    block
    text-sm
  `,
  categories: `
    group/categories
    absolute bottom-12 left-20 z-1
    flex flex-col
  `,
  category: `
    overflow-hidden
    opacity-0
    animate-elastic-in
  `,
  link: (isOnCategory: boolean, isActive: boolean) => tw(`
    uppercase

    ${isOnCategory ? `
      font-light
      text-4xl/8
      tracking-tighter
      duration-300

      ${isActive ? `
        text-white
      ` : `
        text-white/20

        hover:text-white
      `}
    ` : `
      text-6xl/11 text-white
      font-black
      duration-400
      group-hover/categories:text-white/25

      hover:font-thin
      hover:text-white
    `}
  `),
  list: `
    absolute left-116 right-0 top-0 bottom-0 z-0
    py-14 pe-20
    scroll-smooth
    overflow-y-scroll
    opacity-0
    animate-elastic-in
  `,
  items: `
    group/items
    flex flex-col gap-4
  `,
  item: (isLink: boolean) => tw(`
    group/item
    relative
    text-8xl/18 text-white text-left
    whitespace-pre-line
    font-black
    uppercase
    transform-gpu duration-400

    group-hover/items:text-white/25

    hover:text-white
    hover:font-extralight

    ${isLink ? `
      after:content-['_↗']
      after:font-thin
      after:text-4xl
      after:absolute
      after:right-0
      after:top-10
    ` : 'cursor-default'}
  `),
  name: `
    block
    w-4
  `,
  weight: `
    absolute right-0 top-0 z-0
    text-xl
    font-normal font-mono
    opacity-100

    group-hover/item:opacity-100
  `,
});

export default styles;
