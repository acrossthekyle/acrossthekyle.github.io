import tw from '@/styles';

export const styles = tw({
  title: (index: number) => tw(`
    fixed bottom-6 left-6 z-50
    flex flex-col gap-2
    leading-[0.8]
    ${index % 2 === 0 ? 'font-serif font-normal' : 'font-bold'}
    text-[min(6vw,1.5rem)]
    tracking-tighter
    uppercase
    whitespace-nowrap

    motion-safe:opacity-0
    motion-safe:animate-disolve-scale-in

    md:text-[min(2.5vw,2rem)]
    lg:text-[min(2.125vw,2rem)]
    2xl:text-[min(4vw,2.25rem)]
  `),
  when: `
    relative
    block
    text-tiny
    font-sans font-light
    italic
    tracking-widest
  `,
  overview: `
    absolute top-6 left-0 right-12 z-100
    flex flex-col items-start gap-2
    pl-18
    text-left

    motion-safe:opacity-0
    motion-safe:animate-disolve-in
  `,
  header: `
    w-full max-w-xs
    mb-2 pr-2
    uppercase
    font-serif
    text-base
    leading-[1.2]

    md:text-lg
    lg:w-full
    lg:max-w-sm
    lg:text-2xl
  `,
  note: `
    w-full max-w-sm
    text-xs
    leading-[1.75]

    sm:pr-6
    sm:max-w-xs
  `,
  info: `
    absolute -top-13 -left-8 z-50
    w-100 h-20
    flex flex-col gap-2
    text-left text-xs
    uppercase
    leading-[0.8]
    tracking-wide
    rotate-90 origin-bottom-left
    whitespace-nowrap

    motion-safe:opacity-0
    motion-safe:animate-disolve-in
  `,
  location: `
    font-black
  `,
  category: `
    font-mono
    tracking-widest
    text-xtiny
  `,
  cover: (isInView: boolean) => tw(`
    absolute top-1/2 left-1/2 z-1
    -translate-y-1/2 -translate-x-1/2
    duration-500
    w-full h-full
    mask-y-from-72% mask-y-to-100%

    md:mask-y-from-100%
    md:mask-t-from-50%
    md:mask-t-to-120%

    ${isInView && `
      motion-safe:opacity-0
      motion-safe:animate-disolve-scale-in
    `}
  `),
  hero: `
    brightness-50
    grayscale
    mask-linear-200 mask-linear-from-68% mask-linear-to-102%

    light:opacity-70
  `,
  back: `
    fixed top-4 right-4 z-200
    uppercase
    font-black
    text-sm
    p-2

    motion-safe:opacity-0
    motion-safe:animate-disolve-scale-in
  `,
  x: `
    stroke-1 w-6 h-6
  `,
});
