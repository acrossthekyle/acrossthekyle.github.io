import tw from '@/styles';

const styles = tw({
  button: (isSelected: boolean) => tw(`
    relative
    flex items-center justify-between gap-2
    w-full h-4.5
    px-0.5
    uppercase
    text-sm
    tracking-wide

    before:block
    before:absolute
    before:-inset-1
    before:z-0
    before:duration-300
    before:rounded-sm
    before:border
    before:border-(--foreground)/7.5

    ${isSelected ? 'before:bg-(--foreground)/25' : 'before:bg-(--foreground)/7.5'}

    hover:before:bg-(--foreground)/30

    md:h-4
    md:text-xs
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
