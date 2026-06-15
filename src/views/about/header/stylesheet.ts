import tw from '@/styles';

export const styles = tw({
  title: `
    flex flex-col gap-1
    mb-4
    text-[min(11vw,42px)]
    font-black
    leading-[0.85]
    uppercase
    origin-left scale-x-[0.9]
    p-4

    sm:text-[min(5vw,46px)]
    lg:text-[min(3vw,40px)]
  `,
  paragraph: `
    w-full max-w-84
    px-4 mb-4
    text-[13px]
    font-light
    tracking-wide

    sm:text-[min(1.75vw,13px)]
    lg:text-[min(1.125vw,13px)]
  `,
  emphasis: `
    font-serif
    italic
  `,
  strong: `
    font-bold
  `,
});


