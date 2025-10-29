import tw from '@/styles';

const styles = tw({
  block: `
    relative
    block
  `,
  index: (isOnChild: boolean) => tw(`
    ml-0.75
    text-tiny/2
    font-light font-stretch-condensed
    tracking-normal

    base:ml-1.5

    ${isOnChild ? 'mega:text-tiny/3' : 'mega:text-sm/3'}
  `),
});

export default styles;
