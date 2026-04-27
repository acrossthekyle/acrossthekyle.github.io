import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    absolute inset-0 z-99
    font-sans font-medium
    flex items-start justify-center
    h-auto w-auto
    text-sm
    bg-(--background)/95
    overflow-y-scroll
    overscroll-none
    cursor-auto
    pointer-events-auto

    ${canRender ? `
      motion-safe:opacity-100
      motion-safe:translate-y-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_0s]
    ` : `
      motion-safe:opacity-0
      motion-safe:-translate-y-full
      motion-safe:[transition:opacity_.7s_var(--ease-in-out)_.3s,translate_0s_linear_.7s]
    `}

    md:mb-0
    lg:bottom-22
    lg:right-6
    lg:inset-auto
    lg:items-end
    lg:h-auto
    lg:w-64
    lg:bg-transparent
    lg:text-xs
    lg:opacity-100
    lg:translate-x-0
    lg:translate-y-0
    lg:overflow-y-visible
  `),
  backdrop: `
    absolute inset-0 z-999

    lg:hidden
  `,
  inner: (canRender: boolean) => tw(`
    absolute left-4 right-4 z-1000
    p-4
    bg-(--background)

    ${canRender ? `
      motion-safe:duration-700
      motion-safe:opacity-100
      motion-safe:top-4
    ` : `
      motion-safe:duration-1000
      motion-safe:opacity-0
      motion-safe:top-full
    `}

    sm:w-82
    sm:left-1/2
    sm:-translate-x-1/2
    lg:relative
    lg:left-auto
    lg:right-auto
    lg:top-auto
    lg:z-1
    lg:translate-x-0
    lg:opacity-100
    lg:w-64
    lg:bg-transparent
    lg:border-0
    lg:p-0
  `),
  close: `
    absolute top-0 right-0 z-2
    p-4

    lg:hidden
  `,
  icon: `
    w-4 h-4
  `,
});

export default styles;
