import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    flex flex-col justify-between gap-6
    h-auto min-h-[calc(34svh)]
  `,
  header: `
    w-full
    flex flex-col items-start
    mx-auto
    font-black
    uppercase
    leading-[1]
    text-[min(8vw,4rem)]

    md:block
    md:text-center
    md:leading-[0.8]
    md:text-[min(6vw,4rem)]
    lg:text-[min(7.5vw,4rem)]
    2xl:text-[min(5vw,5rem)]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-scale-down
  `,
  thin: `
    font-thin
  `,
  emphasis: `
    relative -top-0.5
    font-serif
    italic

    sm:top-auto
  `,
  introduction: `
    w-full max-w-xl
    text-base
    font-normal
    leading-[1.75]

    sm:text-sm
    sm:leading-[1.5]
    md:mx-auto
    md:text-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
});
