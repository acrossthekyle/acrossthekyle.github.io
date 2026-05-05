import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean, isCentered?: boolean) => {
    const base = `
      absolute inset-0 z-99
      font-sans font-medium
      flex items-start justify-center
      h-auto w-auto
      text-sm
      overflow-y-scroll
      overscroll-none
      cursor-auto
      pointer-events-auto
    `;

    const renderable = canRender ? `
      motion-safe:opacity-100
      motion-safe:translate-y-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_0s]
    ` : `
      motion-safe:opacity-0
      motion-safe:-translate-y-full
      motion-safe:[transition:opacity_.7s_var(--ease-in-out)_.3s,translate_0s_linear_.7s]
    `;

    if (isCentered) {
      return tw(`
        ${base}

        ${renderable}
      `);
    }

    return tw(`
      ${base}

      ${renderable}

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
    `);
  },
  backdrop: (isCentered?: boolean) => tw(`
    absolute inset-0 z-998
    outline-0

    ${!isCentered && 'bg-(--background)/90'}
    ${!isCentered && 'lg:hidden'}
  `),
  inner: (canRender: boolean, isCentered?: boolean) => {
    const base = `
      absolute left-1/2 z-1000
      w-9/10 max-w-120
      p-4
      rounded-lg
      overflow-hidden

      constrained:w-9/10
      portrait-constrained:max-w-120

      sm:w-82

      ${isCentered && 'lg:bg-neutral-900 lg:shadow-2xl/90'}
      ${!isCentered && 'lg:overflow-visible'}
    `;

    const renderable = `
      motion-safe:-translate-x-1/2

      ${canRender ? `
        motion-safe:duration-700
        motion-safe:opacity-100
        motion-safe:top-4
      ` : `
        motion-safe:duration-1000
        motion-safe:opacity-0
        motion-safe:top-full
      `}
    `;

    if (isCentered) {
      return tw(`
        ${base}

        ${renderable}
      `);
    }

    return tw(`
      ${base}

      ${renderable}

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
      lg:shadow-none
    `);
  },
  close: (isCentered?: boolean) => tw(`
    absolute top-0 right-0 z-2
    p-4

    ${!isCentered && 'lg:hidden'}
  `),
  icon: `
    w-4 h-4
  `,
});

export default styles;
