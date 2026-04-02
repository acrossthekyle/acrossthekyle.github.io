import tw from '@/styles';

const styles = tw({
  article: `
    relative
    flex flex-col gap-4
    mt-10

    lg:flex-row
    lg:gap-12
  `,
  heading: `
    flex-none
    w-64
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
    whitespace-nowrap
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50

    lg:inline-block
    lg:mr-3
  `,
  section: `
    w-full
    leading-[1.75]
    font-mono
    text-tiny text-(--foreground)

    sm:w-100
  `,
  title: `
    block
    font-mono font-bold
    text-xs text-(--foreground)
    uppercase
  `,
  lid: `
    block
    mb-4
    font-mono
    text-xtiny text-(--foreground)/50
    uppercase
  `,
});

export default styles;
