import tw from '@/styles';

const styles = tw({
  aside: `
    relative
    mt-10
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    leading-[1]
    font-mono
    text-xtiny text-(--foreground)/70
    uppercase
  `,
  items: `
    grid grid-cols-1 gap-4
    mt-10

    xs:grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    xl:grid-cols-6
  `,
  item: `
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
    relative
    flex flex-col gap-2
  `,
  image: `
    aspect-3/2
    rounded-md
  `,
  caption: `
    leading-[1]
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
  `,
});

export default styles;
