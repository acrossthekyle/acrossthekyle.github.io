import tw from '@/styles';

const styles = {
  image: (isLandscapeOrientation: boolean, isInView: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-2xl
    brightness-60
    grayscale-100

    landscape:aspect-19/9
    portrait:aspect-square

    base:rounded-sm
    base:landscape:aspect-16/9
    base:portrait:aspect-16/9

    ${isInView && `
      brightness-80
      !grayscale-0

      base:brightness-60
      base:!grayscale-100
    `}

    group-hover/figure:scale-102
    group-hover/figure:!grayscale-0
  `),
};

export default styles;
