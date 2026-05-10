import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-screen h-full
    flex items-center justify-center
    p-22
    overflow-hidden
    pointer-events-none
  `,
  close: `
    absolute top-4 right-4 z-1
    px-1.5 py-0.5
    text-tiny
    font-normal font-mono
    rounded-sm
    cursor-auto
    pointer-events-auto

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
    motion-safe:focus:opacity-100
  `,
  image: (size: string) => tw(`
    relative z-1
    max-w-full max-h-full
    !w-auto !h-auto
    rounded-lg
    shadow-2xl

    ${size === 'preview' ? `
      aspect-3/4 !w-6/10 duration-600
    ` : `
      aspect-video duration-700
    `}
  `),
  toggle: `
    group
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
    pointer-events-auto
    h-10 w-10
    text-sm
    capitalize

    before:absolute
    before:inset-0
    before:z-0
    before:rounded-xl
    before:bg-(--background)
    before:opacity-35
    before:duration-300

    motion-safe:duration-300
    motion-safe:animate-pulse
    motion-safe:hover:animate-none
    motion-safe:hover:before:bg-(--background)
    motion-safe:hover:before:opacity-50
  `,
  icon: `
    relative z-2
    w-3.5 h-3.5
    duration-300

    group-hover:scale-125
  `,
  caption: `
    absolute bottom-4 left-1/2 z-2
    -translate-x-1/2
    flex flex-col items-center
    text-tiny
    uppercase

    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
  `,
  header: `
    mb-1
    rounded-sm
    bg-(--foreground)
    text-(--background)
    tracking-wide
    px-2 py-0.5
  `,
  lid: `
    flex items-center gap-2
  `,
});

export default styles;
