import tw from '@/styles';

const styles = tw({
  skeleton: `
    absolute inset-0 z-3
    rounded-md
    bg-black
    -m-1

    motion-safe:duration-700
    md:motion-safe:group-hover:scale-101
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
