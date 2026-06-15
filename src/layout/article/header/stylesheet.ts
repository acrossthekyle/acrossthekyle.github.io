import tw from '@/styles';

export const styles = tw({
  container: `
    col-span-1 order-1
    flex flex-col justify-end
    h-auto
    p-4

    sm:h-svh

    landscape-constrained:mt-12
    landscape-constrained:justify-start
    landscape-constrained:h-auto

    lg:border-r-1
    lg:border-current/10
    lg:h-screen
    lg:fixed
    lg:left-0
    lg:w-[33.33333333336vw]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});


