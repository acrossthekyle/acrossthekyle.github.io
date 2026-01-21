import tw from '@/styles';

const styles = {
  container: (canHover?: boolean) => tw(`
    inline-block
    -ml-1.25 mb-1
    px-1.25 py-0.25
    rounded-sm
    text-xs/5
    font-bold
    uppercase
    scale-90

    dark:bg-white/15 light:bg-black/10
    dark:text-white/75 light:text-black/60

    md:text-tiny/4

    ${canHover && `
      duration-300

      hover:dark:bg-white/30
      hover:light:bg-black/20
    `}
  `),
};

export default styles;
