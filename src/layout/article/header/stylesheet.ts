import tw from '@/styles';

const styles = tw({
  container: `
    col-span-1 order-1
    flex flex-col justify-end
    h-auto
    p-4

    sm:h-svh

    landscape-constrained:mt-30
    landscape-constrained:justify-start
    landscape-constrained:min-h-[58vw]

    lg:mt-0
    lg:h-screen
    lg:fixed
    lg:left-0
    lg:w-1/3

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});

export default styles;
