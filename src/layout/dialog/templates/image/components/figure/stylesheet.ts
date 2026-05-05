import tw from '@/styles';

const styles = tw({
  container: `
    w-screen h-full
    flex items-center justify-center
    p-10
    overflow-hidden
    pointer-events-none

    sm:p-12
    lg:p-22

    motion-safe:animate-fade-in
  `,
});

export default styles;
