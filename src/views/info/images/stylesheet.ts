import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-full
    mt-2

    sm:mt-0
    sm:absolute
    sm:right-0
    sm:top-15
    sm:w-86
    lg:relative
    lg:right-auto
    lg:top-auto
    lg:flex-1
    lg:flex
    lg:align-end
    lg:justify-end
    lg:w-full
  `,
  controls: `
    absolute -bottom-6 right-0
    flex gap-2
    text-tiny text-(--foreground)

    sm:-top-6.5
    sm:right-0
    sm:bottom-auto
  `,
  slides: `
    relative
    w-full
    h-48

    sm:flex
    sm:justify-end
    sm:align-end
  `,
  slide: `
    absolute
    w-full
    h-48

    sm:w-auto
    lg:right-0
  `,
  image: (isActive: boolean) => tw(`
    rounded-lg
    duration-300

    ${isActive ? 'opacity-100' : 'opacity-0'}

    sm:!h-48
  `),
});

export default styles;
