import tw from '@/styles';

export const styles = tw({
  divider: `
    h-8
    text-current/10
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]

    lg:hidden
  `,
  wrapper: `
    lg:pr-[26vw]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  upper: `
    flex items-end justify-between
    h-24 w-full
    p-4
    border-t border-current/20 border-dashed
  `,
  header: `
    flex flex-col gap-3
    text-[min(6vw,28px)]
    font-bold
    leading-[0.85]

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
  filters: `
    flex flex-col items-end justify-between gap-2.75
    h-full
  `,
  filter: `
    flex items-center gap-2
    leading-[0.85]
    font-serif font-bold
    italic
    text-xtiny
    uppercase
    tracking-widest
  `,
  brackets: `
    font-mono
  `,
  container: `
    flex flex-col items-center gap-8
    py-6
    border-t border-current/20 border-dashed
  `,
  item: `
    relative
    flex flex-col items-start justify-center
    w-[calc(100%-1rem)]
    opacity-0
    bg-transparent

    before:absolute
    before:left-1/2
    before:-translate-x-1/2
    before:top-0
    before:bottom-0
    before:w-px
    before:border-l
    before:border-dashed
    before:opacity-20

    after:absolute
    after:-bottom-4
    after:left-8
    after:right-8
    after:h-px
    after:border-b
    after:border-dashed
    after:opacity-20

    last:after:hidden

    sm:w-[calc(100%-4px)]

    motion-safe:ease-in-out
    motion-safe:duration-700
    motion-safe:data-inview:opacity-100
  `,
  cross: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    h-14 w-6
    bg-(--background)

    after:absolute
    after:top-1/2
    after:left-1/2
    after:z-2
    after:-translate-x-1/2
    after:-translate-y-1/2
    after:h-px
    after:w-6
    after:bg-(--foreground)
    after:opacity-20

    before:absolute
    before:top-1/2
    before:left-1/2
    before:z-2
    before:-translate-x-1/2
    before:-translate-y-1/2
    before:h-6
    before:w-px
    before:bg-(--foreground)
    before:opacity-20
  `,
  view: `
    group/view
    absolute left-1/2 -bottom-6.75
    flex items-center gap-4
    p-2 px-3
    ml-16
    leading-[0.85]
    font-mono font-bold
    text-tiny text-current/80
    uppercase
    tracking-[0.125rem]
    italic
    border border-current/20
    bg-(--foreground)/5
    rounded-xs

    motion-safe:duration-700
    motion-safe:hover:bg-(--foreground)
    motion-safe:hover:text-(--background)

    data-reverse:flex-row-reverse
    data-reverse:left-auto
    data-reverse:-right-1/2
    data-reverse:ml-0
    data-reverse:mr-16
  `,
  bar: `
    relative
    h-px w-6
    bg-(--foreground)/50

    motion-safe:duration-700
    motion-safe:group-hover/view:bg-(--background)/50
    motion-safe:group-hover/view:w-8
  `,
  inner: `
    relative
    grid grid-cols-2
    py-10
    w-full
    overflow-hidden
    text-left
  `,
  northwest: `
    col-span-1 order-1
    relative -left-1/2
    flex flex-col justify-end
    text-left
    origin-right
    pb-4

    data-reverse:order-0
    data-reverse:text-right
    data-reverse:origin-left
  `,
  heading: `
    flex flex-col
    w-full
    text-[min(9vw,58px)]
    font-sans font-black
    leading-[0.8]
    uppercase
    whitespace-nowrap

    sm:text-[min(4.6vw,46px)]
    lg:text-[min(4.25vw,46px)]
    2xl:text-[min(10vw,80px)]
  `,
  line: `
    scale-x-[0.5]
    w-2/1
    px-16
  `,
  northeast: `
    col-span-1 order-0
    flex flex-col justify-between items-end
    pt-1 pb-4.5 px-8

    data-reverse:order-1
    data-reverse:items-start
  `,
  index: `
    w-14
    leading-[0.85]
    font-normal font-mono
    tracking-widest
    uppercase
    text-tiny text-current/75
    italic
  `,
  when: `
    relative top-0.25
    flex items-center gap-4
    leading-[0.85]
    text-xs
    font-serif font-normal
    tracking-tighter
    italic
  `,
  timeline: `
    block
    h-px w-[6svw]
    bg-(--foreground)/50
  `,
  southeast: `
    col-span-1 order-2
    flex flex-col items-end gap-1
    h-13
    px-8
    leading-[1]
    text-tiny text-right
    uppercase
    tracking-widest

    data-reverse:order-3
    data-reverse:text-left
    data-reverse:items-start
  `,
  region: `
    inline-block
    w-32
    font-serif font-bold
    italic
  `,
  southwest: `
    col-span-1 order-3
    h-13
    relative top-0 right-full
    flex flex-col gap-0.5
    pt-8
    font-mono
    leading-[0.85]
    tracking-widest
    uppercase
    text-xtiny text-right
    origin-top-right -rotate-90

    data-reverse:order-2
    data-reverse:right-12
    data-reverse:-rotate-90
    data-reverse:origin-top-right
    data-reverse:pt-0
  `,
});


