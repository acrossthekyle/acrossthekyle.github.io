import tw from '@/styles';

const styles = {
  control: tw(`
    absolute top-1/2 z-5
    flex items-center justify-center
    w-8 h-8
    -mt-4
    cursor-pointer
  `),
  next: tw(`
    right-2

    sm:right-4
  `),
  previous: tw(`
    left-2

    sm:left-4
  `),
  chevron: tw(`
    w-5 h-5
    stroke-white stroke-2
  `),
};

export default styles;
