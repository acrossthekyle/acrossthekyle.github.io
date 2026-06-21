import tw from '@/styles';

export const styles = tw({
  container: `
    h-auto w-full
    no-scrollbar
    border-t-1 border-dashed border-current/10

    sm:w-[50vw]
    lg:relative
    lg:z-2
    lg:ml-[26vw]
    lg:border-t-0
    lg:w-[calc(100%-26vw)]
    lg:scroll-smooth

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed

    lg:motion-safe:animate-fade-in-down-slightly-delayed
  `,
});


