import tw from '@/styles';

const styles = tw({
  container: `
    w-full
    mx-2 -mt-1
  `,
  list: `
    flex
    text-sm
    uppercase

    base:hidden
  `,
  item: `
    line-clamp-1
  `,
  slash: (isOnParent: boolean) => tw(`
    inline
    mx-2
    ${isOnParent && `text-current/50`}
  `),
  match: (isOnParent: boolean) => tw(`
    ${isOnParent ? `text-current/50` : 'text-current/90'}
  `),
});

export default styles;
