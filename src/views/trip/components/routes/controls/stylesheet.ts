import tw from '@/styles';

const styles = {
  control: tw(`
    absolute z-2 top-3 right-3
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-black/50
    backdrop-blur-sm
    rounded-lg
    hidden

    lg:flex
    sm:top-6
    sm:right-6
    lg:bottom-6
    lg:left-6
    lg:top-auto
    lg:right-auto
  `),
  icon: tw(`
    w-3.5 h-3.5
    stroke-white
    stroke-2
  `),
};

export default styles;
