import tw from '@/styles';

const styles = tw({
  image: (
    isInView: boolean,
    isActive: boolean,
    isFullscreen: boolean,
    isPlaceholder: boolean,
    imageFilter?: string,
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

    let filter = '';

    if (imageFilter === 'none') {
      if (isFullscreen) {
        filter = `
          brightness-90
          grayscale-0
        `;
      } else {
        filter = `
          ${isInView ? `
            brightness-90
            grayscale-0
          ` : `
            brightness-40
            grayscale-100
          `}
        `;
      }
    } else if (imageFilter === 'grayscale') {
      filter = `
        brightness-60
        grayscale-100
      `;
    }

    const gallery = `
      absolute inset-0 z-2

      ${isActive ? 'opacity-100' : 'opacity-0'}
    `;

    return tw(`
      ${common}
      ${gallery}
      ${filter}
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
