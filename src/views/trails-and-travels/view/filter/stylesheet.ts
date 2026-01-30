import tw from '@/styles';

const styles = tw({
  list: `
    hidden
    flex-row flex-wrap gap-5
    pb-6 pl-1.5
    mt-16

    md:flex
  `,
  select: `
    block
    w-full
    my-10
    py-2 pl-2
    text-sm
    uppercase
    rounded-sm
    duration-800
    bg-(--foreground)/15
    border border-(--foreground)/15

    md:hidden
  `,
});

export default styles;
