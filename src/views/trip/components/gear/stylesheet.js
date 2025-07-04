import tw from '@/styles';

const styles = {
  container: (isActive) => tw(`
    absolute inset-0 z-10

    ${isActive ? (`
      translate-x-0

      [transition:translate_0s]
    `) : (`
      -translate-x-full

      [transition:translate_0s_linear_.5s]
    `)}
  `),
  backdrop: (isActive) => tw(`
    absolute inset-0 z-1
    backdrop-blur-sm
    ease-in-out duration-500

    ${isActive ? `
      pointer-events-auto
      opacity-100
    ` : `
      pointer-events-none
      opacity-0
    `}
  `),
  scrollable: (isActive) => tw(`
    relative z-2
    h-full
    w-full
    overflow-y-scroll
    bg-black/60
    ease-in-out duration-500
    pb-2

    ${isActive ? (`
      translate-x-0
    `) : (`
      -translate-x-full
    `)}

    sm:w-98
    sm:pb-6
  `),
  header: tw(`
    text-left text-sm font-light uppercase
    px-3 pt-3

    sm:px-6
    sm:pt-6
    lg:mb-0
  `),
  base: tw(`
    block
    text-xs font-extralight
  `),
  categories: tw(`
    flex justify-center
    mx-2 mt-2
    text-left

    sm:mx-6
    sm:mt-6
  `),
  category: tw(`
    backdrop-blur-xs
    bg-white/10
    rounded-lg
    overflow-y-auto
    w-full
  `),
  inner: tw(`
    group
    px-4
  `),
  heading: tw(`
    relative
    flex items-center
    pt-4
    text-sm uppercase
  `),
  icon: tw(`
    w-3.5 h-3.5
    me-2
  `),
  weight: tw(`
    absolute right-0
    text-xs
  `),
  items: tw(`
    mt-3
    pb-5
    border-b-1 border-b-white/10

    group-last:border-b-0
  `),
  item: tw(`
    mb-2
    text-xs uppercase
    line-clamp-1

    before:content-['_○']
    before:me-2
    before:text-tiny

    last:mb-0
  `),
  link: tw(`
    after:content-['_↗']
    after:text-yellow-300
    after:text-tiny
  `),
  close: tw(`
    absolute top-3 right-3 z-1
    cursor-pointer

    sm:top-6
    sm:right-6
  `),
  arrow: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
};

export default styles;
