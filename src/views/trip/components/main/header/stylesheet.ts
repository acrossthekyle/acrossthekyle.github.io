import tw from '@/styles';

const styles = {
  header: tw(`
    absolute top-0 right-0 z-4
    text-right
    w-full
    p-4

    sm:p-6
  `),
  location: tw(`
    text-sm font-thin uppercase
    ms-10
  `),
  trip: tw(`
    text-2xl font-thin uppercase

    sm:mb-6
    sm:text-3xl
  `),
};

export default styles;
