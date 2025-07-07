import tw from '@/styles';

const styles = {
  control: tw(`
    absolute bottom-3 z-5
    flex items-center justify-center gap-2
    w-auto h-8
    px-2
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg
    text-xs uppercase

    sm:bottom-6
  `),
  gear: tw(`
    left-3

    sm:left-6
  `),
  map: tw(`
    right-3

    sm:right-6
  `),
  icon: tw(`
    w-3.5 h-3.5
    stroke-white
    stroke-2
  `),
};

export default styles;
