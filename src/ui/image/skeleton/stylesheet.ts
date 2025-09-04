import tw from '@/styles';

const styles = tw({
  skeleton: `
    absolute inset-0 z-3
    bg-black
  `,
  pulse: `
    w-full h-full
    rounded-lg
    bg-neutral-900
    animate-pulse
  `,
  sr: `
    invisible
  `,
});

export default styles;
