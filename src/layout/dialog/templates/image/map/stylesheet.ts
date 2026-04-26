import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    absolute left-1/2 bottom-10
    -translate-x-1/2
    !opacity-50
    flex items-center justify-center

    mobile-landscape:absolute
    mobile-landscape:left-1/2
    mobile-landscape:bottom-10
    mobile-landscape:-translate-x-1/2
    mobile-landscape:!opacity-50

    portrait:relative
    portrait:left-auto
    portrait:bottom-auto
    portrait:translate-x-0
    portrait:!opacity-100

    md:relative
    md:left-auto
    md:bottom-auto
    md:translate-x-0
    md:!opacity-100

    motion-safe:duration-300

    ${canRender ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-60 motion-safe:opacity-0'}
  `),
  inner: `
    relative z-0
    !w-50
    ml-8 mr-2 mt-2

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
