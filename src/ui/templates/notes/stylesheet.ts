import tw from '@/styles';

const styles = tw({
  container: (isActive: boolean) => tw(`
    absolute inset-0 z-99
    flex items-start
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
  content: (isActive: boolean) => tw(`
    absolute left-1/2 z-1000
    -translate-x-1/2
    w-full
    flex flex-col gap-4
    overflow-y-scroll
    font-sans
    text-sm
    pointer-events-auto
    cursor-auto
    bg-(--background)
    p-4
    rounded-lg

    motion-safe:duration-700

    ${isActive ? `
      motion-safe:opacity-100
      motion-safe:top-4
      motion-safe:lg:top-1/2
    ` : `
      motion-safe:opacity-0
      motion-safe:top-full
    `}

    sm:w-64
    lg:-translate-y-1/2
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
