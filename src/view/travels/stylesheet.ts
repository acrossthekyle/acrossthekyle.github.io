import tw from '@/styles';

export const styles = tw({
  wrapper: `
    mx-auto mt-8

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  container: `
    flex flex-col items-center
  `,
  item: `
    relative
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

    last:after:hidden

    motion-safe:ease-in-out
    motion-safe:duration-700
    motion-safe:data-inview:opacity-100
  `,
  inner: `
    relative
    grid grid-cols-2 gap-4
    overflow-hidden
    pt-18 pb-8
    w-full
    text-left
  `,
  cross: `
    absolute top-1/2 left-1/2
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
  northwest: `
    col-span-1 order-1
    relative -left-1/2
    flex flex-col justify-end
    h-[6.5svh]
    pb-8
    origin-left

    data-reverse:order-0
    data-reverse:text-right
  `,
  heading: `
    flex flex-col
    w-full
    text-[min(8vw,46px)]
    font-sans font-black
    leading-[0.8]
    uppercase
    whitespace-nowrap
  `,
  line: `
    scale-x-[0.5]
    w-2/1
    px-10
  `,
  view: `
    hidden
    group/view
    absolute left-1/2 -bottom-10.75
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
  northeast: `
    col-span-1 order-0
    relative bottom-4.5
    flex flex-col justify-end items-end gap-2
    px-5 pb-4.5
    text-right

    data-reverse:order-1
    data-reverse:items-start
    data-reverse:text-left
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
    bg-(--foreground)/32
  `,
  southeast: `
    col-span-1 order-2
    flex flex-col items-end gap-1
    h-13
    px-5
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
    relative top-0 right-full
    flex flex-col gap-0.5
    h-13
    pt-5
    font-mono
    leading-[0.85]
    tracking-widest
    uppercase
    text-xtiny text-right

    origin-top-right -rotate-90

    data-reverse:order-2
    data-reverse:right-8.5
    data-reverse:-rotate-90
    data-reverse:origin-top-right
    data-reverse:pt-0
  `,
});


