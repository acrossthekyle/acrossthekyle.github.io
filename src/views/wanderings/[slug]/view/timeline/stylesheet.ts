import tw from '@/styles';

const styles = tw({
  list: `
    group/stages
    flex flex-col gap-4
    mb-6

    base:gap-6
  `,
  item: `
    relative
    opacity-0
    animate-elastic-in-from-right
  `,
  line: `
    block
  `,
  image: (index: number) => {
    switch (index % 3) {
      case 0:
        // Indices 0, 3, 6
        return 'portrait:!aspect-4/5 base:!aspect-16/9';
      case 1:
        // Indices 1, 4, 7
        return 'portrait:!aspect-11/8 base:!aspect-16/9';
      default:
        // Indices 2, 5, 8
        return 'portrait:!aspect-square base:!aspect-16/9';
    }
  },
});

export default styles;
