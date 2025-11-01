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
    hidden
    absolute bottom-1 right-1 z-5
    p-2

    base:block
    deka:bottom-10
    deka:right-7
  `,
  icon: `
    w-6 h-6
    stroke-2 stroke-current/90
  `,
});

export default styles;
