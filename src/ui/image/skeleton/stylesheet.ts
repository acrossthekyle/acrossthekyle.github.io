import tw from '@/styles';

const styles = tw({
  skeleton: `
    absolute inset-0 z-2
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
  orientation: `
    absolute inset-0 z-0
    w-full h-full
  `,
});

export default styles;
