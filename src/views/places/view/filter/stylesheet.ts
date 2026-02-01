import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-row gap-5
    py-6 px-7.25
    mt-10 -mx-6
    overflow-x-scroll
    whitespace-nowrap

    md:pl-1.5
    md:px-0
    md:mx-0
    md:overflow-x-visible
    md:flex-wrap
  `,
  select: `
    hidden
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
