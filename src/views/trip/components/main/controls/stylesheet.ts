import tw from '@/styles';

const styles = {
  gear: tw(`
    absolute left-3 bottom-3 z-2
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg

    sm:left-6
    sm:bottom-6
  `),
  map: tw(`
    absolute bottom-3 right-3 z-3
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg

    sm:bottom-6
    sm:right-6
  `),
  icon: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
};

export default styles;
