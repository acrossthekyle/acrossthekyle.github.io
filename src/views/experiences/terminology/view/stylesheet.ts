import tw from '@/styles';

const styles = {
  article: (isHighlighted: boolean) => tw(`
    relative
    mb-16

    last:mb-0

    ${isHighlighted && `
      before:absolute
      before:z-0
      before:-inset-3
      before:rounded-lg

      dark:before:bg-white/5 light:before:bg-black/7.5
    `}
  `),
};

export default styles;
