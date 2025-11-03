import tw from '@/styles';

const styles = tw({
  article: (isOnGrandChild: boolean) => tw(`
    base:!pr-10
    deka:!pr-24

    ${isOnGrandChild && `
      hidden
    `}
  `),
});

export default styles;
