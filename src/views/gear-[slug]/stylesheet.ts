import tw from '@/styles';

const styles = tw({
  header: `
    pr-20
  `,
  item: `
    block
    mb-2
    capitalize
  `,
  wiki: `
    absolute top-0 right-0
    text-sm

    md:text-xs
  `,
  graph: `
    flex flex-col gap-16
    w-full
    pb-16

    md:flex-row
    md:gap-0
  `,
  segment: `
    relative
    h-8
    pl-2
    text-(--foreground)/15 text-xs
    bg-[size:8px_8px]
    bg-top-left
    bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)]
    duration-300

    before:absolute
    before:left-0
    before:top-0
    before:h-18.25
    before:w-[1px]
    before:bg-(--foreground)/50

    hover:text-(--foreground)/45
  `,
  label: `
    block
    pt-2
    text-(--foreground)
  `,
  value: `
    block
    pt-1
    text-(--foreground)/50
  `,
  cta: `
    block
    w-full h-10.25
    pt-8
    text-left
  `,
  heading: `
    flex items-center justify-between
    border-b-1 border-b-(--foreground)/10
    pb-4.5
  `,
});

export default styles;
