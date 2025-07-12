import tw from '@/styles';

const styles = {
  controls: tw(`
    absolute bottom-3 left-3 z-1000
    flex flex-row gap-1

    sm:flex-col
    landscape:flex-col

    sm:bottom-6
    sm:left-6
    lg:bottom-auto
    lg:left-auto
    lg:top-6
    lg:right-6
  `),
  control: tw(`
    z-1000
    flex items-center justify-center
    w-8 h-8
    bg-black/50
    backdrop-blur-sm
    rounded-lg
    cursor-pointer
  `),
  icon: tw(`
    inline
    w-3.5
    h-3.5
    stroke-white
  `),
};

export default styles;
