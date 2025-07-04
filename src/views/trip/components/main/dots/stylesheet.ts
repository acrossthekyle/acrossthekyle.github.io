import tw from '@/styles';

const styles = {
  dots: tw(`
    absolute left-10 right-10 bottom-6 z-4
    flex items-center justify-center

    sm:bottom-9
  `),
  dot: tw(`
    duration-500
    rounded-full
    bg-white/30
    ring-1 ring-white/60
    cursor-pointer
  `),
  dotted: tw(`
    !bg-white/70
  `),
};

export default styles;
