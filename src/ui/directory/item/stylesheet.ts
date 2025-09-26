import tw from '@/styles';

const styles = {
  item: (isOnChild: boolean, lines: number) => {
    const common = `
      ${!isOnChild && 'opacity-0 animate-elastic-in-from-right'}
      overflow-hidden
    `;

    if (isOnChild) {
      return tw(`
        ${common}

        ${lines === 1 && `
          h-11.25

          deka:h-13.5
          mega:h-18
        `}

        ${lines === 2 && `
          h-22.25

          deka:h-26.5
          mega:h-35.5
        `}

        ${lines === 3 && `
          h-33.25

          deka:h-39.5
          mega:h-53
        `}
      `);
    }

    return tw(`
      ${common}

      ${lines === 1 && `
        h-9.25

        pico:h-11.5
        milli:h-13.75
        deci:h-18.5
        base:h-14
        hecto:h-18.5
      `}

      ${lines === 2 && `
        h-18.5

        pico:h-23
        milli:h-27.5
        deci:h-37
        base:h-28
        hecto:h-37
      `}

      ${lines === 3 && `
        h-27.75

        pico:h-34.5
        milli:h-41.25
        deci:h-55.5
        base:h-42
        hecto:h-55.5
      `}
    `);
  },
};

export default styles;
