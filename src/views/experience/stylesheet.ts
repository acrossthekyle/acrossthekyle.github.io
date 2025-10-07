import tw from '@/styles';

const styles = {
  article: (isOnGrandChild: boolean) => tw(`
    base:!pr-12
    deka:!pr-24

    ${isOnGrandChild && `
      hidden
    `}
  `),
};

export default styles;
