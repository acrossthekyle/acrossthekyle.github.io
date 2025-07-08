import tw from '@/styles';

const styles = {
  header: tw(`
    text-left text-sm font-light uppercase
    px-4 pt-4

    sm:px-6
    sm:pt-6
  `),
  container: tw(`
    mt-4
    px-4

    sm:mt-6
    sm:px-6
  `),
  item: tw(`
    relative
    flex
    pb-8
    text-left

    last:pb-4

    before:absolute
    before:left-2.25
    before:top-5.5
    before:bottom-1
    before:w-0.5
    before:bg-white

    last:before:hidden
  `),
  cta: tw(`
    relative
    ps-8
    cursor-pointer
  `),
  circle: tw(`
    absolute -top-0.5
    flex items-center justify-center
    w-5 h-5
    rounded-full
    border-2 border-white
  `),
  filled: tw(`
    bg-white
  `),
  icon: tw(`
    w-3 h-3
    stroke-3
    stroke-black
    fill-black
  `),
  terminus: tw(`
    w-3 h-3
    stroke-3
    stroke-white
    fill-white
  `),
  step: tw(`
    mb-1
    text-xs font-thin uppercase
  `),
  title: tw(`
    text-sm font-normal uppercase
  `),
};

export default styles;
