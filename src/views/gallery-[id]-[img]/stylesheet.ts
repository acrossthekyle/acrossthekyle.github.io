import tw from '@/styles';

const styles = tw({
  album: `
    mt-6
    inline-block
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
  `,
  figure: `
    relative
    mt-6

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
  navigation: `
    flex justify-between gap-4
    mt-6
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase

    md:absolute
    md:bottom-4
    md:left-4
    md:justify-start
  `,
});

export default styles;
