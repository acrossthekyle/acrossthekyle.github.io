import tw from '@/styles';

const styles = {
  header: tw(`
    text-left text-sm font-light uppercase
    px-4 pt-4

    sm:px-6
    sm:pt-6
    lg:mb-0
  `),
  base: tw(`
    block
    mt-1
    text-xs font-extralight
  `),
  categories: tw(`
    flex justify-center
    mx-4 mt-4 mb-2
    text-left

    sm:mx-6
    sm:mt-6
    sm:mb-0
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
    mb-4
    text-xs uppercase
    line-clamp-1

    before:content-['_○']
    before:me-3
    before:text-tiny

    last:mb-0
  `),
  link: tw(`
    after:content-['_↗']
    after:text-yellow-300
    after:text-tiny
  `),
};

export default styles;
