import tw from '@/styles';

const styles = tw({
  list: `
    group/stages
    flex flex-col gap-3

    base:gap-6
  `,
  item: `
    relative
    opacity-0
    animate-elastic-in-from-right
  `,
  more: `
    font-black
  `,
  arrow: `
    relative -top-0.25
    inline-block
    ml-0.5
    w-3 h-3
    stroke-4
  `,
});

export default styles;
