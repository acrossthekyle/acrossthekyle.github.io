import tw from '@/styles';

const styles = tw({
  aside: `
    absolute top-4 right-4
    text-xtiny text-(--foreground)/70
    uppercase
  `,
  section: `
    relative
    flex flex-col gap-4
    mt-10
    mb-20

    lg:flex-row
    lg:gap-12

    last:mb-8
  `,
  heading: `
    flex-none
    w-24
    mb-2
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
    whitespace-nowrap

    md:w-32
    lg:mb-0
    lg:w-48
  `,
  eyebrow: `
    block
    font-normal
    text-(--foreground)/50

    lg:inline-block
    lg:mr-3
  `,
  items: `
    flex flex-col gap-10
  `,
  item: `
    flex gap-12
    leading-[0.775]
  `,
  index: `
    block
    mt-1
    font-mono
    text-tiny text-(--foreground)/50
  `,
  link: `
    block
    -mt-1.25
    font-sans font-black
    text-4xl text-(--foreground)
    uppercase
    duration-300
    overflow-hidden

    hover:font-thin
  `,
  lid: `
    block
    mb-0.75
    leading-[1]
    font-mono font-normal
    text-xtiny text-(--foreground)/70

    first:mt-2
    last:mb-0
  `,
});

export default styles;
