import tw from '@/styles';

const styles = tw({
  action: `
    absolute right-0 top-0 z-5
    flex items-center
    p-4

    kilo:top-auto
    kilo:bottom-0.25
  `,
  child: `
    text-tiny text-white/90
    font-medium font-stretch-semi-expanded
    tracking-wider
    uppercase
  `,
  arrow: `
    w-3.5 h-3.5
    stroke-2
  `,
});

export default styles;
