import tw from '@/styles';

const styles = tw({
  block: `
    relative
    block

    first-letter:text-current/80
  `,
  index: (isOnChild: boolean) => tw(`
    ml-0.75
    text-tiny/2
    font-light font-stretch-condensed
    tracking-normal

    base:ml-1.5

    ${isOnChild ? 'mega:text-tiny/3' : 'base:text-sm/3'}
  `),
});

export default styles;
