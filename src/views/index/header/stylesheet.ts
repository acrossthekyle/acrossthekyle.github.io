import tw from '@/styles';

export const styles = tw({
  container: `
    relative z-10
    flex flex-col justify-between gap-6

    md:mb-10
  `,
  header: `
    relative z-10
    w-full
    mx-auto mb-54
    font-black
    uppercase
    leading-[1]
    text-[min(8vw,4rem)] text-right

    md:mb-0
    md:leading-[0.8]
    md:text-[min(4.5vw,4rem)]
    md:text-center
    2xl:text-[min(5vw,5rem)]

    motion-safe:opacity-0
    motion-safe:animate-disolve-in
  `,
  thin: `
    font-thin
  `,
  emphasis: `
    font-serif
    italic
  `,
  figure: `
    absolute top-44 left-1/2 z-0
    -translate-x-1/2
    aspect-square
    w-screen
    select-none
    mask-y-from-72% mask-y-to-100%

    motion-safe:opacity-0
    motion-safe:animate-disolve-in

    md:mask-y-from-100%
    md:mask-t-from-50%
    md:mask-t-to-120%
    md:w-screen
    md:h-full
    md:fixed
    md:top-1/2
    md:-translate-y-1/2
    md:mb-0
  `,
  image: `
    opacity-85 dark:opacity-100
    brightness-60
    grayscale

    mask-linear-200 mask-linear-from-68% mask-linear-to-102%

    md:dark:opacity-60
  `,
  introduction: `
    relative z-10
    w-full max-w-2xl
    mx-auto
    text-base text-center
    font-normal
    leading-[1.75]

    md:text-sm
    md:text-center
    md:leading-[1.5]
    lg:max-w-4xl

    motion-safe:opacity-0
    motion-safe:animate-disolve-in
  `,
});
