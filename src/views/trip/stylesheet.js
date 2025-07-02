import tw from '@/styles';

const styles = {
  container: tw(`
    relative
    h-[calc(100dvh-1rem)]
    w-[calc(100vw-0.5rem)]
    mb-2
    overflow-hidden
    bg-white/10
    duration-400
    rounded-2xl

    sm:h-[calc(100dvh-6rem)]
    sm:w-[calc(100vw-2rem)]
    sm:max-w-7xl
    sm:shadow-black
    sm:shadow-2xl
    lg:w-[calc(100vw-6rem)]
  `),
  pulse: tw(`animate-pulse`),
  skeleton: tw(`
    relative
    overflow-hidden
    h-full w-full
    bg-neutral-900
    rounded-2xl
  `),
};

export default styles;
