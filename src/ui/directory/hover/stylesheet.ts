import tw from '@/styles';

const styles = tw({
  container: (isOnChild: boolean) => tw(`
    block
    relative z-1
    mt-1 mb-3
    text-sm/4 ${isOnChild ? `text-left` : `base:text-right`}
    font-light font-stretch-normal
    tracking-tight
    duration-200

    group-hover/link:base:opacity-100

    base:absolute
    ${isOnChild ? `base:bottom-44 base:left-12` : `base:bottom-0 base:right-0`}
    base:opacity-0
    base:w-52
    base:my-0
    base:text-base/4
  `),
});

export default styles;
