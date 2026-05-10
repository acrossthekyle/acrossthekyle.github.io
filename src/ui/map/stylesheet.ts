import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-full h-full
  `,
  inner: `
    relative
    w-full h-full
  `,
  marker: `
    absolute z-2
    w-1 h-1
    shadow-[0px_0px_9px_4px_var(--foreground)]
    bg-(--foreground)
    rounded-full

    motion-safe:animate-pulse
  `,
});

export default styles;
