import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-6

    md:flex-row
    md:gap-12
  `,
  header: `
    flex-none
    w-full
    mb-2
    font-sans font-black
    text-3xl text-(--foreground)
    uppercase

    md:w-32
    lg:mb-0
    lg:w-48
  `,
  text: `
    block
    mt-2
    w-30
    font-mono font-normal
    normal-case
    text-xtiny text-(--foreground)/70
  `,
  items: `
    flex flex-col gap-6
    w-full

    sm:flex-row
    sm:gap-0
    md:has-[li:hover]:[&_a]:text-(--foreground)/40
    md:has-[li:hover]:[&_span]:text-(--foreground)/40
  `,
  item: `
    group
    flex-1
    flex flex-col justify-between
    h-full
  `,
  link: `
    flex flex-col justify-between
    text-2xl text-(--foreground)
    font-black
    uppercase
    duration-300

    md:hover:!text-(--foreground)/100
  `,
  index: `
    block
    font-normal
    text-xtiny text-(--foreground)/50
  `,
  list: `
    block
    w-36
    mb-4
    font-mono font-normal
    text-xtiny text-(--foreground)/70
    duration-300

    md:group-hover:!text-(--foreground)/70
    md:mb-12
  `,
  footer: `
    font-mono
    text-xtiny text-(--foreground)/70
    uppercase
    duration-300

    md:group-hover:!text-(--foreground)/70
  `,
});

export default styles;
