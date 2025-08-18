import tw from '@/styles';

const styles = tw({
  image: (
    isInView: boolean,
    isActive: boolean,
    isFullscreen: boolean,
    isPlaceholder: boolean,
  ) => {
    const common = `
      object-cover
      w-full h-full
      transform-gpu duration-500
      rounded-lg
    `;

    if (isPlaceholder) {
      return tw(`
        relative z-0
        ${common}
        opacity-0
      `);
    }

    const gallery = `
      absolute inset-0 z-2

      ${isActive ? 'opacity-100' : 'opacity-0'}
    `;

    if (isFullscreen) {
      return tw(`
        ${common}
        ${gallery}

        brightness-90
        grayscale-0
      `);
    }

    return tw(`
      ${common}
      ${gallery}

      ${isInView ? `
        brightness-90
        grayscale-0
      ` : `
        brightness-40
        grayscale-100
      `}
    `);
  },
  skeleton: `
    absolute z-5 inset-0
    bg-black
  `,
  pulse: `
    relative
    aspect-square
    bg-neutral-900
    animate-pulse

    sm:w-full
    sm:h-full
    sm:aspect-auto
  `,
});

export default styles;
