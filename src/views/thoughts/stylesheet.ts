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
    h-123
    mb-3
    leading-[1.25]
    font-sans font-light
    text-sm

    sm:w-80
  `,
  header: `
    leading-[1]
    font-sans font-black
    text-sm
    uppercase
  `,
  subheader: `
    block
    mt-1
    text-xtiny
    font-mono font-normal
    uppercase
  `,
  section: `
    relative
    flex flex-col gap-4
    mt-12 mb-12

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
    font-sans font-black
    text-sm
    uppercase

    md:w-32
    lg:w-48
  `,
  subheading: `
    block
    mt-1.5
    leading-[1]
    normal-case
    font-light
    text-xs
  `,
  items: `
    flex flex-col gap-10
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
    font-sans font-bold
    text-sm
  `,
  subtitle: `
    block
    mt-1
    text-xtiny
    font-mono font-normal
    uppercase
  `,
  content: `
    w-full
    font-sans font-light
    text-sm

    sm:w-130
  `,
});

export default styles;
