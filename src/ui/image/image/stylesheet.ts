import tw from '@/styles';

const styles = {
  image: (isInView: boolean, isMaximized: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-500
    rounded-lg
    aspect-square
    brightness-60
    grayscale-100
    select-none

    centi:aspect-auto

    ${isInView && `
      !brightness-90
      !grayscale-0

      ${isMaximized ? `
        !brightness-90
        !grayscale-0
      ` : `
        base:!brightness-60
        base:!grayscale-100
      `}
    `}

    base:group-active/figure:!brightness-90
    base:group-active/figure:!grayscale-0
    base:group-focus/maximize:!brightness-90
    base:group-focus/maximize:!grayscale-0
    base:group-hover/figure:!brightness-90
    base:group-hover/figure:!grayscale-0
  `),
};

export default styles;
