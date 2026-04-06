import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-full
    mt-2

    sm:absolute
    sm:bottom-0
    sm:right-0
    sm:mt-0
    sm:w-72
  `,
  controls: `
    relative
    flex justify-end gap-2
    mb-2
    text-tiny

    sm:absolute
    sm:-top-6.5
    sm:right-0
    sm:bottom-auto
    sm:mb-0
  `,
  slides: `
    relative
    w-full
    h-64

    sm:flex
    sm:justify-end
    sm:align-end
    sm:h-48
  `,
  slide: `
    absolute
    w-full
    h-64

    sm:w-auto
    sm:h-48
    lg:right-0
  `,
  image: (isActive: boolean) => tw(`
    rounded-sm
    duration-300
    aspect-square

    ${isActive ? 'opacity-100' : 'opacity-0'}

    sm:aspect-3/2
    sm:!h-48
    md:rounded-lg
  `),
});

export default styles;
