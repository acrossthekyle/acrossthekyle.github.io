import tw from '@/styles';

const styles = {
  image: (isInView: boolean) => tw(`
    aspect-3/2
    object-cover object-top
    rounded-sm
    duration-300

    ${isInView ? `
      brightness-90
      grayscale-0
    ` : `
      brightness-40
      grayscale-100
    `}

    hover:brightness-90
    hover:grayscale-0
  `),
  skeleton: `
    block
    absolute inset-0 z-1
    w-full h-full
    bg-black
  `,
  pulse: `
    block
    absolute inset-0 z-1
    bg-neutral-900
    animate-pulse

    deci:w-full
    deci:h-full
  `,
};

export default styles;
