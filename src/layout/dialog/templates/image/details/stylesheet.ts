import tw from '@/styles';

const styles = tw({
  close: (isOpen: boolean) => tw(`
    absolute top-4 right-4 z-1
    p-2

    ${isOpen ? 'motion-safe:opacity-0 motion-safe:animate-fade-in-down-slightly-delayed' : 'motion-safe:animate-fade-out-up'}
  `),
  x: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  container: `
    relative z-4
    w-full
    text-xs
    pointer-events-none

    min-[692px]:flex
    min-[692px]:flex-col
    min-[692px]:items-end
  `,
  items: `
    flex flex-col gap-4
    mb-4
    cursor-auto
    pointer-events-auto

    min-[692px]:w-66
  `,
  item: `
    flex items-start gap-4
  `,
  link: `
    relative
    flex items-start gap-4
    w-full
    rounded-md
    outline-0
    pointer-events-auto
    text-left

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    lg:p-2
    lg:-m-2
  `,
  icon: `
    mt-2
    opacity-20

    w-4
    h-4
  `,
  external: `
    inline-block
    -mt-0.5
    w-2.5 h-2.5
  `,
  label: `
    block
    mb-0.5
    opacity-25
  `,
  data: `
    block
    w-full
  `,
  paragraph: `
    mb-2

    last:mb-0
  `,
  map: `
    absolute
    top-0
    right-0
    w-50
    cursor-auto
    pointer-events-auto

    min-[540px]:relative
    min-[540px]:w-60
  `,
});

export default styles;
