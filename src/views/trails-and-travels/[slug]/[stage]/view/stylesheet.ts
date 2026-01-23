import tw from '@/styles';

const styles = tw({
  subtitle: `
    flex justify-between gap-8
    w-full
    text-current/75 !text-xs
    uppercase
    font-mono
  `,
  label: `
    text-right
  `,
  figure: `
    my-6
  `,
  image: `
    aspect-square

    md:aspect-16/9
  `,
});

export default styles;
