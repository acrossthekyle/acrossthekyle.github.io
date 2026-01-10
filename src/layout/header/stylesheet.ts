import tw, { padding } from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    h-auto min-h-full
    pt-20
    border-b-1
    opacity-0
    animate-in-fade

    dark:border-b-white/15 light:border-b-black/15
    dark:border-r-white/15 light:border-r-black/15

    base:h-full
    base:overflow-y-scroll
    base:border-r-1
    base:border-b-0
    base:fixed
    base:left-0
    base:top-0
    base:bottom-0
    base:z-2
    base:w-86
    hecto:w-106
    kilo:w-150
    tera:w-160
    peta:w-210

    ${padding.full}
  `,
  scrollable: `
    flex-1

    base:pt-24
  `,
  anchor: `
    absolute top-6
    w-5

    base:top-8
    hecto:top-12
    kilo:top-16
  `,
  icon: `
    w-4 h-4
    stroke-2
  `,
  socials: `
    absolute top-5 right-6

    base:top-7
    base:right-8
    hecto:top-11
    hecto:right-12
    kilo:top-15
    kilo:right-16
  `,
  list: `
    flex items-center gap-6
  `,
});

export default styles;
