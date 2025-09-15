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

          deka:h-39.25
          mega:h-53
        `}
      `);
    }

    return tw(`
      ${common}

      ${lines === 1 && `
        h-9.25

        pico:h-11.25
        milli:h-13.5
        deci:h-18
        base:h-13.75
        hecto:h-18.25
      `}

      ${lines === 2 && `
        h-18

        pico:h-22.25
        milli:h-26.5
        deci:h-35.5
        base:h-27.25
        hecto:h-36.25
      `}

      ${lines === 3 && `
        h-27

        pico:h-33.25
        milli:h-39.5
        deci:h-53
        base:h-40.75
        hecto:h-54.25
      `}
    `);
  },
};

export default styles;
