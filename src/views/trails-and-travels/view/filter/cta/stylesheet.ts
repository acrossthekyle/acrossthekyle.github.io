import tw from '@/styles';

const styles = tw({
  button: (isSelected: boolean) => tw(`
    relative
    flex items-center justify-between gap-2
    uppercase
    text-xs
    font-mono font-thin
    w-full
    min-h-4
    px-0.5

    before:block
    before:absolute
    before:-inset-1
    before:z-0
    before:duration-300
    before:rounded-sm
    before:border
    before:border-(--foreground)/5

    ${isSelected ? 'before:bg-(--foreground)/22.5' : 'before:bg-(--foreground)/5'}

    hover:before:bg-(--foreground)/25

    md:text-tiny
  `),
  count: `
    flex items-center justify-center
    h-4 min-w-4
    text-tiny text-(--background)
    font-bold
    bg-(--foreground)/60
    rounded-sm
    uppercase
    px-1
  `,
});

export default styles;
