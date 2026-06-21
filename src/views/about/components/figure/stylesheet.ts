import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    h-80 w-full
    border-b-1 border-current/10

    sm:fixed
    sm:right-0
    sm:top-0
    sm:z-0
    sm:h-screen
    sm:border-l-1
    sm:border-b-0
    sm:w-[50vw]
    lg:w-[26vw]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed

    lg:motion-safe:animate-fade-in-up-slightly-delayed
  `,
});
