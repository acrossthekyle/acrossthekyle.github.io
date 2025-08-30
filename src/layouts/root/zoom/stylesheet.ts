import tw from '@/styles';

const styles = {
  dialog: (isOpen: boolean) => tw(`
    absolute
    transform-gpu duration-300 delay-200

    ${isOpen ? `
      h-screen
      z-100
      opacity-100
    ` : `z-0 opacity-0`}
  `),
};

export default styles;
