import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    col-span-1 order-0
    h-80 w-full
    border-b-1 border-current/10
    overflow-hidden

    sm:order-1
    sm:h-screen
    sm:border-l-1
    sm:border-b-0
    sm:fixed
    sm:top-0
    sm:right-0
    sm:w-[50vw]
    lg:order-2
    lg:w-[calc(33.3333333333vw-0.75rem)]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed

    lg:motion-safe:animate-fade-in-up-slightly-delayed
  `,
});


