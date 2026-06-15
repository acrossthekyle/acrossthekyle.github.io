import tw from '@/styles';

export const styles = tw({
  title: `
    relative z-100
    flex flex-col justify-end
    h-72
    mb-68
    text-[min(12vw,44px)]
    font-black
    leading-[0.85]
    uppercase

    sm:h-auto
    sm:mb-0
    sm:text-[min(5vw,40px)]
    lg:text-[min(4vw,46px)]
  `,
  words: `
    block
    origin-left scale-x-[0.9]
  `,
  lid: `
    block
    w-full max-w-48
    mt-3
    text-tiny text-current/90
    leading-[1.375]
    font-normal
    tracking-widest
  `,
  eyebrow: `
    block
    relative top-1
    text-tiny
    font-medium
    tracking-widest
    uppercase

    sm:text-xtiny
  `,
  overview: `
    relative z-100

    sm:mt-10
  `,
  paragraph: `
    w-full max-w-96
    mb-4
    text-sm

    last:mb-0

    sm:max-w-64
    sm:text-xs

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up
  `,
});


