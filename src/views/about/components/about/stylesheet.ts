import tw from '@/styles';

export const styles = tw({
  container: `
    flex flex-col
    w-full
    no-scrollbar

    sm:w-[50vw]
    lg:overscroll-contain
    lg:fixed
    lg:top-0
    lg:left-0
    lg:h-svh
    lg:border-r-1
    lg:border-current/20
    lg:border-dashed
    lg:w-[26vw]
    lg:overflow-y-scroll
    lg:scroll-smooth

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});


