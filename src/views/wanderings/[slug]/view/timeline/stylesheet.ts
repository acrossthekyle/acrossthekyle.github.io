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
});

export default styles;
