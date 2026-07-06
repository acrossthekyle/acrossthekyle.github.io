import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    flex flex-col justify-between gap-0
    w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
});
