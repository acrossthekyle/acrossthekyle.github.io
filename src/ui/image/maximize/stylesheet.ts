import tw from '@/styles';

const wrapper = `
  group/maximize
  absolute inset-0
  w-full h-full
  text-left
  !cursor-open
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
    ${isLandscape === true ? 'object-cover' : ''}
    ${isLandscape === true ? 'w-full' : 'w-auto'}
    ${isLandscape === true ? 'h-full' : 'h-auto'}
    transform-gpu duration-500

    brightness-80
    grayscale-0
  `),
  minimize: `
    relative z-3
    flex items-center justify-center
    w-full h-full
    !cursor-close
  `,
});

export default styles;
