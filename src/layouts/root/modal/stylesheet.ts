import tw from '@/styles';

const styles = {
  dialog: (isOpen: boolean) => tw(`
    bg-black
    absolute
    duration-400

    ${isOpen ? `
      h-screen
      z-100
    ` : `z-0`}
  `),
};

export default styles;
