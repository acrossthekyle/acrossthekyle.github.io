import tw from '@/styles';

const styles = tw({
  image: (size: string) => tw(`
    transition-all ease-in-out
    max-w-full max-h-full
    !w-auto !h-auto
    rounded-lg

    ${size === 'preview' ? 'aspect-3/4 !w-6/10 !h-auto duration-600' : 'aspect-video !w-auto !h-auto duration-700'}
  `),
  toggle: `
    group
    absolute top-1/2 left-1/2
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
    pointer-events-auto
    h-10 w-10
    font-sans font-medium
    text-sm
    capitalize

    before:absolute
    before:inset-0
    before:z-0
    before:rounded-xl
    before:bg-(--background)
    before:opacity-25
    before:duration-300

    motion-safe:duration-300
    motion-safe:animate-pulse
    motion-safe:hover:animate-none
    motion-safe:hover:before:bg-(--background)
    motion-safe:hover:before:opacity-50

    md:text-xs
  `,
  icon: `
    relative z-2
    w-3.5 h-3.5
    duration-300

    group-hover:scale-125
  `,
});

export default styles;
