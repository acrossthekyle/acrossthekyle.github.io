import tw from '@/styles';

const styles = tw({
  title: `
    flex flex-col justify-end
    text-[min(12vw,44px)]
    font-black
    leading-[0.85]
    uppercase

    sm:text-[min(5vw,40px)]
    lg:text-[min(4vw,46px)]
  `,
  words: `
    block
    origin-left scale-x-[0.9]
  `,
  chunk: `
    block
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
    text-tiny text-current/75
    font-medium
    tracking-widest
    uppercase

    sm:text-xtiny
  `,
  overview: `
    mt-10
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
  back: `
    flex items-center gap-1
    mb-4
    leading-[0.85]
    font-medium
    text-tiny text-current/75
    uppercase

    sm:text-xtiny
  `,
  arrow: `
    w-3.25 h-3.25
    stroke-2

    sm:stroke-1
  `,
});

export default styles;
