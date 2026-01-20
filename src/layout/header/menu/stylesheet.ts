import tw from '@/styles';

const styles = tw({
  open: `
    mr-2
    text-sm
    font-mono
    uppercase

    md:hidden
  `,
  header: `
    text-base
  `,
  list: `
    w-full max-w-lg
    my-0 mx-auto
    flex flex-col gap-4
    font-mono
    uppercase
    text-sm
  `,
});

export default styles;
