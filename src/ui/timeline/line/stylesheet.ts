import tw from '@/styles';

const styles = tw({
  container: `
    absolute left-0 top-0 bottom-0

    after:absolute
    after:top-7
    after:bottom-0
    after:start-1
    after:w-px
    after:-translate-x-[0.5px]
    after:bg-(--foreground)/17.5
  `,
  dot: `
    size-2
    m-2.5 ml-0
    rounded-full
    bg-(--foreground)/25
  `,
});

export default styles;
