import tw from '@/styles';

const styles = tw({
  description: `
    mt-10
    leading-[1]
    text-tiny text-current/50
    font-mono
    uppercase
  `,
  highlight: `
    text-(--foreground)
  `,
  aside: `
    relative
    mt-10
    text-left
    animate-flicker-in

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
    text-xtiny text-current/70
    uppercase
  `,
  albums: `
    grid grid-cols-1 gap-4
    mt-10
    animate-fade-in

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
    text-xtiny text-current/70
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
    grayscale-50
    outline-1 outline-transparent

    sm:aspect-3/2
    md:group-hover:outline-(--foreground)
    md:group-hover:grayscale-0
  `,
  caption: `
    font-mono font-bold
    text-tiny
    uppercase
  `,
});

export default styles;
