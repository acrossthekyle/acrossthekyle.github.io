import tw from '@/styles';

const styles = tw({
  open: `
    mr-2
    text-sm
    font-mono
    uppercase

    md:hidden
  `,
  dialog: `
    p-6
    text-base
    font-normal font-sans
    normal-case
  `,
  header: `
    max-w-lg
    font-mono
    uppercase
    text-sm
  `,
  list: `
    w-full max-w-lg
    my-0 mx-auto
    flex flex-col gap-6
    font-mono
    uppercase
    text-sm
  `,
  close: `
    absolute top-0 right-0

    md:top-0
    md:right-0
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
