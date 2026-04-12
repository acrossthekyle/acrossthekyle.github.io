import tw from '@/styles';

const styles = tw({
  definition: `
    flex justify-between
    mb-4
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  intro: `
    relative
    flex flex-col justify-end gap-4
    h-126
    mb-20
  `,
  header: `
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    whitespace-nowrap
  `,
  subheader: `
    block
    mt-6
    leading-[1]
    font-mono font-bold
    text-sm
    uppercase
  `,
  section: `
    relative
    flex flex-col gap-4
    mb-20

    lg:flex-row
    lg:gap-12

    last:mb-0
  `,
  heading: `
    sticky top-12 z-10
    self-start
    flex-none
    w-24
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
    whitespace-nowrap

    md:w-32
    lg:w-48
  `,
  subheading: `
    block
    mt-1.5
    leading-[1]
    font-mono font-normal
    text-xtiny
  `,
  items: `
    flex flex-col gap-12
  `,
  item: `
    flex flex-col gap-2

    md:flex-row
    md:gap-12
  `,
  index: `
    block
    font-mono
    text-xtiny
  `,
  title: `
    mb-4
    leading-[1]
    font-mono font-bold
    text-sm
    uppercase
  `,
  content: `
    w-full
    leading-[1.25]
    font-sans font-light
    text-xs
    uppercase

    sm:w-110
  `,
});

export default styles;
