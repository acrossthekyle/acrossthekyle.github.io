import tw from '@/styles';

const styles = tw({
  figure: `
    relative
    mt-6
    overflow-hidden
    rounded-xs

    md:absolute
    md:top-2
    md:right-2
    md:bottom-2
    md:left-80
    md:mt-0
  `,
  image: `
    aspect-square
    rounded-md

    md:aspect-3/2
  `,
  items: `
    mt-6
    flex flex-col
    w-54
  `,
  item: `
    font-mono
    text-xtiny
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
  `,
  emphasis: `
    font-serif italic lowercase
  `,
  navigation: `
    grid grid-cols-2 gap-16
    w-76
    mt-6
    font-mono
    text-xtiny
    uppercase

    md:absolute
    md:bottom-2
    md:left-2
  `,
  link: `
    flex items-center gap-2
  `,
  end: `
    justify-end
  `,
  kbd: `
    w-4 h-4
    stroke-1
    shadow-xl
  `,
});

export default styles;
