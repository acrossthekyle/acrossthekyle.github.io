import tw from '@/styles';

const styles = {
  article: (isOnGrandChild: boolean) => tw(`
    ${isOnGrandChild && `
      hidden
    `}
  `),
};

export default styles;
