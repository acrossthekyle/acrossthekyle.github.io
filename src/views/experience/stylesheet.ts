import tw from '@/styles';

const styles = {
  article: (isOnGrandChild: boolean) => tw(`
    ${isOnGrandChild && 'hidden base:block'}
  `),
};

export default styles;
