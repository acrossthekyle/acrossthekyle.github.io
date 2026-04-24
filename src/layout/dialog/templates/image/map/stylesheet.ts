import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    relative
    flex items-center justify-center

    motion-safe:duration-300

    ${canRender ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}
  `),
  inner: `
    relative z-0
    !w-50
    ml-8 mr-2

    lg:mt-2
    lg:!w-56
  `,
  marker: `
    absolute z-2
    w-2 h-2
    shadow-[0px_0px_9px_4px_var(--foreground)]
    bg-(--foreground)
    rounded-full

    motion-safe:animate-pulse
  `,
});

export default styles;
