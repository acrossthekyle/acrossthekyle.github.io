import tw from '@/styles';

const styles = tw({
  description: `
    w-full
    mt-10
    leading-[1]
    text-tiny text-current/50
    font-mono
    uppercase

    md:w-134
  `,
  highlight: `
    text-(--foreground)
  `,
  map: `
    relative
    w-full
    mt-10 mb-10

    md:w-1/2
    lg:absolute
    lg:top-4
    lg:right-4
    lg:z-0
    lg:w-56
    lg:mt-0
    xl:w-100
  `,
  album: `
    my-10
    w-20
    font-mono font-bold
    text-tiny
    uppercase
  `,
  lid: `
    block
    font-mono
    text-xtiny text-current/70
  `,
  section: `
    relative
    flex flex-col gap-4

    lg:flex-row
    lg:gap-12
  `,
  heading: `
    flex-none
    w-24
    mb-2
    font-mono font-bold
    text-tiny
    uppercase
    whitespace-nowrap

    md:w-22
    lg:mb-0
    xl:w-48
  `,
  eyebrow: `
    block
    font-normal
    text-current/50

    lg:inline-block
    lg:mr-3
  `,
  items: `
    grid grid-cols-1

    xs:grid-cols-2
    sm:gap-x-10
    sm:grid-cols-3
    md:grid-cols-4
    md:grid-rows-3
    lg:gap-x-20
  `,
  item: `
    mb-4
    font-mono
    text-tiny text-current/70
    uppercase
    break-inside-avoid-column
  `,
  value: `
    block
    mt-0.5

    text-(--foreground)
  `,
});

export default styles;
