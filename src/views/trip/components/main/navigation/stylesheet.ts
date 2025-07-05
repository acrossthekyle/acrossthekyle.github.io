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
    right-1

    sm:right-3
  `),
  previous: tw(`
    left-1

    sm:left-3
  `),
  chevron: tw(`
    w-5 h-5
    stroke-white stroke-2
  `),
};

export default styles;
