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
    h-auto min-h-[calc(41svh)]
  `,
  title: (isInView: boolean) => tw(`
    w-full
    mx-auto
    font-black
    uppercase
    leading-[1]
    text-[min(8vw,4rem)]

    md:text-center
    md:leading-[0.8]
    md:text-[min(6vw,4rem)]
    lg:text-[min(7.5vw,4rem)]
    2xl:text-[min(5vw,4.5rem)]

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
    font-serif
    italic
  `,
  content: `
    flex flex-col gap-2
  `,
  paragraph: `
    w-full max-w-xl
    text-sm
    font-normal
    leading-[1.5]

    md:mx-auto
    md:text-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  socials: `
    flex justify-start gap-[4svw]
    w-full
    mt-2
    font-mono
    text-tiny

    md:justify-center

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  outbound: `
    flex flex-col gap-1
  `,
  social: `
    flex items-center justify-center
    uppercase
    py-1 px-2
    text-[min(3vw,0.6rem)] text-(--background)
    font-black
    tracking-widest
    whitespace-nowrap
    border border-transparent
    rounded-sm
    bg-(--foreground)

    motion-safe:duration-300
    motion-safe:hover:border-current
    motion-safe:hover:bg-(--background)
    motion-safe:hover:text-(--foreground)
  `,
  travels: `
    relative
    flex flex-col justify-between gap-2
    w-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  heading: `
    hidden
    relative
    mb-2
    leading-[0.8]
    uppercase
    font-black
    text-[min(7.5vw,3.5rem)]
    font-serif italic

    md:text-center
    md:mb-6

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  filters: `
    group/filters
    flex flex-row items-center justify-between gap-2
    px-1
    mb-4

    md:justify-center
    md:px-0
    md:mb-0
    md:gap-6

    motion-safe:opacity-0
    motion-safe:animate-fade-in-slightly-delayed
  `,
  filter: `
    font-mono font-light
    text-xtiny
    uppercase
    tracking-widest

    motion-safe:group-hover/filters:text-current/50
    motion-safe:hover:text-current/100

    data-[active=yes]:font-black
    data-[active=yes]:!text-current/100

    motion-safe:hover:font-black
  `,
  figure: `
    hidden
    fixed top-1/2 left-1/2 -z-1
    -translate-y-1/2 -translate-x-1/2
    aspect-square
    w-[44svw]

    md:block
  `,
  image: `
    grayscale-20
    opacity-80
    sepia-10
  `,
  items: (isInView: boolean) => tw(`
    group/items
    relative
    flex flex-col items-start gap-4
    w-full max-w-7xl
    mx-auto
    p-1

    md:text-center
    md:items-center
    md:p-6
    md:pb-2
    md:block
    md:gap-2

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
    text-[min(6.5vw,2.5rem)]
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
    relative top-auto right-auto
    text-xs
    font-sans font-light
    italic
    tracking-tight

    md:pt-1
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
