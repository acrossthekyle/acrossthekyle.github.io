import tw from '@/styles';

const styles = {
  header: tw(`
    text-white
    pt-8

    sm:pt-16
  `),
  figure: tw(`
    flex flex-row items-center justify-center
    mx-4

    3xs:flex-col
  `),
  circle: tw(`
    rounded-full
    w-22 h-22
    overflow-hidden

    3xs:h-40
    3xs:w-40
  `),
  image: tw(`
    relative top-2
    scale-130

    3xs:top-6
  `),
  caption: tw(`
    flex flex-col
    text-white text-left
    ms-4

    3xs:text-center
    3xs:mt-4
    3xs:ms-0
  `),
  name: tw(`
    text-xl font-black uppercase
  `),
  job: tw(`
    text-tiny font-medium uppercase
    pt-2

    3xs:px-4
  `),
  location: tw(`
    text-xs uppercase font-medium
  `),
  introduction: tw(`
    p-6 pb-8
    text-sm/6 font-light

    2xs:px-12
  `),
  world: tw(`
    p-6 pt-8 pb-0
  `),
};

export default styles;
