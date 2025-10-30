import tw from '@/styles';

const styles = tw({
  container: `
    absolute inset-0 z-9999
    w-full h-full
    flex flex-col items-center justify-start
    pt-16 px-6
    bg-black
    text-white/90
    overflow-y-scroll
    overscroll-contain
    outline-0
    opacity-0
    animate-in-fade

    base:p-0
  `,
  close: `
    absolute top-3 left-3 z-9999
    p-2

    base:right-0
    base:left-auto
    deka:top-9
    deka:right-7
  `,
  icon: `
    w-7 h-7
    stroke-1 stroke-white/90
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
  `,
  link: `
    block
    uppercase
    duration-200
    overflow-hidden
    text-5xl/9.25
    font-black font-stretch-extra-condensed
    tracking-tight

    centi:text-7xl/13.75
    centi:font-stretch-semi-condensed
    deci:text-8xl/18.5
    base:text-7xl/14
    base:font-stretch-normal
    base:tracking-tight
    hecto:text-8xl/18.5
    tera:text-9xl/24.75

    hover:font-extralight
    hover:text-white/90
    group-hover/list:text-white/25
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
});

export default styles;
