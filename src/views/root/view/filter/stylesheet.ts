import tw, { padding } from '@/styles';

const styles = tw({
  container: `
    relative
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    ${padding.full}
  `,
  options: `
    absolute top-7.5 right-7.5 bottom-7.5
    p-2
    text-tiny uppercase text-current/50
    font-bold
    rounded-sm
    duration-300

    hover:text-current/100

    base:top-9.5
    base:right-9.5
    base:bottom-9.5
    hecto:top-13.5
    hecto:right-13.5
    hecto:bottom-13.5
    kilo:top-17.5
    kilo:right-17.5
    kilo:bottom-17.5
  `,
  dialog: `
    fixed inset-0 z-999

    dark:text-white light:text-black

    ${padding.full}
  `,
  form: `
    flex flex-col gap-8
    mt-8
  `,
  close: `
    absolute top-5 right-5

    base:top-7
    base:right-8
    hecto:top-11
    hecto:right-12
    kilo:top-15
    kilo:right-16
  `,
  heading: `
    mb-6
  `,
  footer: `
    hidden
    absolute bottom-6 right-6
    w-full
    items-center justify-end
    text-tiny text-current/80
    font-bold
    uppercase

    base:flex
    base:bottom-8
    base:right-8
    hecto:bottom-12
    hecto:right-12
    kilo:bottom-16
    kilo:right-16
  `,
  kbd: `
    mr-2
    px-1.5 py-1
    text-tiny text-current/80
    font-semibold
    border
    rounded-lg

    dark:border-white/15 light:border-black/15
    dark:bg-white/15 light:bg-black/15
  `,
});

export default styles;
