import tw from '@/styles';

export const styles = tw({
  section: `
    relative
    flex flex-col justify-start
    h-auto
    border-t-1 border-current/10 border-dashed
    p-4 pb-20

    lg:first:border-t-0
  `,
  heading: `
    flex flex-row justify-between
    mb-8
    text-2xl
    font-thin font-serif
    leading-[0.85]
    tracking-normal

    sm:text-4xl
  `,
  index: `
    flex gap-2
    text-tiny text-current/75
    font-mono font-light
    tracking-widest
    italic
  `,
  paragraph: `
    w-full max-w-72
    mb-4
    text-sm
    font-light
    tracking-wide
  `,
  squares: `
    hidden
    absolute bottom-4 left-4
    flex gap-0.5
  `,
  square: `
    h-1.5 w-1.5
    border border-current/50
    bg-transparent
  `,
  link: `
    absolute bottom-2 left-2
    flex gap-2
    p-2
    leading-[0.85]
    font-mono font-normal
    text-tiny text-current/80
    uppercase
    tracking-[0.125rem]
    italic

    motion-safe:duration-500
    motion-safe:hover:text-current/100
    motion-safe:hover:gap-4
  `,
  social: `
    flex items-center gap-2

    motion-safe:duration-500
    motion-safe:hover:gap-4
  `,
  emphasis: `
    font-serif
    italic
  `,
});


