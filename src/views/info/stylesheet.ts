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
  intro: `
    relative
    flex flex-col gap-4
    mt-10

    lg:flex-row
    lg:mt-24
  `,
  paragraph: `
    w-full
    leading-[1.25]
    font-mono
    text-tiny
    uppercase

    sm:w-60
    lg:mr-4

    last:mr-0
  `,
  section: `
    relative
    flex flex-col gap-4

    lg:flex-row
  `,
  heading: `
    flex-none
    w-24
    mb-2
    font-mono font-bold
    text-tiny
    uppercase
    whitespace-nowrap

    md:w-32
    lg:mb-0
    lg:w-64
  `,
  index: `
    block
    font-normal
    text-current/50

    lg:inline-block
    lg:mr-3
  `,
  items: `
    flex flex-col gap-8
  `,
  item: `
    font-mono
    text-xs
    uppercase
  `,
  eyebrow: `
    block
    mb-0.5
    font-normal
    text-tiny text-current/50
    normal-case
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-tiny text-current/70
  `,
  skill: `
    block
    font-normal
    text-xtiny text-current/80

    first:mt-2
  `,
  grid: `
    grid grid-cols-1 gap-x-16 gap-y-4

    sm:grid-cols-2
  `,
});

export default styles;
