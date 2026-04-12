import tw from '@/styles';

const styles = tw({
  container: `
    relative z-10
    flex flex-col gap-6

    lg:flex-row
  `,
  header: `
    flex-none
    w-full
    mb-2
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    whitespace-nowrap

    md:w-32
    lg:mb-0
    lg:w-48
  `,
  items: `
    flex flex-col gap-6
    w-full

    lg:flex-row
    lg:gap-0
    md:-mt-2
    md:-mb-2.5
    md:-mx-2.5
  `,
  item: `
    flex-1
    flex flex-col justify-between
    h-full
  `,
  link: `
    flex flex-col justify-between
    w-full
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    rounded-xs
    duration-300

    md:p-2
    md:hover:bg-(--foreground)/2.5
  `,
  index: `
    block
    mb-1
    font-mono font-normal
    text-xtiny
  `,
  list: `
    block
    w-36
    mt-1
    font-mono font-normal
    text-xtiny

    lg:mb-12
  `,
  footer: `
    font-mono font-normal
    text-xtiny
    uppercase
  `,
});

export default styles;
