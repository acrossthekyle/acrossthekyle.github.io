import tw from '@/styles';

const wrapper = `
  group/maximize
  absolute inset-0
  w-full h-full
  text-left
  !cursor-zoom-in
`;

const styles = tw({
  landscape: `
    ${wrapper}
    z-1
    hidden

    base:landscape:block
  `,
  portrait: `
    ${wrapper}
    z-2

    hidden
  `,
  image: `
    rounded-sm

    brightness-80
    grayscale-0

    object-cover
    w-full
    h-full
  `,
  minimize: `
    relative z-3
    flex items-center justify-center
    w-full h-full
    !cursor-zoom-out
  `,
});

export default styles;
