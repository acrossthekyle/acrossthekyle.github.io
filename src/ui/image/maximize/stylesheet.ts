import tw from '@/styles';

const styles = tw({
  wrapper: `
    group/maximize
    w-full h-full
    text-left
    pointer-events-none

    base:!cursor-zoom-in
    base:pointer-events-auto
  `,
  image: (isLandscape?: boolean) => tw(`
    ${isLandscape === true ? 'object-cover' : ''}
    ${isLandscape === true ? 'w-full' : 'w-auto'}
    h-full
    transform-gpu duration-500
    rounded-lg

    brightness-90
    grayscale-0
  `),
  minimize: `
    relative z-3
    flex justify-center
    w-full h-full
    bg-black
    !cursor-zoom-out
  `,
});

export default styles;
