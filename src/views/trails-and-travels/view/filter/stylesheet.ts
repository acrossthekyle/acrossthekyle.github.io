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
    py-3 pl-2
    font-mono
    text-sm text-current/75
    uppercase
    rounded-sm
    duration-800
    bg-(--foreground)/2
    border border-(--foreground)/5

    md:hidden
  `,
});

export default styles;
