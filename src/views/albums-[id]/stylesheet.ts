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
  items: `
    grid grid-cols-1 gap-4

    xs:grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
  `,
  item: `
    mt-8
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
    outline-1 outline-transparent
    duration-300

    sm:aspect-3/2
    md:group-hover:outline-(--foreground)
  `,
  caption: `
    leading-[1]
    font-mono font-bold
    text-sm
    uppercase
    truncate
  `,
  stats: `
    flex flex-col gap-0.5
    mt-2
    leading-[1]
    font-normal
    text-xtiny
    uppercase
  `,
});

export default styles;
