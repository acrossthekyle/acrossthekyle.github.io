import tw from '@/styles';

const styles = tw({
  footer: `
    hidden
    !mt-0

    md:block
  `,
  kbd: `
    fixed right-8 bottom-8
    p-1.5
    text-tiny text-current/75
    border border-(--foreground)/50
    rounded-md
  `,
});

export default styles;
