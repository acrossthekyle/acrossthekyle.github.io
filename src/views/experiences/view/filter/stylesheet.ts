import tw from '@/styles';

const styles = tw({
  container: `
    relative
  `,
  options: `
    absolute top-0 right-0
    h-full
    p-2 px-4
    text-tiny uppercase
    font-bold
    rounded-sm
    border-1 border-(--foreground)/25
    duration-300

    hover:border-(--foreground)/50
  `,
  dialog: `
    p-6

    md:p-8
    md:pt-23
  `,
  header: `
    max-w-lg
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
    rounded-md
  `,
});

export default styles;
