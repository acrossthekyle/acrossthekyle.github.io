import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col justify-between
    rounded-md
    bg-(--background)
    mt-[1px]

    md:rounded-lg
    lg:flex-row
  `,
  navigation: `
    flex flex-col
    mb-4

    md:mb-0
    lg:flex-row
  `,
  items: `
    grid grid-cols-2 gap-3
    p-2
    text-(--foreground)

    xs:grid-cols-3
    md:p-0
    md:flex
    md:gap-0
    md:has-[li:hover]:[&_a]:text-(--foreground)/40
    md:has-[li:hover]:[&_button]:text-(--foreground)/40
    md:has-[li:hover]:[&_span]:text-(--foreground)/40
  `,
  item: `
    group
  `,
  link: `
    block
    font-mono font-black
    text-xtiny text-(--foreground) text-left
    uppercase
    duration-300

    md:group-first:pl-4
    md:px-3
    md:pt-4
    md:pb-3.75
    md:hover:!text-(--foreground)/100
  `,
  text: `
    block
    normal-case
    text-xtiny text-(--foreground)/70
    whitespace-nowrap

    md:group-hover:!text-(--foreground)/70
  `,
  copyright: `
    p-2 pb-1.5
    leading-[1]
    uppercase
    font-bold font-mono
    text-xtiny text-(--foreground)/50

    md:p-4
    md:pb-3.75
    lg:text-right
  `,
  highlight: `
    text-(--foreground)/100
  `,
});

export default styles;
