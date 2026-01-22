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

    ${isSelected ? 'before:bg-(--foreground)/25' : 'before:bg-(--foreground)/5'}

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
});

export default styles;
