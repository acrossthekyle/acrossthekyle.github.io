import tw from '@/styles';

const styles = {
  container: tw(`
    absolute inset-0 z-2
    overflow-hidden
    duration-500
  `),
  header: tw(`
    absolute top-0 right-0 z-4
    text-right
    w-full
    p-3

    sm:p-6
  `),
  location: tw(`
    text-sm font-thin uppercase
    ms-10
  `),
  trip: tw(`
    mb-1
    text-3xl font-thin uppercase
  `),
  title: tw(`
    mb-1
    text-sm text-white text-right font-black uppercase
  `),
  step: tw(`
    block
    text-xs font-normal uppercase
  `),
  figure: tw(`
    relative
    h-full

    before:absolute
    before:z-3
    before:inset-0
    before:bg-radial
    before:from-transparent
    before:to-black/40
    before:pointer-events-none
  `),
  image: tw(`
    absolute z-1
    object-cover
    w-full h-full
    duration-500
  `),
  featured: tw(`
    z-2
    opacity-100
  `),
  hidden: tw(`
    z-1
    opacity-0
  `),
  dots: tw(`
    absolute left-10 right-10 bottom-5.5 z-4
    flex items-center justify-center

    sm:bottom-6
  `),
  dot: tw(`
    duration-500
    rounded-xs
    bg-white
    cursor-pointer
  `),
  dotted: tw(`
    !bg-yellow-300
  `),
  control: tw(`
    absolute top-1/2 z-3
    flex items-center justify-center
    cursor-pointer
    w-8 h-8
    -mt-4
  `),
  next: tw(`
    right-2

    sm:right-4
  `),
  previous: tw(`
    left-2

    sm:left-4
  `),
  resize: tw(`
    absolute z-3
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg
  `),
  left: tw(`
    bottom-3 left-3

    sm:bottom-6
    sm:left-6
    lg:bottom-6
    lg:left-6
    lg:top-auto
    lg:right-auto
  `),
  right: tw(`
    bottom-3 right-3

    sm:bottom-6
    sm:right-6
  `),
  icon: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
  sm: tw(`
    block

    md:hidden
  `),
  lg: tw(`
    hidden

    md:block
  `),
};

export default styles;
