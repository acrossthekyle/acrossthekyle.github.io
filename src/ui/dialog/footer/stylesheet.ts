import tw from '@/styles';

const styles = tw({
  footer: `
    hidden
    fixed right-8 bottom-8
    !mt-0
    text-tiny

    md:block
  `,
  kbd: `
    px-0.75 py-0.5
    text-tiny text-current/75
    bg-(--foreground)/5
    border border-(--foreground)/20
    rounded-sm
  `,
});

export default styles;
