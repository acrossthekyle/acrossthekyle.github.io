import tw from '@/styles';

const styles = tw({
  aside: `
    relative
    mt-10
    text-left

    sm:absolute
    sm:top-3
    sm:right-4
    sm:mt-0
    sm:text-right
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    leading-[1]
    font-mono
    text-xtiny text-(--foreground)/70
    uppercase
  `,
  albums: `
    grid grid-cols-1 gap-4
    mt-10

    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  `,
  album: `
    mb-8
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mb-2
    font-mono
    text-xtiny text-(--foreground)/70
    uppercase
  `,
  figure: `
    group
    relative
    flex flex-col gap-2
  `,
  image: `
    aspect-3/2
    rounded-md
    duration-300
    grayscale-50
    outline-1 outline-transparent

    md:group-hover:outline-(--foreground)
    md:group-hover:grayscale-0
  `,
  caption: `
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
  `,
});

export default styles;
