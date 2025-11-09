import tw from '@/styles';

const styles = tw({
  container: `
    absolute inset-0 z-9999
    w-full h-full
    flex flex-col items-center justify-start
    pt-12 px-4
    bg-white dark:bg-black
    text-current/90
    overflow-y-scroll
    overscroll-contain
    outline-0
    opacity-0
    animate-in-fade

    base:p-0
  `,
  close: `
    absolute top-1 left-1 z-9999
    p-2

    base:right-0
    base:left-auto
    deka:top-8
    deka:right-7
  `,
  icon: `
    w-8.25 h-8.25
    stroke-1 stroke-current/90
  `,
  field: `
    w-full
    p-6 pl-0
    text-4xl
    font-black
    uppercase

    base:pr-24
    base:p-12
    base:py-9
  `,
  results: `
    w-full
    p-0

    base:p-12
  `,
  heading: `
    mb-6
    text-lg
    font-black
    uppercase

    base:text-2xl
  `,
  list: `
    group/list
    flex flex-col
    pb-4

    base:pb-0
  `,
  link: `
    group/link
    relative
    block
    uppercase
    duration-200
    overflow-hidden

    text-5xl/9
    font-black font-stretch-ultra-condensed
    tracking-tight

    pico:text-6xl/11.5
    nano:text-7xl/13.75
    milli:text-8xl/18.5
    deci:text-9xl/24.5
    base:font-stretch-normal
    base:tracking-tight
    base:text-8xl/18.5
    tera:text-9xl/24.75

    hover:font-extralight
    hover:text-current/90
    group-hover/list:text-current/25
  `,
  line: `
    relative
    block
  `,
  index: `
    absolute bottom-0
    ml-1
    text-tiny/2
    font-light font-stretch-condensed
    tracking-normal

    base:ml-2
    mega:text-sm/3
  `,
  info: `
    block
    relative z-1
    mt-1 mb-2 mr-4
    text-tiny/3
    font-light font-stretch-normal
    tracking-tight
    duration-200

    group-hover/link:base:opacity-100

    base:absolute
    base:mb-0
    base:mt-0
    base:bottom-0
    base:right-0
    base:opacity-0
    base:w-52
    base:my-0
    base:text-xs/3
    base:text-right
  `,
  first: `
    inline-block
    mr-3

    base:block
    base:mr-0
  `,
  second: `
    inline-block
    mr-3

    base:block
    base:mr-0
  `,
  third: `
    inline-block

    base:block
  `,
});

export default styles;
