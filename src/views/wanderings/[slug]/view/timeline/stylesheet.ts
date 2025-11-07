import tw from '@/styles';

const styles = tw({
  list: `
    group/stages
    flex flex-col gap-4
    mb-6

    base:gap-6
  `,
  item: (canAnimate: boolean) => tw(`
    relative

    ${!canAnimate ? 'opacity-100' : 'opacity-0'}
    ${canAnimate && 'animate-elastic-in-from-right'}
  `),
  line: `
    block
  `,
});

export default styles;
