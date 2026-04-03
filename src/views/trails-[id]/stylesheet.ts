import tw from '@/styles';

const styles = tw({
  album: `
    mt-10
    inline-block
    font-mono font-bold
    text-tiny
    uppercase
  `,
  lid: `
    block
    font-mono
    text-xtiny text-(--foreground)/70
  `,
  section: `
    relative
    flex flex-col gap-4
    mt-10

    lg:flex-row
    lg:gap-12
  `,
  heading: `
    flex-none
    w-24
    mb-2
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
    whitespace-nowrap

    md:w-22
    lg:mb-0
    xl:w-48
  `,
  eyebrow: `
    block
    font-normal
    text-(--foreground)/50

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
    text-tiny text-(--foreground)/70
    uppercase
    break-inside-avoid-column
  `,
  value: `
    block
    mt-0.5

    text-(--foreground)/100
  `,
});

export default styles;
