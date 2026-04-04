import tw from '@/styles';

const styles = tw({
  album: `
    mt-4 mb-10
    inline-block
    font-mono font-bold
    text-tiny text-(--foreground)
    uppercase
  `,
  figure: `
    relative
    flex flex-col gap-2
  `,
  image: `
    aspect-square
    rounded-md

    md:aspect-3/2
  `,
});

export default styles;
