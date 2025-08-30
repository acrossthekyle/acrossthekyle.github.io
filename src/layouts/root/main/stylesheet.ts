import tw from '@/styles';

const styles = {
  main: (isOnRoot: boolean) => {
    const common = `
      flex flex-col

      base:flex-row
    `;

    if (isOnRoot) {
      return tw(`
        ${common}
      `);
    }

    return tw(`
      ${common}

      flex-1
    `);
  },
};

export default styles;
