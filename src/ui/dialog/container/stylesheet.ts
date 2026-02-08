import tw from '@/styles';

const styles = tw({
  dialog: `
    px-0
  `,
  close: `
    absolute top-6 right-6

    md:right-8
    md:top-16
  `,
  icon: `
    w-7.5 h-7.5
    stroke-1

    md:w-6
    md:h-6
  `,
  hint: `
    !hidden
    fixed right-8 bottom-2
    text-tiny

    md:!block
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
