import tw from '@/styles';

const styles = {
  controls: tw(`
    absolute bottom-3 left-3 z-1000
    flex flex-row gap-1

    sm:bottom-6
    sm:left-6
    md:bottom-auto
    md:left-auto
    md:top-6
    md:right-6
  `),
  control: tw(`
    z-1000
    flex items-center justify-center
    w-8
    h-8
    bg-black/50
    backdrop-blur-sm
    rounded-lg
    cursor-pointer
  `),
  icon: tw(`
    inline
    w-4
    h-4
    stroke-white
  `),
};

export default styles;
