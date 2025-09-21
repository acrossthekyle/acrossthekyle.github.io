import tw from '@/styles';

const wrapper = `
  group/maximize
  absolute inset-0
  w-full h-full
  text-left
`;

const styles = tw({
  landscape: `
    ${wrapper}
    z-1

    landscape:hidden
    base:landscape:block
  `,
  portrait: `
    ${wrapper}
    z-2

    landscape:hidden
  `,
  image: (isLandscape?: boolean) => tw(`
    duration-500
    rounded-sm

    brightness-80
    grayscale-0

    ${isLandscape === true ? `
      object-cover
      w-full
      h-full
    ` : `
      w-auto h-full
    `}
  `),
  minimize: `
    relative z-3
    flex items-center justify-center
    w-full h-full
    text-left
  `,
});

export default styles;
