import tw from '@/styles';

const styles = tw({
  container: `
    relative
    block
    w-full
    text-left

    before:absolute
    before:-top-2
    before:-bottom-1
    before:-left-3
    before:-right-3
    before:z-0
    before:block
    before:bg-(--foreground)/5
    before:rounded-sm
    before:opacity-0
    before:duration-300

    focus:before:opacity-100
    hover:before:opacity-100
  `,
});

export default styles;
