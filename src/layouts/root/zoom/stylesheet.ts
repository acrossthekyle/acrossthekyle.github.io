import tw from '@/styles';

const styles = {
  dialog: (isOpen: boolean) => tw(`
    absolute
    transform-gpu duration-300
    bg-black

    ${isOpen ? `
      h-screen
      z-100
    ` : `z-0`}
  `),
};

export default styles;
