import tw from '@/styles';

const styles = tw({
  button: (isSelected: boolean) => tw(`
    relative
    flex items-center justify-between gap-3
    capitalize
    text-base
    w-full
    min-h-6
    px-0.5

    before:block
    before:absolute
    before:-inset-1.5
    before:z-0
    before:duration-300
    before:rounded-sm
    before:border
    before:border-(--foreground)/7

    ${isSelected ? 'before:bg-(--foreground)/22.5' : 'before:bg-(--foreground)/10'}

    hover:before:bg-(--foreground)/25
  `),
  count: `
    flex items-center justify-center
    h-4.75 min-w-4.75
    text-tiny text-(--background)
    font-bold
    bg-(--foreground)/75
    rounded-sm
    uppercase
    px-1
  `,
  icon: `
    inline-block
    w-3 h-3
    ml-1
    stroke-3
  `,
});

export default styles;
