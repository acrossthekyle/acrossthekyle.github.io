import tw from '@/styles';

const styles = tw({
  container: `
    relative z-0
    w-screen h-svh
  `,
  slide: `
    !flex items-center text-center
  `,
  cta: `
    group
    relative
    h-auto w-full
    m-2
  `,
  image: `
    aspect-14/16
    rounded-lg
    opacity-0
    duration-300
    grayscale contrast-125

    motion-safe:animate-fade-in
  `,
});

export default styles;
