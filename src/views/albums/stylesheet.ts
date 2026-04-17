import tw from '@/styles';

const styles = tw({
  header: `
    grid grid-cols-2 gap-0
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    leading-[1]
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  albums: `
    grid grid-cols-1 gap-4 gap-y-56
    mt-10

    xs:grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
  `,
  album: `
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
    font-mono
    text-xs
    uppercase
    truncate
  `,
});

export default styles;
