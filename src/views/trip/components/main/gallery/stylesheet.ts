import tw from '@/styles';

const styles = {
  container: tw(`
    absolute inset-0 z-2
    overflow-hidden
    duration-500
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
  caption: tw(`
    absolute bottom-14 z-5
    flex flex-col items-center
    px-4
    w-full
    text-sm text-white font-black uppercase

    sm:bottom-17
  `),
  title: tw(`
    flex items-start justify-center
    mb-2

    sm:mb-1
  `),
  step: tw(`
    block
    text-xs font-normal uppercase
  `),
};

export default styles;
