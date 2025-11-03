import tw from '@/styles';

const styles = tw({
  list: `
    group/stages
    flex flex-col gap-4

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
        return '!aspect-square base:!aspect-16/9'; // Indices 0, 3, 6
      case 1:
        return '!aspect-3/2 base:!aspect-16/9'; // Indices 1, 4, 7
      default:
        return '!aspect-2/3 base:!aspect-16/9'; // Indices 2, 5, 8
    }
  },
});

export default styles;
