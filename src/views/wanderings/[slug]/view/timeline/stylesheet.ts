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
  index: `
    inline-block
    ml-1.5
    font-light
    text-xs
    tracking-normal
  `,
});

export default styles;
