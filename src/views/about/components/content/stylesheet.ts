import tw from '@/styles';

export const styles = tw({
  container: `
    col-span-1 order-2
    flex flex-col justify-between
    h-auto w-full

    sm:w-1/2
    sm:col-span-2
    lg:col-span-1
    lg:order-1
    lg:absolute
    lg:left-[33.33333333336vw]
    lg:w-[33.33333333336vw]
    lg:h-full

    landscape-constrained:pb-4

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed

    lg:motion-safe:animate-fade-in-down-slightly-delayed
  `,
});


