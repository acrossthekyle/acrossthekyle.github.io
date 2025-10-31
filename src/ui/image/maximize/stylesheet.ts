import tw from '@/styles';

const styles = tw({
  dimensions: `
    hidden
    absolute inset-0 z-0

    base:block
  `,
  maximize: `
    hidden
    absolute bottom-5.25 right-5.5 z-3
    p-2
    font-extrablack
    text-sm
    uppercase
    duration-300

    hover:font-semibold
    hover:text-current/90

    hecto:portrait:hidden
    hecto:landscape:block
  `,
  icon: `
    w-8
    stroke-2
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
