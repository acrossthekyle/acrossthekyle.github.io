import tw from '@/styles';

export const styles = tw({
  container: `
    flex flex-col
    w-full
    no-scrollbar

    sm:w-[50vw]
    lg:h-svh
    lg:border-r-1
    lg:border-current/10
    lg:border-dashed
    lg:w-[26vw]
    lg:overflow-y-scroll
    lg:scroll-smooth

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});


