import tw from '@/styles';

const styles = tw({
  toggle: `
    absolute top-4 right-12 z-10

    plank:top-4
    plank:right-14
    deka:top-12
    deka:right-12
    deka:top-auto
  `,
  sun: `
    w-6 h-6

    deka:w-7
    deka:h-7

    light:hidden
  `,
  moon: `
    w-6 h-6

    deka:w-7
    deka:h-7

    dark:hidden
  `,
});

export default styles;
