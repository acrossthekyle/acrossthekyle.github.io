import tw from '@/styles';

const styles = {
  container: tw(`
    absolute left-3 bottom-3 right-3 z-5
    flex items-center justify-center gap-2

    sm:left-6
    sm:right-6
    sm:bottom-6
  `),
  control: tw(`
    flex items-center justify-center gap-2
    w-auto h-8
    px-2
  `),
  icon: tw(`
    w-4.5 h-4.5
    stroke-white
    stroke-2

    sm:w-3.5
    sm:h-3.5
  `),
};

export default styles;
