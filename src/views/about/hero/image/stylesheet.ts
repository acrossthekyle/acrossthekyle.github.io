import tw from '@/styles';

const styles = tw({
  image: `
    relative z-0
    w-full h-auto
    px-10
    mt-6

    centi:w-76
    centi:h-76
    centi:mt-0
    centi:px-0
    centi:absolute
    centi:right-0
    centi:bottom-0
    deci:w-100
    deci:h-100
    tera:w-120
    tera:h-120
    peta:w-180
    peta:h-180
  `,
  skeleton: `
    block
    absolute inset-0 z-1
    w-full h-full
    bg-black
  `,
  pulse: `
    block
    absolute inset-0 z-1
    bg-neutral-900
    animate-pulse

    deci:w-full
    deci:h-full
  `,
});

export default styles;
