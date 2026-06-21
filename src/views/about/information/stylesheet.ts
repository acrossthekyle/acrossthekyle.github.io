import tw from '@/styles';

export const styles = tw({
  wrapper: `
    border-t border-current/10 border-dashed
  `,
  divider: `
    h-8
    text-current/10
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]
  `,
  section: `
    relative
    flex flex-col justify-start
    h-auto
    border-y border-current/10 border-dashed
    p-4 pb-10
  `,
  heading: `
    flex flex-col gap-3
    mb-8
    text-[min(6vw,28px)]
    font-sans font-bold
    not-italic
    leading-[0.85]
    tracking-normal

    sm:text-[min(3.5vw,28px)]
    lg:text-[min(2vw,24px)]
  `,
  footnote: `
    leading-[0.85]
    text-[min(5vw,16px)] text-current/75
    font-serif font-normal
    italic

    sm:text-[min(2vw,16px)]
    lg:text-[min(1.25vw,16px)]
  `,
  index: `
    absolute bottom-4 right-4
    flex gap-2
    text-tiny text-current/75
    font-mono font-light
    tracking-widest
    italic
  `,
  paragraph: `
    w-full max-w-72
    mb-4
    text-[13px]
    font-light
    tracking-wide

    sm:text-[min(1.75vw,13px)]
    lg:text-[min(1.125vw,13px)]
  `,
  link: `
    absolute bottom-2 left-2
    flex gap-2
    p-2
    leading-[0.85]
    font-mono font-normal
    text-xtiny text-current/80
    uppercase
    tracking-[0.125rem]
    italic

    motion-safe:duration-500
    motion-safe:hover:text-current/100
    motion-safe:hover:gap-4
  `,
  external: `
    inline-flex items-center gap-0
  `,
  arrow: `
    relative top-0.25
    stroke-3
    w-3
  `,
  emphasis: `
    font-serif font-bold
    italic
  `,
  list: `
    text-[13px]
    font-light
    tracking-wide

    sm:text-[min(1.75vw,13px)]
    lg:text-[min(1.125vw,13px)]
  `,
});


