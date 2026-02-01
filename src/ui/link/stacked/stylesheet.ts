import tw from '@/styles';

const styles = tw({
  container: `
    block
    relative

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
    before:bg-(--foreground)/5

    focus:before:opacity-100
    hover:before:opacity-100
  `,
});

export default styles;
