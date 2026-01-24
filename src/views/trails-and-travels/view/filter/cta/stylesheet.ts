import tw from '@/styles';

const styles = tw({
  button: (isSelected: boolean) => tw(`
    relative
    flex items-center justify-between gap-2
    w-full min-h-4
    px-0.5
    uppercase
    text-xs
    font-mono
    tracking-wide

    before:block
    before:absolute
    before:-inset-1
    before:z-0
    before:duration-300
    before:rounded-sm
    before:border
    before:border-(--foreground)/5

    ${isSelected ? 'before:bg-(--foreground)/17.5' : 'before:bg-(--foreground)/5'}

    hover:before:bg-(--foreground)/25

    md:text-tiny
  `),
  count: `
    flex items-center justify-center
    h-4 min-w-4
    px-1
    text-tiny text-(--background)
    font-bold
    uppercase
    bg-(--foreground)/60
    rounded-sm
  `,
});

export default styles;
