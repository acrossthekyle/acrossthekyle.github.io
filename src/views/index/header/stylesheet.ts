import tw from '@/styles';

export const styles = tw({
  container: `
    relative
    flex flex-col justify-between gap-6
    h-auto min-h-[calc(34svh)]
  `,
  header: `
    w-full
    mx-auto
    font-black
    uppercase
    leading-[1]
    text-[min(8vw,4rem)] text-center

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
    font-serif
    italic
  `,
  introduction: `
    w-full max-w-xl
    mx-auto
    text-base text-center
    font-normal
    leading-[1.75]

    md:text-sm
    md:leading-[1.5]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
});
