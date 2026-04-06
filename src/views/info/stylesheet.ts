import tw from '@/styles';

const styles = tw({
  description: `
    w-full
    mt-10
    leading-[1]
    text-tiny text-(--foreground)/50
    font-mono
    uppercase

    md:w-134
  `,
  highlight: `
    text-(--foreground)/100
  `,
  intro: `
    relative
    flex flex-col gap-4
    mt-10

    lg:flex-row
    lg:mt-54
  `,
  paragraph: `
    w-full
    leading-[1.75]
    font-mono
    text-tiny text-(--foreground)

    sm:w-60
    lg:mr-4

    last:mr-0
  `,
  section: `
    relative
    flex flex-col gap-4

    sm:flex-row
    sm:gap-12
  `,
  heading: `
    flex-none
    w-24
    mb-2
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
    whitespace-nowrap

    md:w-48
    lg:mb-0
    lg:w-48
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50

    lg:inline-block
    lg:mr-3
  `,
  items: `
    flex flex-col gap-8
  `,
  item: `
    font-mono
    text-xs text-(--foreground)
    uppercase
  `,
  eyebrow: `
    block
    mb-0.5
    font-normal
    text-tiny text-(--foreground)/50
    normal-case
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-tiny text-(--foreground)/70
  `,
  skill: `
    block
    font-normal
    text-xtiny text-(--foreground)/80

    first:mt-2
  `,
  grid: `
    grid grid-cols-1 gap-x-16 gap-y-4

    sm:grid-cols-2
  `,
});

export default styles;
