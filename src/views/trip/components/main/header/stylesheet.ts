import tw from '@/styles';

const styles = {
  header: tw(`
    absolute -top-1 left-0 z-4
    text-left
    w-full
    p-4

    sm:p-6
    sm:right-0
    sm:left-auto
    sm:text-right
  `),
  trip: tw(`
    text-2xl font-thin uppercase
    me-10

    sm:text-3xl
    sm:ms-10
    sm:me-0
  `),
  location: tw(`
    text-xs font-thin uppercase
    me-10

    sm:ms-10
    sm:me-0
  `),
};

export default styles;
