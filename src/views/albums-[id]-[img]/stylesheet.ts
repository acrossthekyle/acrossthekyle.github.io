import tw from '@/styles';

const styles = tw({
  figure: `
    relative
    mt-6
    overflow-hidden
    rounded-md

    md:absolute
    md:top-4
    md:right-4
    md:bottom-4
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
    grid grid-cols-2 gap-y-2
    w-54
    animate-fade-in
  `,
  item: `
    font-mono font-bold
    text-xtiny
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    font-normal
    text-current/70
  `,
  emphasis: `
    font-serif italic lowercase
  `,
  navigation: `
    flex justify-between gap-4
    mt-6
    font-mono font-bold
    text-tiny
    uppercase

    md:absolute
    md:bottom-4
    md:left-4
    md:justify-start
  `,
  album: `
    mr-6
  `,
});

export default styles;
