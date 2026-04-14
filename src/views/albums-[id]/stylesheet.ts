import tw from '@/styles';

const styles = tw({
  header: `
    flex justify-between gap-4
  `,
  aside: `
    flex flex-col gap-0
    font-mono font-normal
    text-xtiny text-right
    uppercase
  `,
  items: `
    grid grid-cols-1 gap-4 gap-y-0
    mt-10

    xs:grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
  `,
  item: `
    mb-56
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mb-2
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  figure: `
    group
    relative
    flex flex-col gap-2
  `,
  image: `
    aspect-square
    rounded-md
    opacity-100
    duration-300

    sm:aspect-3/2
    md:group-hover:opacity-75
  `,
  caption: `
    leading-[1]
    font-mono
    text-xs
    uppercase
    truncate
  `,
  stats: `
    flex flex-col gap-0.5
    mt-2
    leading-[1]
    text-xtiny
    uppercase
  `,
});

export default styles;
