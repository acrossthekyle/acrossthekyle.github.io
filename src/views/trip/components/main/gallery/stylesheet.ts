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
};

export default styles;
