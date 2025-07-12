import tw from '@/styles';

const styles = {
  container: tw(`
    relative
    h-dvh
    w-dvw
    overflow-hidden
    shadow-black shadow-2xl
    duration-400
    bg-(--background)

    sm:rounded-2xl
    sm:h-[calc(100dvh-2rem)]
    sm:w-[calc(100vw-2rem)]
    sm:max-w-7xl
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
    absolute top-0 right-0 z-5
    cursor-pointer
    p-4

    sm:p-6
    sm:left-0
    sm:right-auto
  `),
  x: tw(`
    w-5 h-5
    stroke-1
  `),
};

export default styles;
