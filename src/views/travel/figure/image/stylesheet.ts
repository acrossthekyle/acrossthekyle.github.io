import tw from '@/styles';

const styles = tw({
  image: (isInView: boolean, isPlaceholder: boolean) => {
    const common = `
      object-cover
      w-full h-full
      transform-gpu duration-500
      rounded-lg
    `;

    if (isPlaceholder) {
      return tw(`
        ${common}
        absolute inset-0 z-0
        opacity-0
      `);
    }

    return tw(`
      ${common}
      aspect-square

      centi:aspect-auto

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

    brightness-90
    grayscale-0
  `),
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
  zoomed: `
    relative z-3
    flex justify-center
    w-full h-full
    bg-black
  `,
  maximize: (isInView: boolean) => tw(`
    hidden
    absolute right-4 bottom-3.5 z-3
    uppercase
    font-black
    text-white/80
    duration-200

    kilo:bottom-7.5
    kilo:right-8
    deka:block

    hover:text-white

    ${isInView ? `
      opacity-100
    ` : `
      opacity-0
    `}
  `),
  minimize: `
    hidden
    absolute right-4 bottom-3.5 z-2
    uppercase
    font-black
    text-white/80
    duration-200

    kilo:bottom-7.5
    kilo:right-8
    deka:block

    hover:text-white/90
  `,
});

export default styles;
