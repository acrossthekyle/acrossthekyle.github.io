import tw from '@/styles';

const styles = tw({
  wrapper: `
    text-left
    pointer-events-none

    hecto:pointer-events-auto
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
  `,
});

export default styles;
