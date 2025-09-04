import tw from '@/styles';

const styles = tw({
  image: `
    object-cover
    w-full h-full
    transform-gpu duration-500
    rounded-lg
    aspect-square
    brightness-60
    grayscale-100

    centi:aspect-auto

    group-active/figure:brightness-90
    group-active/figure:grayscale-0
    group-hover/figure:brightness-90
    group-hover/figure:grayscale-0
  `,
  skeleton: `
    aspect-square
    bg-black

    centi:aspect-3/2
  `,
  pulse: `
    relative
    aspect-square
    bg-neutral-900
    animate-pulse

    centi:aspect-3/2
    deci:w-full
    deci:h-full
  `,
});

export default styles;
