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
  aside: `
    relative
    mt-10
    text-left

    motion-safe:animate-flicker-in

    sm:absolute
    sm:top-9
    sm:right-4
    sm:mt-0
    sm:text-right
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
    grid grid-cols-1 gap-4

    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  `,
  album: `
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
    duration-300
    outline-1 outline-transparent

    sm:aspect-3/2
    md:group-hover:outline-(--foreground)
  `,
  caption: `
    font-sans font-light
    text-sm
    uppercase
  `,
});

export default styles;
