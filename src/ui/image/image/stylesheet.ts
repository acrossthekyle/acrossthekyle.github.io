import tw from '@/styles';

const styles = {
  image: (isLandscapeOrientation: boolean, isInView: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-700
    rounded-sm
    brightness-60
    grayscale-100

    ${isLandscapeOrientation && `
      portrait:aspect-square
    `}

    ${isInView && `
      !brightness-80
      !grayscale-0

      base:!brightness-60
      base:!grayscale-100
    `}

    base:group-active/figure:!brightness-80
    base:group-hover/figure:!brightness-80
    base:group-hover/figure:scale-102
  `),
};

export default styles;
