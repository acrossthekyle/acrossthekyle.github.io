import tw from '@/styles';

const styles = {
  container: (noMargin?: boolean) => tw(`
    block
    relative
    ${!noMargin && 'mt-16'}

    before:block
    before:absolute
    before:-top-2
    before:-bottom-2
    before:-left-3
    before:-right-3
    before:z-0
    before:opacity-0
    before:duration-300
    before:rounded-sm
    dark:before:bg-white/5

    hover:before:opacity-100
  `),
};

export default styles;
