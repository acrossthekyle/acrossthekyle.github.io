import tw from '@/styles';

const styles = tw({
  footer: `
    flex justify-end
    mt-4

    base:hidden
  `,
  up: `
    flex items-center gap-1
    uppercase
    text-xs
    font-bold
  `,
  icon: `
    inline-block
    w-3 h-3
    stroke-4
  `,
});

export default styles;
