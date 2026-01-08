import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    h-auto
    p-6 pt-32
    border-b-1

    dark:border-b-white/15 light:border-b-black/15
    dark:border-r-white/15 light:border-r-black/15
    dark:text-white light:text-black

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
    base:p-8
    hecto:w-106
    hecto:p-12
    kilo:w-150
    kilo:p-16
    tera:w-160
    peta:w-210
  `,
  scrollable: `
    hidden

    base:block
    base:flex-1
    base:pt-10
  `,
  anchor: `
    absolute top-6
    w-5

    base:top-8
    hecto:top-12
    kilo:top-16
  `,
  icon: `
    w-5 h-5
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
