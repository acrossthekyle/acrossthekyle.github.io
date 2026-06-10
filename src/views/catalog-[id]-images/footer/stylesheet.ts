import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-2 left-0 z-100
    w-full
    px-6 pb-4
    flex flex-col items-center justify-between gap-6

    landscape-constrained:pb-1

    sm:pb-2
    sm:flex-row
    sm:gap-12

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  row: `
    flex flex-col items-center gap-6

    sm:flex-row
    sm:gap-12
  `,
});

export default styles;
