import tw from '@/styles';

const styles = tw({
  footer: `
    hidden
    absolute bottom-8 left-0

    md:block
  `,
  kbd: `
    p-1.5
    text-tiny text-current/75
    border border-(--foreground)/50
    rounded-md
  `,
});

export default styles;
