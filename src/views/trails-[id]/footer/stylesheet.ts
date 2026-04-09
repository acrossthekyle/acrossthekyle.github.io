import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-6
    animate-fade-in

    lg:flex-row
    lg:gap-12
  `,
  header: `
    sticky top-12 z-10
    self-start
    flex-none
    w-full
    mb-2
    leading-[1]
    font-sans font-black
    text-sm
    uppercase

    md:w-22
    lg:mb-0
    xl:w-48
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
    text-2xl
    font-sans font-light
    uppercase
    rounded-md
    duration-300

    md:p-2
    md:hover:bg-(--foreground)/2.5
  `,
  index: `
    block
    font-mono font-normal
    text-xtiny
  `,
  list: `
    block
    w-36
    mb-4
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
