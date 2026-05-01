import tw from '@/styles';

const styles = tw({
  container: (isActive: boolean) => tw(`
    absolute inset-0 z-99
    flex items-start
    mx-4
    overflow-y-scroll
    overscroll-none

    ${isActive ? `
      motion-safe:translate-y-0
      motion-safe:translate-x-0
      motion-safe:[transition:translate_0s_linear_0s]
    ` : `
      motion-safe:-translate-y-full
      motion-safe:-translate-x-full
      motion-safe:[transition:translate_0s_linear_.7s]
    `}

    sm:mx-0
    lg:items-center
  `),
  backdrop: (isActive: boolean) => tw(`
    absolute inset-0 z-999
    bg-(--background)/95

    ${isActive ? `
      motion-safe:duration-300
      motion-safe:opacity-100
    ` : `
      motion-safe:duration-700
      motion-safe:opacity-0
    `}
  `),
  inner: (isActive: boolean) => tw(`
    absolute left-1/2 z-1000
    -translate-x-1/2
    w-full max-w-82
    flex flex-col gap-4
    overflow-y-scroll
    font-sans
    text-sm
    pointer-events-auto
    cursor-auto
    p-4
    bg-(--background)
    rounded-lg
    shadow-2xl

    motion-safe:duration-700
    motion-safe:-translate-y-1/2

    ${isActive ? `
      motion-safe:opacity-100
      motion-safe:top-1/2
    ` : `
      motion-safe:opacity-0
      motion-safe:top-full
    `}

    constrained:w-9/10
    constrained:max-w-180

    lg:text-xs
  `),
  title: `
    font-medium
  `,
  paragraph: `
    leading-relaxed
  `,
  close: `
    absolute top-0 right-0
    p-4
  `,
  icon: `
    w-4 h-4
  `,
});

export default styles;
