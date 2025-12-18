import tw from '@/styles';

const styles = tw({
  article: (isOnGrandChild: boolean) => tw(`
    ${isOnGrandChild && `
      hidden
    `}
  `),
});

export default styles;
