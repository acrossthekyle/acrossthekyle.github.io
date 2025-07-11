import tw from '@/styles';

const styles = {
  control: tw(`
    absolute top-1/2 z-5
    flex items-center justify-center
    w-8 h-8
    -mt-4
  `),
  next: tw(`
    right-3

    sm:right-6
  `),
  previous: tw(`
    left-3

    sm:left-6
  `),
  chevron: tw(`
    w-5 h-5
    stroke-white stroke-2
  `),
};

export default styles;
