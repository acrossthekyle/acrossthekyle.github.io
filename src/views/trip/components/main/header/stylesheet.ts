import tw from '@/styles';

const styles = {
  header: tw(`
    absolute -top-1 right-0 z-4
    text-right
    w-full
    p-4 ps-10
    font-thin uppercase

    sm:p-6
  `),
  trip: tw(`
    text-3xl
  `),
  location: tw(`
    text-xs
  `),
};

export default styles;
