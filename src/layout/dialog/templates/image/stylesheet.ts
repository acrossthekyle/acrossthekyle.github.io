import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-screen h-full
    flex items-center justify-center
    overflow-hidden
  `,
  image: `
    relative z-1
    !w-auto !h-auto
    aspect-video
    shadow-2xl
  `,
  caption: `
    absolute bottom-8 left-1/2 z-2
    -translate-x-1/2
    flex flex-col items-center gap-0
    text-tiny text-white
    uppercase
    whitespace-nowrap

    sm:flex-row
    sm:gap-2

    motion-safe:duration-300
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
  `,
  divider: `
    hidden

    sm:block
  `,
});

export default styles;
