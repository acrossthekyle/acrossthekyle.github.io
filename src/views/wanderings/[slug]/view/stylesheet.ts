import tw from '@/styles';

const styles = tw({
  article: (isOnGrandChild: boolean) => tw(`
    base:!pr-12
    deka:!pr-24

    ${isOnGrandChild && `
      opacity-0

      base:hidden
    `}
  `),
  section: `
    flex flex-col-reverse gap-6

    base:flex-col
    base:gap-6
  `,
});

export default styles;
