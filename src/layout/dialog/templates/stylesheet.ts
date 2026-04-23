import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex items-center justify-center
    w-full h-full
    pointer-events-none
    py-6

    motion-safe:animate-fade-in
  `,
  wrapper: `
    relative
    w-full max-w-133
    h-auto

    sm:w-auto
    sm:h-full
    sm:py-0
    2xl:max-w-[66vh]
  `,
  image: `
    rounded-lg

    aspect-12/16
  `,
  caption: (isRenderingDetails: boolean) => tw(`
    absolute -top-6 bottom-6 right-0 z-1
    flex justify-center
    pt-2 px-0
    w-full
    font-sans font-medium
    rounded-lg
    text-sm
    bg-(--background)/95

    ${isRenderingDetails ? `
      motion-safe:opacity-100
      motion-safe:translate-x-0
      motion-safe:translate-y-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_0s]
    ` : `
      motion-safe:opacity-0
      motion-safe:-translate-x-full
      motion-safe:-translate-y-full
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `}

    lg:translate-x-0
    lg:translate-y-0
    lg:flex-col
    lg:justify-end
    lg:top-auto
    lg:!opacity-100
    lg:bg-transparent
    lg:w-64
    lg:text-xs
  `),
  inner: `
    relative
    flex flex-col justify-end
    w-full max-w-133
    px-4 pt-2 pb-6

    lg:h-137
  `,
  header: `
    pb-3
    cursor-auto
    pointer-events-auto

    lg:pb-4
  `,
  items: `
    flex flex-col gap-3
    cursor-auto
    pointer-events-auto

    lg:gap-4
  `,
  item: (isExpanded: boolean) => tw(`
    flex items-start gap-4

    ${isExpanded && `
      absolute inset-0 -top-2 z-100
      p-4
      bg-(--background)

      lg:bg-transparent
    `}
  `),
  prefix: `
    inline-block
    mt-2.5
  `,
  link: `
    flex items-start gap-4
    rounded-md
    outline-0

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    sm:p-2
    sm:-m-2
  `,
  icon: `
    -mt-0.5
    opacity-20

    w-4
    h-4
  `,
  external: `
    inline-block
    -mt-0.5
    w-2.5 h-2.5
  `,
  faded: `
    block
    mb-0.5
    opacity-25
  `,
  capitalize: `
    capitalize
  `,
  clamp: `
    line-clamp-3

    lg:line-clamp-4
  `,
  more: `
    relative z-1
    pt-1 pb-2

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
  map: `
    flex items-center justify-center
  `,
  toggles: `
    absolute bottom-6 left-0 z-1
    w-full
    flex items-center justify-center gap-4

    motion-safe:duration-300

    lg:invisible
    lg:motion-safe:opacity-0
  `,
  toggle: `
    flex items-center gap-2
    text-sm

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
  svg: `
    w-3 h-3
  `,
});

export default styles;
