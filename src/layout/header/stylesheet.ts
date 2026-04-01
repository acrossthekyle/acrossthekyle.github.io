import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col justify-between
    rounded-md
    bg-(--background)
    mb-[1px]

    md:flex-row
    md:rounded-lg
  `,
  anchor: `
    py-2 px-2
    leading-[1]
    font-sans font-black
    text-3xl text-(--foreground)
    uppercase

    md:py-4
    md:px-4.75
  `,
  definition: `
    block
    mt-0.75
    leading-[1]
    font-mono
    text-xtiny text-(--foreground)/70
    normal-case
  `,
  items: `
    grid grid-cols-2 grid-rows-2
    text-(--foreground)

    md:flex
    md:justify-end
    md:text-right
    md:has-[li:hover]:[&_a]:text-(--foreground)/40
    md:has-[li:hover]:[&_span]:text-(--foreground)/40
  `,
  item: `
    group
  `,
  link: `
    block
    px-2 py-2
    font-sans font-black
    text-sm text-(--foreground)
    uppercase
    duration-300

    group-last:pr-4.75

    md:px-5
    md:py-4
    md:hover:!text-(--foreground)/100
  `,
  index: `
    block
    font-mono
    text-xtiny text-(--foreground)/70
    duration-300

    md:group-hover:!text-(--foreground)/70
  `,
  text: `
    block
    uppercase
    font-mono
    text-xtiny text-(--foreground)/40
  `,
});

export default styles;
