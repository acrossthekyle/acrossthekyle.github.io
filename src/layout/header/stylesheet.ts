import tw, { padding } from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    h-auto min-h-full
    pt-6
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
    pt-36

    nano:pt-16
    base:pt-24
  `,
  anchor: `
    absolute top-6
    w-5

    base:top-8
    hecto:top-12
    kilo:top-16
  `,
  navigation: `
    absolute top-4 left-6

    base:top-6
    base:left-8
    hecto:top-10
    hecto:left-12
    kilo:top-14
    kilo:left-16
  `,
  list: `
    flex flex-col gap-1
    h-8

    nano:gap-4
    nano:items-center
    nano:flex-row
  `,
  link: `
    flex items-center
    text-sm
    font-medium
    uppercase

    base:text-xs
  `,
});

export default styles;
