import tw from '@/styles';

const styles = {
  control: tw(`
    absolute bottom-3 z-5
    flex items-center justify-center
    w-auto h-8
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg
    text-sm uppercase

    sm:bottom-6
  `),
  gear: tw(`
    left-3
    pe-2

    sm:left-6
  `),
  map: tw(`
    right-3
    ps-2

    sm:right-6
  `),
  icon: tw(`
    w-4 h-4
    mx-2
    stroke-white
    stroke-2
  `),
};

export default styles;
