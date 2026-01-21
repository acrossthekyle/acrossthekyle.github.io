import tw from '@/styles';

const styles = tw({
  open: `
    md:hidden
  `,
  header: `
    text-lg

    md:text-base
  `,
  section: `
    flex flex-col justify-end
    h-[calc(100%-6rem)]
  `,
  list: `
    w-full max-w-lg
    my-0 mx-auto
    flex flex-col gap-3
    capitalize
    text-lg

    md:text-sm
  `,
});

export default styles;
