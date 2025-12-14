import tw from '@/styles';

const styles = tw({
  container: (isOnRoot: boolean, isOnGrandChild: boolean) => {
    const common = `
      flex justify-between

      deka:p-12
    `;

    if (isOnRoot) {
      return tw(`
        ${common}

        flex-1 flex-col w-full items-start
        p-2 pr-0
      `);
    }

    if (isOnGrandChild) {
      return tw(`
        ${common}
        hidden

        base:flex
        base:flex-col
        base:items-start
        base:relative
      `);
    }

    return tw(`
      ${common}

      flex-row items-center justify-between
      p-2 pb-0

      base:pb-4
      base:w-auto
      base:h-full
      base:relative
      base:flex-col
      base:items-start
      base:justify-between
    `);
  },
  upper: (shouldPush: boolean) => tw(`
    ${shouldPush && '-translate-x-[100vw]'}
    flex items-start w-full
    duration-300 ${!shouldPush && 'delay-300'}
  `),
  toggle: `
    p-1
    opacity-0
    animate-in-fade

    base:hidden
  `,
  icon: `
    w-8 h-8
    stroke-2 stroke-current/90
  `,
});

export default styles;
