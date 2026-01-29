import tw from '@/styles';

const styles = tw({
  open: `
    relative -top-1 -right-0.75

    md:hidden
  `,
  icon: `
    w-7 h-7
    stroke-1
  `,
  anchor: `
    relative
    block
    w-8 h-8
    text-base
  `,
  list: `
    flex flex-col gap-5
  `,
  theme: `
    fixed right-6 bottom-6
  `,
});

export default styles;
