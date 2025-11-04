import tw from '@/styles';

const styles = tw({
  dimensions: `
    hidden
    absolute inset-0 z-0

    base:block
  `,
  maximize: `
    hidden
    absolute bottom-8 left-7 z-3
    py-1
    w-20
    border-1
    rounded-full
    font-black
    text-tiny text-center text-white/90
    uppercase
    duration-300

    baseplus:right-7
    baseplus:left-auto
    giga:text-xs
    giga:py-1
    giga:w-21

    hover:bg-current/25
    base:block
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
  `,
  close: `
    absolute top-1 right-1 z-1
    p-2

    deka:top-7
    deka:right-7
  `,
  icon: `
    w-8 h-8
    stroke-1 stroke-white/90
  `,
});

export default styles;
