import tw from '@/styles';

const styles = tw({
  title: `
    flex flex-col justify-end
    text-[min(12vw,44px)]
    font-black
    leading-[0.85]
    uppercase
    origin-left scale-x-[0.9]

    sm:text-[min(5vw,40px)]
    lg:text-[min(3.5vw,42px)]
  `,
  chunk: `
    block
  `,
  subtitle: `
    block
    w-full max-w-48
    mt-3
    text-tiny text-current/90
    leading-[1.375]
    font-normal
    tracking-widest
    scale-x-[1]
  `,
  eyebrow: `
    block
    relative top-1
    text-xtiny text-current/75
    font-normal
    tracking-widest
    uppercase
    scale-x-[1]
  `,
  overview: `
    flex flex-col justify-start
    mt-10

    lg:justify-end
  `,
  paragraph: `
    w-full max-w-96
    mb-4
    text-sm

    last:mb-0

    sm:max-w-64
    sm:text-xs
  `,
});

export default styles;
