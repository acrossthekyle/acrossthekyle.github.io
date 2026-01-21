import tw from '@/styles';

const styles = tw({
  button: (isSelected: boolean) => tw(`
    relative
    flex items-center justify-between gap-2
    w-[calc(100%-1rem)]
    mb-3
    capitalize

    before:block
    before:absolute
    before:-inset-2
    before:z-0
    before:duration-300
    before:rounded-sm
    before:bg-(--foreground)/5

    ${isSelected ? 'before:opacity-100' : 'before:opacity-0'}

    hover:before:opacity-100

    md:ml-2
  `),
  count: `
    flex items-center justify-center
    h-4.75 min-w-4.75
    text-tiny text-(--background)
    font-black
    bg-(--foreground)/75
    rounded-sm
    uppercase
    px-1
  `,
  icon: `
    inline-block
    w-4 h-4
    ml-2
    stroke-3
  `,
});

export default styles;
