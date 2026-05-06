import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    scroll-smooth
    font-sans font-medium
    bg-(--background)
    text-(--foreground)

    selection:bg-yellow-300
    selection:text-black

    motion-safe:duration-300
  `,
  background: `
    hidden
    glow
    fixed inset-0 z-0
    h-full w-full
    pointer-events-none

    lg:block
  `,
});

export default styles;
