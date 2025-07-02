import tw from '@/styles';

const styles = {
  header: tw(`
    relative z-1
    w-full
    mt-6
    px-4

    sm:px-8
    sm:mt-12
  `),
  inner: tw(`
    flex items-center justify-between
    w-full max-w-7xl
    my-0 mx-auto
    w-full
  `),
  menu: tw(`
    flex items-center justify-center
    w-7 h-7
    cursor-pointer
  `),
  icon: tw(`
    h-7 w-7
    stroke-1
    stroke-white
  `),
  main: tw(`
    flex flex-col
    w-full
    px-4 pt-6

    sm:px-8
    sm:pt-12
  `),
};

export default styles;
