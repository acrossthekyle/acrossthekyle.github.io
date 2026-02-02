import tw from '@/styles';

const styles = {
  container: (isSelected: boolean) => tw(`
    relative
    flex items-center gap-1
    pb-px
    uppercase
    text-sm text-left

    md:text-xs

    before:block
    before:absolute
    before:left-0
    before:right-0
    before:bottom-0
    before:z-0
    before:h-px
    before:duration-300
    before:rounded-sm

    ${isSelected ? 'before:bg-(--foreground)/85' : 'before:bg-transparent'}

    hover:before:bg-(--foreground)/85
  `),
};

export default styles;
