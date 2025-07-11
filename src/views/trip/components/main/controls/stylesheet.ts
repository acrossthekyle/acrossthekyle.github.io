import tw from '@/styles';

const styles = {
  container: tw(`
    absolute left-3 right-3 bottom-3 z-5
    flex items-center justify-between

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
    w-3.5 h-3.5
    stroke-white
    stroke-2
  `),
};

export default styles;
