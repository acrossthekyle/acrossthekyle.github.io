import tw from '@/styles';

const styles = {
  header: tw(`
    absolute top-0 right-0 z-4
    text-right
    w-full
    p-3

    sm:p-6
  `),
  location: tw(`
    text-sm font-thin uppercase
    ms-10
  `),
  trip: tw(`
    mb-1
    text-3xl font-thin uppercase
  `),
  title: tw(`
    mb-1
    text-sm text-white text-right font-black uppercase
  `),
  step: tw(`
    block
    text-xs font-normal uppercase
  `),
};

export default styles;
