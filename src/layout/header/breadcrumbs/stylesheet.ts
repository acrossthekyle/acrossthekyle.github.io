import tw from '@/styles';

const styles = tw({
  container: `
    ml-2
    text-sm
    uppercase
    line-clamp-1

    base:hidden
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
