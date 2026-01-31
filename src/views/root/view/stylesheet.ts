import tw from '@/styles';

const styles = tw({
  timeline: `
    my-8
  `,
  item: `
    flex gap-x-2

    md:gap-x-3
  `,
  year: `
    inline-block
    w-7
    pt-1.5
    text-start text-xs text-current/60
    font-mono
  `,
  line: `
    relative

    after:absolute
    after:top-7
    after:bottom-0
    after:start-3.5
    after:w-px
    after:-translate-x-[0.5px]
    after:bg-(--foreground)/17.5

    last:after:hidden
  `,
  dot: `
    size-2
    m-2.5
    rounded-full
    bg-(--foreground)/25
  `,
  description: `
    grow
    pt-0.5 pb-8
    !mb-0
  `,
  title: `
    -mt-0.75
    text-base
    !font-medium
    leading-6

    md:leading-7
  `,
  text: `
    block
    mt-1
    text-xs text-current/60
    font-mono

    md:mt-0.5
  `,
  list: `
    flex flex-col gap-8
    mt-6

    md:gap-6
  `,
  index: `
    absolute right-0 top-1
    px-1
    text-tiny text-(--background)
    font-bold font-mono
    bg-(--foreground)/45
    rounded-sm
  `,
});

export default styles;
