import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    relative
    flex items-center justify-start
    w-full
    mt-2

    motion-safe:duration-300

    ${canRender ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-60 motion-safe:opacity-0'}
  `),
  inner: `
    relative
    w-full
    ml-8
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
