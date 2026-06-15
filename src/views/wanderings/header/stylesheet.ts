import tw from '@/styles';

export const styles = tw({
  title: `
    flex items-end justify-between
  `,
  heavy: `
    text-[min(10vw,42px)]
    font-black
    leading-[0.85]
    uppercase
    tracking-tight

    sm:text-[min(5vw,46px)]
    lg:text-[min(8vw,96px)]
  `,
  light: `
    uppercase
    text-tiny
    font-light font-serif
    italic
    tracking-widest
  `,
  updated: `
    absolute top-4 right-4
    uppercase
    font-medium font-mono
    text-xtiny
    text-current/75
  `,
  footer: `
    flex items-start justify-between gap-12
    mt-2
    text-tiny
  `,
  list: `
    flex items-center gap-8
  `,
  filter: `
    uppercase
    tracking-[0.1rem]
    font-medium
  `,
});


