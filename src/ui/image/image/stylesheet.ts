import tw from '@/styles';

const styles = {
  image: (isLandscapeOrientation: boolean, isInView: boolean, shouldColorize: boolean) => tw(`
    object-cover
    w-full h-full
    transform-gpu duration-500
    rounded-sm
    ${shouldColorize && 'brightness-90'}
    ${!shouldColorize && 'brightness-60'}
    ${!shouldColorize && 'grayscale-100'}

    ${isLandscapeOrientation && `
      portrait:aspect-square
    `}

    ${isInView && `
      ${!shouldColorize && '!brightness-80'}
      ${!shouldColorize && '!grayscale-0'}

      ${!shouldColorize && 'base:!brightness-60'}
      ${!shouldColorize && 'base:!grayscale-100'}
    `}

    ${!shouldColorize && 'base:group-active/figure:!brightness-80'}
    ${!shouldColorize && 'base:group-hover/figure:!brightness-80'}
  `),
};

export default styles;
