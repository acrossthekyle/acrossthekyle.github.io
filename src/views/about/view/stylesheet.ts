import tw from '@/styles';

const styles = tw({
  figure: `
    mt-16
  `,
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
    !font-medium
  `,
  text: `
    block
    mt-1
    text-sm text-current/60

    md:mt-0.5
  `,
});

export default styles;
