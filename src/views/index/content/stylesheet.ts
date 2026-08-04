import tw from '@/styles';

export const styles = tw({
  container: `
    relative z-10
    flex flex-col gap-0
    w-full

    motion-safe:opacity-0
    motion-safe:animate-disolve-in
  `,
});
