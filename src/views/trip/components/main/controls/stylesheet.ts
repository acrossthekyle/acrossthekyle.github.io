import tw from '@/styles';

const styles = {
  container: tw(`
    absolute left-3 bottom-3 right-3 z-5
    flex items-center justify-between gap-5

    sm:left-6
    sm:bottom-6
    3xs:right-auto
    3xs:justify-center
    3xs:gap-2
  `),
  control: tw(`
    flex items-center justify-center gap-2
    w-full h-8
    px-2

    xs:w-auto
  `),
  icon: tw(`
    w-3.5 h-3.5
    stroke-white
    stroke-2
  `),
};

export default styles;
