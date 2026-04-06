import tw from '@/styles';

const styles = tw({
  description: `
    mt-10
    leading-[1]
    text-tiny text-(--foreground)/50
    font-mono
    uppercase
  `,
  highlight: `
    text-(--foreground)/100
  `,
  section: `
    relative
    flex flex-col gap-4
    mt-10
    animate-fade-in

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

    md:w-32
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
  paragraph: `
    w-full
    leading-[1.75]
    font-mono
    text-tiny text-(--foreground)

    sm:w-60
  `,
});

export default styles;
