import tw from '@/styles';

const styles = tw({
  button: `
    block
    w-full
    relative
    text-left

    before:block
    before:absolute
    before:-inset-2
    before:z-0
    before:opacity-0
    before:duration-300
    before:rounded-sm
    before:bg-(--foreground)/5

    hover:before:opacity-100

    md:ml-2
  `,
  value: `
    capitalize
  `,
  label: `
    !text-base

    md:!text-sm
  `,
  icon: `
    inline-block
    w-4 h-4
    ml-2
    stroke-3
  `,
});

export default styles;
