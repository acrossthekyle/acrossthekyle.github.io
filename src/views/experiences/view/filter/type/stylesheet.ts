import tw from '@/styles';

const styles = tw({
  container: `
    inline
  `,
  dialog: `
    w-full !max-w-lg
    my-0 mx-auto
    pt-6

    md:pt-8
  `,
  close: `
    absolute top-0 right-0
  `,
  footer: `
    hidden
    absolute bottom-8 right-8

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
