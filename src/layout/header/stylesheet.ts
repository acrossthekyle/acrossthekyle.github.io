import tw from '@/styles';

const styles = tw({
  callouts: `
    sticky top-0 z-2
    flex flex-col justify-between
    my-px
    py-2 px-1
    bg-(--foreground)
    font-mono
    text-xtiny text-(--background)
    uppercase

    sm:flex-row
  `,
  callout: `
    flex gap-1 items-center
  `,
  highlight: `
    font-bold
  `,
  icon: `
    w-2 h-2
    stroke-1 stroke-(--background)
  `,
  filled: `
    fill-green-300
    !stroke-0
  `,
  container: `
    flex flex-col justify-between
    rounded-md
    bg-(--background)
    text-(--foreground)
    mb-[1px]

    md:flex-row
    md:rounded-lg
  `,
  anchor: `
    py-2 px-2
    leading-[1]
    font-sans font-black
    text-3xl
    uppercase

    md:py-4
    md:px-4.75
  `,
  definition: `
    block
    mt-0.75
    leading-[1]
    font-mono font-normal
    text-xtiny text-current/70
    normal-case
  `,
  items: `
    grid grid-cols-2 grid-rows-2
    text-(--foreground)

    md:flex
    md:justify-end
    md:text-right
    md:has-[li:hover]:[&_a]:text-current/40
    md:has-[li:hover]:[&_span]:text-current/40
  `,
  item: `
    group
  `,
  link: (isActive: boolean) => tw(`
    block
    px-2 py-2
    font-sans font-black
    text-sm ${isActive ? 'text-current' : 'text-current/40'}
    uppercase
    duration-300

    group-last:pr-4.75

    md:px-5
    md:py-4
    md:hover:!text-current/100
  `),
  eyebrow: (isActive: boolean) => tw(`
    block
    font-mono
    text-xtiny ${isActive ? 'text-current/70' : 'text-current/40'}
    duration-300

    md:group-hover:!text-current/70
  `),
  lid: (isActive: boolean) => tw(`
    block
    uppercase
    font-mono
    text-xtiny ${isActive ? 'text-current/50' : 'text-current/40'}
    duration-300

    md:group-hover:!text-current/50
  `),
});

export default styles;
