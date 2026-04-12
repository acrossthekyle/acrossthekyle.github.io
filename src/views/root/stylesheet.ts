import tw from '@/styles';

const styles = tw({
  definition: `
    grid grid-cols-2
    mb-4
    w-full
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  header: `
    w-84
    leading-[0.85]
    font-mono font-normal
    text-lg
    uppercase
    tracking-tight
  `,
  introduction: `
    relative
    flex justify-start items-end gap-8
    h-[58vh]
  `,
  subheader: `
    block
    mt-4
    leading-[1]
    font-mono font-normal
    text-tiny
    uppercase
  `,
  section: `
    relative
    ml-[24vw] mb-20
    font-mono
    uppercase

    last:mb-0
  `,
  arrow: `
    w-2.25 h-2.25
  `,
  start: `
    flex items-start
  `,
  heading: `
    sticky top-10
    self-start
    flex justify-between gap-16
    mb-2
    leading-[1]
    text-sm
  `,
  index: `
    text-xtiny text-current/80
    font-normal
  `,
  subheading: `
    flex items-center gap-1
    text-xtiny
    font-normal
  `,
  categories: `
    flex flex-col gap-12
    ml-40
  `,
  category: `
    flex flex-col
  `,
  summary: `
    sticky top-15.5
    self-start
    flex justify-between gap-8
    w-full
    leading-[1]
    text-xs
  `,
  label: `
    block
    w-34
    ml-8
  `,
  subsummary: `
    font-normal
    text-xtiny
  `,
  items: `
    flex flex-col gap-6
    ml-54 mt-2
  `,
  item: `
    flex gap-8
  `,
  link: `
    w-48
    text-xs
    rounded-xs

    md:-m-2
    md:p-2
    md:duration-300
    md:hover:bg-(--foreground)/2.5
  `,
  title: `
    flex items-center gap-1
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    font-normal
    text-xtiny text-current/80
  `,
});

export default styles;
