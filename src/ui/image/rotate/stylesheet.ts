import tw from '@/styles';

const styles = tw({
  container: `
    absolute inset-0 z-5
    flex flex-col items-center justify-center
    backdrop-blur-sm
    rounded-sm
    p-4

    landscape:hidden
  `,
  message: `
    mb-4
    text-sm text-center
    font-semibold
  `,
  x: `
    absolute top-4 right-4
  `,
  rotate: (shouldRotate: boolean) => tw(`
    transition-rotate
    duration-500
    ease-in-out
    ${shouldRotate ? '-rotate-90' : 'rotate-0'}
  `),
});

export default styles;
