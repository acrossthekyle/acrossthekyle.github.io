import tw from '@/styles';

const styles = tw({
  dimensions: `
    hidden
    absolute inset-0 z-0

    base:block
  `,
  maximize: `
    hidden
    absolute bottom-8 right-7 z-3
    py-1
    w-20
    border-1
    rounded-full
    font-black
    text-tiny text-center
    uppercase
    duration-300
    !cursor-zoom-in

    giga:text-xs
    giga:py-2
    giga:w-24

    hover:bg-current/10

    hecto:portrait:hidden
    hecto:landscape:block
  `,
  icon: `
    w-8
    stroke-2
    stroke-white/90
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
