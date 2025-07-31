import tw from '@/styles';

const styles = tw({
  stats: `
    relative
    flex justify-start gap-16
    w-full max-w-7xl
    ps-11 mb-12
    font-medium
  `,
  stat: `
    relative
  `,
  eyebrow: `
    absolute bottom-2
    text-tiny text-white font-medium uppercase
    origin-bottom-left
    -rotate-90
  `,
  value: `
    ps-2
    text-7xl text-white font-black
  `,
  units: `
    ps-2
    text-6xl text-stone-600 font-black uppercase font-stretch-ultra-condensed
  `,
});

export default styles;
