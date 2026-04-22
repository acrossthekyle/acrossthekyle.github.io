import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex flex-col gap-0
    pointer-events-none
    h-auto w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in

    lg:h-full
    lg:flex-row
    lg:justify-center
  `,
  wrapper: `
    relative
    flex-none
    p-6 !pb-6

    md:h-full
    md:flex
    md:justify-center
    md:p-0
    lg:h-auto
    lg:block
    lg:!pb-0
  `,
  image: `
    rounded-lg
    pointer-events-auto
    cursor-auto
    aspect-14/16

    md:!w-auto
  `,
  caption: `
    relative
    flex-none
    px-6 pb-6
    font-sans font-medium
    text-xs
    pointer-events-auto
    cursor-auto

    sm:pl-0
    sm:px-0
    sm:max-w-md
    sm:my-0
    sm:mx-auto
    lg:pb-0
    lg:pt-0
    lg:pl-12
    lg:w-86
    lg:flex
    lg:flex-col
    lg:my-0
    lg:mx-0
  `,
  between: `
    justify-between
  `,
  header: `
    mb-4
  `,
  items: `
    flex flex-col gap-4
  `,
  item: (isExpanded: boolean) => tw(`
    flex items-start gap-4

    ${isExpanded && `
      absolute top-0 z-100
      h-full
      bg-(--background)
    `}
  `),
  prefix: `
    inline-block
    mt-2.5
  `,
  link: `
    flex items-start gap-4
    rounded-md

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    sm:p-2
    sm:-m-2
  `,
  icon: `
    -mt-0.5
    w-4 h-4
    opacity-20
  `,
  external: `
    inline-block
    -mt-0.5
    w-2.5 h-2.5
  `,
  faded: `
    block
    opacity-20
  `,
  capitalize: `
    capitalize
  `,
  clamp: `
    lg:line-clamp-6
  `,
  more: `
    hidden
    mt-2

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100

    lg:block
  `,
});

export default styles;
