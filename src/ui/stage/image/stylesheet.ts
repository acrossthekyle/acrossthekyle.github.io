import tw from '@/styles';

const styles = tw({
  image: `
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-sm
    grayscale-100
    brightness-60
    portrait:aspect-square
    landscape:aspect-16/9

    md:portrait:aspect-16/9
    md:landscape:aspect-16/9

    group-hover/figure:scale-102
    group-hover/figure:grayscale-0
    group-hover/figure:brightness-80
  `,
});

export default styles;
