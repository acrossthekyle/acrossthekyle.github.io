import tw from '@/styles';

const styles = tw({
  list: `
    group/stages
    flex flex-col gap-3

    base:gap-6
  `,
  item: `
    relative
  `,
  arrow: `
    absolute right-0 bottom-0
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
