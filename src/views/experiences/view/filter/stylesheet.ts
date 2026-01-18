import tw from '@/styles';

const styles = tw({
  container: `
    relative
  `,
  options: `
    absolute top-2.25 right-2
    p-2
    text-tiny uppercase
    font-bold
  `,
  dialog: `
    p-6

    md:p-8
    md:pt-23
  `,
  form: `
    relative
    flex flex-col gap-4
    w-full max-w-lg
    my-0 mx-auto
  `,
  heading: `
    !mb-2
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
    rounded-lg
  `,
});

export default styles;
