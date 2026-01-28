import tw from '@/styles';

const styles = tw({
  list: `
    hidden
    flex-row flex-wrap gap-4
    pb-6 pl-1.5

    md:flex
  `,
  select: `
    block
    w-full
    mb-10
    py-2 pl-2
    text-sm
    uppercase
    rounded-sm
    duration-800
    bg-(--foreground)/2
    border border-(--foreground)/5

    md:hidden
  `,
});

export default styles;
