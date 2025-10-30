import tw from '@/styles';

const styles = {
  image: (isLandscapeOrientation: boolean, isInView: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-sm
    brightness-60
    grayscale-100

    landscape:aspect-3/2
    portrait:aspect-square

    base:landscape:aspect-3/2
    base:portrait:aspect-3/2

    ${isInView && `
      brightness-80
      !grayscale-0

      base:brightness-60
      base:!grayscale-100
    `}

    group-hover/figure:brightness-80
    group-hover/figure:scale-102
  `),
};

export default styles;
