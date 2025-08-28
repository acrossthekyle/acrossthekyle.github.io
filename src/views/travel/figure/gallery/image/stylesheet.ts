import tw from '@/styles';

const styles = tw({
  image: (isInView: boolean, isActive: boolean, isPlaceholder: boolean) => {
    const common = `
      w-full h-full
      transform-gpu duration-500
      rounded-lg
    `;

    if (isPlaceholder) {
      return tw(`
        ${common}

        relative z-0
        opacity-0
      `);
    }

    return tw(`
      ${common}
      absolute inset-0 z-2

      ${isActive ? 'opacity-100' : 'opacity-0'}

      ${isInView ? `
        brightness-90
        grayscale-0
      ` : `
        brightness-40
        grayscale-100
      `}
    `);
  },
  maximized: (isLandscape?: boolean) => tw(`
    ${isLandscape === true ? 'object-cover' : ''}
    ${isLandscape === true ? 'w-full' : 'w-auto'}
    h-full
    transform-gpu duration-500
    rounded-lg
    absolute inset-auto z-2
    opacity-100

    brightness-90
    grayscale-0
  `),
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
  minimize: `
    relative z-3
    flex justify-center
    w-full h-full
  `,
  toggle: `
    hidden
    absolute right-4 bottom-3.5 z-2
    uppercase
    font-black
    text-white/80
    duration-200

    2ml:bottom-7.5
    2ml:right-8
    ml:block

    hover:text-white
  `,
});

export default styles;
