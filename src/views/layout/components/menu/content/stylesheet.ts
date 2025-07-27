import tw from '@/styles';

const styles = tw({
  header: `
    text-white
    pt-8

    sm:pt-16
  `,
  figure: `
    flex flex-row items-center justify-center
    mx-4

    3xs:flex-col
  `,
  circle: `
    rounded-full
    w-22 h-22
    overflow-hidden

    3xs:h-40
    3xs:w-40
  `,
  image: `
    relative top-2
    scale-130

    3xs:top-6
  `,
  caption: `
    flex flex-col
    text-white text-left
    ms-4

    3xs:text-center
    3xs:mt-4
    3xs:ms-0
  `,
  name: `
    text-xl font-black uppercase
  `,
  job: `
    text-tiny font-medium uppercase
    pt-2

    3xs:px-4
  `,
  location: `
    text-xs uppercase font-medium
  `,
  introduction: `
    p-6 pb-8
    text-sm/6 font-light

    2xs:px-12
  `,
  world: `
    p-6 pt-8 pb-0
  `,
});

export default styles;
