import tw from '@/styles';

const styles = tw({
  container: `
    col-span-1 order-2
    h-auto w-full
    p-4

    sm:w-1/2
    sm:col-span-2
    lg:col-span-1
    lg:order-1
    lg:absolute
    lg:left-1/3
    lg:w-1/3
    lg:h-full
    lg:px-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
});

export default styles;
