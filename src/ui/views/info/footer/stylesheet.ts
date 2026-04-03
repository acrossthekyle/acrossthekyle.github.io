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
    text-2xl text-(--foreground)
    uppercase

    md:w-32
    lg:mb-0
    lg:w-48
  `,
  eyebrow: `
    block
    font-normal
    text-xtiny text-(--foreground)/50
  `,
  text: `
    block
    w-30
    font-mono font-normal
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
  link: (isActive: boolean) => tw(`
    flex flex-col justify-between
    text-2xl ${isActive ? 'text-(--foreground)' : 'text-(--foreground)/40'}
    font-black
    uppercase
    duration-300

    md:hover:!text-(--foreground)/100
  `),
  index: (isActive: boolean) => tw(`
    block
    font-normal
    text-xtiny ${isActive ? 'text-(--foreground)/50' : 'text-(--foreground)/40'}
  `),
  list: (isActive: boolean) => tw(`
    block
    w-36
    mb-4
    font-mono font-normal
    text-xtiny ${isActive ? 'text-(--foreground)/70' : 'text-(--foreground)/40'}
    duration-300

    md:group-hover:!text-(--foreground)/70
    md:mb-12
  `),
  footer: (isActive: boolean) => tw(`
    font-mono
    text-xtiny ${isActive ? 'text-(--foreground)/70' : 'text-(--foreground)/40'}
    uppercase
    duration-300

    md:group-hover:!text-(--foreground)/70
  `),
});

export default styles;
