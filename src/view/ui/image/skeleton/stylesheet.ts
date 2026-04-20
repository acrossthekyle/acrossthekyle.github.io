import tw from '@/styles';

const styles = tw({
  skeleton: `
    absolute inset-0 z-3
    rounded-md
    bg-black
  `,
  pulse: `
    w-full h-full
    rounded-md
    bg-neutral-900

    motion-safe:animate-pulse
  `,
  sr: `
    invisible
  `,
});

export default styles;
