import tw from '@/styles';

const styles = tw({
  container: `
    fixed z-9999
    w-full max-w-full
    h-full max-h-full
    bg-transparent
    text-(--foreground)
    opacity-0
    outline-none
    overflow-x-visible
    overflow-y-scroll
    scroll-smooth
    duration-300
    cursor-pointer

    backdrop:bg-(--background)
    backdrop:opacity-0
    backdrop:outline-none
    backdrop:duration-300
  `,
});

export default styles;
