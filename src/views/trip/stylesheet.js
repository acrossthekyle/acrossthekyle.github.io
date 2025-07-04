import tw from '@/styles';

const styles = {
  container: tw(`
    relative
    h-[calc(100dvh-1rem)]
    w-[calc(100vw-0.5rem)]
    mb-2
    overflow-hidden
    bg-(--background)
    duration-400
    rounded-2xl

    sm:h-[calc(100dvh-2rem)]
    sm:w-[calc(100vw-2rem)]
    sm:max-w-7xl
    sm:shadow-black
    sm:shadow-2xl
    lg:h-[calc(100dvh-6rem)]
    lg:w-[calc(100vw-6rem)]
  `),
  inner: tw(`
    relative
    flex flex-col gap-0
    h-full
    ease-in-out duration-800

    lg:flex-row
    landscape:flex-row
    portrait:flex-col
  `),
  close: tw(`
    absolute top-0 left-0 z-5
    cursor-pointer
    p-3

    sm:p-6
  `),
  x: tw(`
    w-5 h-5
    stroke-1
  `),
};

export default styles;
