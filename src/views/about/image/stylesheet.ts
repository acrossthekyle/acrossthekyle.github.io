import tw from '@/styles';

const styles = tw({
  image: `
    w-60 h-60

    kilo:w-80
    kilo:h-80

    tera:w-130
    tera:h-130
    peta:w-160
    peta:h-160
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
