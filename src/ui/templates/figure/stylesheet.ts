import tw from '@/styles';

const styles = tw({
  container: `
    w-screen h-screen
    flex items-center justify-center
    p-4
    overflow-hidden
    pointer-events-none

    sm:p-12
    lg:p-22

    motion-safe:animate-fade-in
  `,
});

export default styles;
