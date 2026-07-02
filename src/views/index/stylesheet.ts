import tw from '@/styles';

export const styles = tw({
  container: `
    flex flex-col justify-between gap-6
    h-full min-h-svh
    p-6
    overflow-clip

    gridable
  `,
  header: `
    relative
    flex flex-col justify-between gap-6
    h-auto min-h-[calc(34svh)]
  `,
  title: (isInView: boolean) => tw(`
    w-full
    flex flex-col items-start
    mx-auto
    font-black
    uppercase
    leading-[1]
    text-[min(8vw,4rem)]

    md:block
    md:text-center
    md:leading-[0.8]
    md:text-[min(6vw,4rem)]
    lg:text-[min(7.5vw,4rem)]
    2xl:text-[min(5vw,5rem)]

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      scale-100
    ` : `
      motion-safe:-top-20
      motion-safe:opacity-0
      scale-110
    `}
  `),
  thin: `
    font-thin
  `,
  emphasis: `
    relative -top-0.5
    font-serif
    italic

    sm:top-auto
  `,
  paragraph: `
    w-full max-w-xl
    text-base
    font-normal
    leading-[1.75]

    sm:text-sm
    sm:leading-[1.5]
    md:mx-auto
    md:text-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  small: `
    !text-tiny
    font-mono font-light
    uppercase
    tracking-widest
  `,
  footer: `
    xl:absolute
    xl:bottom-6
    xl:left-6
  `,
  socials: `
    flex items-center gap-6
    font-mono
    text-xtiny

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  social: `
    uppercase
    font-black
    tracking-widest
    whitespace-nowrap
  `,
  travels: `
    relative
    flex flex-col justify-between gap-0
    w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  heading: `
    relative
    flex items-center justify-start gap-2
    w-full
    mb-4
    pt-6
    leading-[0.8]
    uppercase
    text-2xl
    font-serif font-black

    md:pt-0
    md:text-3xl
    md:justify-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  filters: `
    group/filters
    flex flex-col items-start justify-between gap-0
    mb-8 mt-2

    md:flex-row
    md:items-center
    md:justify-center
    md:mb-0
    md:gap-6

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  filter: `
    font-mono font-normal
    text-tiny
    uppercase
    tracking-widest

    motion-safe:group-hover/filters:text-current/50
    motion-safe:hover:text-current/100

    data-[active=yes]:font-black
    data-[active=yes]:!text-current/100

    md:text-xtiny

    motion-safe:hover:font-black
  `,
  figure: `
    hidden
    fixed top-1/2 left-1/2 z-1
    -translate-y-1/2 -translate-x-1/2
    aspect-square
    w-[44svw]

    md:block
  `,
  image: `
    opacity-80
    sepia-10
  `,
  items: (isInView: boolean) => tw(`
    group/items
    relative z-2
    flex flex-col items-start gap-4
    w-full max-w-none
    mx-auto

    md:text-center
    md:items-center
    md:p-6
    md:pb-2
    md:block
    md:gap-2
    2xl:max-w-none

    motion-safe:duration-700
    ${isInView ? `
      motion-safe:top-0
      motion-safe:opacity-100
      motion-safe:scale-100
    ` : `
      motion-safe:top-20
      motion-safe:opacity-0

      motion-safe:md:scale-110
    `}
  `),
  item: `
    inline-block
  `,
  link: `
    group/link
    relative
    flex flex-col items-start gap-2
    mb-4
    leading-[1]
    font-bold
    text-[min(6.5vw,1.5rem)]
    tracking-tighter
    uppercase

    data-[filtered=yes]:text-current/100
    data-[dimmed=false]:text-current/100
    data-[dimmed=true]:text-current/15
    data-[filtered=no]:text-current/15
    data-[filtered=no]:pointer-events-none

    hover:!text-current/100

    md:items-center
    md:pb-2
    md:px-4
    md:mb-0
    md:flex-row
    md:items-start
    lg:text-[min(4vw,2rem)]
    2xl:text-[min(4vw,2.25rem)]
  `,
  serif: `
    font-serif font-normal
  `,
  count: `
    block
    text-xs
    font-sans font-light
    italic
    tracking-tight
  `,
  info: `
    relative left-1/2 top-full
    -translate-x-1/2
    flex flex-col gap-1
    w-full
    font-sans font-light
    text-xs
    tracking-normal
    leading-[1]
    whitespace-nowrap

    md:hidden
    md:absolute
    md:font-medium
    md:group-hover/link:flex
  `,
  when: `
    text-xtiny
    tracking-widest
    font-light font-mono
  `,
});
