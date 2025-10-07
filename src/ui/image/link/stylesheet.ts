import tw from '@/styles';

const styles = tw({
  action: `
    absolute right-4 bottom-0 z-3
    w-100
  `,
  child: `
    absolute right-0 bottom-0
    p-4
    text-tiny text-white/90
    font-medium font-stretch-semi-expanded
    tracking-wider
    uppercase
  `,
  arrow: `
    absolute right-0 bottom-4
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
