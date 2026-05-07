import tw from '@/styles';

const styles = tw({
  container: `
    fixed z-9999
    w-screen
    h-dvh
    bg-transparent
    text-(--foreground)
    outline-none
    overflow-x-hidden
    overflow-y-scroll
    scroll-smooth
    cursor-pointer

    motion-safe:duration-550
  `,
});

export default styles;
