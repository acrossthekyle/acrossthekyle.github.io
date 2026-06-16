import tw from '@/styles';

export const styles = tw({
  container: `
    flex flex-col

    lg:h-svh
    lg:flex-row
  `,
  sidebar: `
    flex flex-col
    w-full h-auto
    no-scrollbar

    lg:h-svh
    lg:border-r
    lg:border-current/10
    lg:border-dashed
    lg:w-[26vw]
    lg:overflow-y-scroll
    lg:scroll-smooth

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  title: `
    flex flex-col gap-1
    text-[min(11vw,42px)]
    font-serif font-black
    leading-[0.85]
    uppercase
    origin-left scale-x-[0.9]
    p-4

    sm:text-[min(5vw,46px)]
    lg:text-[min(3vw,40px)]
  `,
  description: `
    w-full
    text-[min(1.5vw,22px)]
    leading-[1.125]
    italic
    font-serif font-normal
    normal-case
  `,
  aside: `
    grid grid-cols-2
    border-t border-current/10 border-dashed

    lg:flex
    lg:flex-col
  `,
  divider: `
    hidden
    h-8
    text-current/10
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]

    lg:block
  `,
  section: `
    relative
    flex flex-col justify-start
    h-auto
    border-y border-current/10 border-dashed
  `,
  padded: `
    p-4
  `,
  heading: `
    flex flex-col gap-3
    mb-8
    text-[min(6vw,28px)]
    font-serif
    not-italic
    leading-[0.85]
    tracking-normal

    sm:text-[min(3.5vw,28px)]
    lg:text-[min(2vw,28px)]
  `,
  paragraph: `
    w-full max-w-84
    mb-4
    text-[13px]
    font-light
    tracking-wide

    last:mb-0

    sm:text-[min(1.75vw,13px)]
    lg:text-[min(1.125vw,13px)]
  `,
  emphasis: `
    font-serif font-bold
    italic
  `,
  location: `
    absolute top-4 left-4 z-2
    flex flex-col gap-1
    text-tiny
    leading-[1]
    font-serif
    tracking-widest
    italic
  `,
  coordinates: `
    absolute bottom-3 right-5 z-2
    text-tiny text-current/75
    leading-[1]
    font-mono
    origin-bottom-right rotate-90
  `,
  content: `
    h-auto w-full
    flex flex-row gap-8
    p-8
    no-scrollbar
    overflow-x-auto
    overflow-y-hidden
    snap-x snap-mandatory
    scroll-smooth

    lg:w-[74vw]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed

    lg:motion-safe:animate-fade-in-down-slightly-delayed
  `,
  item: `
    snap-center snap-always
    flex-shrink-0
    flex flex-col items-center justify-center
    w-[64vw]
    aspect-video
  `,
  image: (isInView: boolean) => tw(`
    !h-auto
    aspect-video

    grayscale-20
    sepia-10
    rounded-lg

    ${isInView ? 'motion-safe:brightness-90' : 'motion-safe:brightness-40'}
    ${isInView ? 'motion-safe:scale-100' : 'motion-safe:scale-96'}
    motion-safe:duration-700
    motion-safe:ease-in-out
  `),
});
