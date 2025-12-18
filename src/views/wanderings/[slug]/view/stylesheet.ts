import tw from '@/styles';

const styles = tw({
  article: (isOnGrandChild: boolean) => tw(`
    ${isOnGrandChild && `
      hidden
    `}
  `),
  content: `
    flex flex-col-reverse

    base:flex-col
  `,
});

export default styles;
