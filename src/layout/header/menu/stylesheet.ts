import tw from '@/styles';

const styles = tw({
  open: `
    md:hidden
  `,
  header: `
    text-lg

    md:text-base
  `,
  list: `
    w-full max-w-lg
    my-0 mx-auto
    flex flex-col gap-4
    font-mono
    uppercase
    text-base

    md:text-sm
  `,
});

export default styles;
