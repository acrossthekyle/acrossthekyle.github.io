import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex items-center justify-center
    w-full h-full
    pointer-events-none
    py-6

    motion-safe:animate-fade-in
  `,
});

export default styles;
