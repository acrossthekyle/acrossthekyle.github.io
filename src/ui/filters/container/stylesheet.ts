import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    ${isOnChild && `
      w-66

      sx:w-84
    `}

    animate-elastic-in-from-right
  `),
  items: `
    mb-6
  `,
});

export default styles;
