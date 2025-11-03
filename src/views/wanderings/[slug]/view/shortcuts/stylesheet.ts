import tw from '@/styles';

const styles = tw({
  anchor: `
    relative -top-32 right-0
  `,
  top: `
    hidden
    absolute top-1 right-1 z-5
    p-2

    base:block
    deka:top-10
    deka:right-7
  `,
  bottom: `
    relative
    uppercase
    text-xs text-center
    font-bold
    py-0.75
    mb-6
    w-26
    border-1
    rounded-full

    base:mb-0
    base:w-auto
    base:border-0
    base:p-2
    base:absolute
    base:bottom-1
    base:right-1
    base:z-5
    deka:bottom-10
    deka:right-7
  `,
  icon: `
    hidden
    w-6 h-6
    stroke-2 stroke-current/90

    base:block
  `,
  text: `
    block

    base:hidden
  `,
});

export default styles;
