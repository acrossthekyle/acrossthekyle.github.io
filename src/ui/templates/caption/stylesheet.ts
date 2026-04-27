import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    absolute top-4 z-99
    font-sans font-medium
    flex items-start justify-center
    h-full w-full
    text-sm
    bg-(--background)/95
    overflow-y-scroll
    overscroll-none
    pointer-events-auto

    ${canRender ? `
      motion-safe:opacity-100
      motion-safe:translate-y-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_0s]
    ` : `
      motion-safe:opacity-0
      motion-safe:-translate-y-full
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.7s]
    `}

    lg:bottom-22
    lg:right-6
    lg:top-auto
    lg:items-end
    lg:h-auto
    lg:w-64
    lg:bg-transparent
    lg:text-xs
    lg:opacity-100
    lg:translate-x-0
    lg:translate-y-0
  `),
  inner: (canRender: boolean) => tw(`
    w-full h-auto
    p-4
    overflow-y-scroll

    ${canRender ? `
      motion-safe:translate-y-0
      motion-safe:[transition:translate_.3s_linear_0s]
    ` : `
      motion-safe:translate-y-full
      motion-safe:[transition:translate_.7s_linear_0s]
    `}

    sm:w-64
    lg:overflow-hidden
    lg:translate-y-0
    lg:bg-transparent
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
