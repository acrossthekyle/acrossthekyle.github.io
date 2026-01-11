import tw, { padding } from '@/styles';

const styles = tw({
  section: `
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0

    ${padding.full}
  `,
  header: `
    mb-6

    base:mb-8
  `,
  title: `
    mb-1
    font-extrablack
  `,
  emphasis: `
    italic
    font-serif
  `,
  meta: `
    flex flex-col gap-1

    kilo:justify-between
    kilo:flex-row
    kilo:gap-4
  `,
  right: `
    kilo:text-right
  `,
  history: `
    flex flex-col
    mb-8

    last:mb-0

    hecto:mb-12
    kilo:mb-16
  `,
  responsibilities: `
    flex flex-col gap-2
    ml-4 mt-4
    list-disc
  `,
  skills: `
    flex flex-col gap-6
  `,
  skill: `
    flex flex-col gap-4

    nano:flex-row
    nano:items-center
    nano:justify-between
  `,
  progress: `
    w-full h-1.25

    nano:w-1/2
  `,
  link: `
    underline underline-offset-4
    decoration-dotted decoration-current/50

    after:content-['_↗']
  `,
});

export default styles;
