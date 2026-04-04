import tw from '@/styles';

const styles = tw({
  caption: `
    relative
  `,
  items: `
    grid grid-cols-2 gap-y-2
    mt-0

    md:flex
    md:justify-end
    md:gap-8
    md:mt-4
  `,
  item: `
    font-mono
    text-xtiny text-(--foreground)
    uppercase
    break-inside-avoid-column

    md:text-right
  `,
  eyebrow: `
    block
    text-(--foreground)/70
  `,
  emphasis: `
    font-serif italic lowercase
  `,
});

export default styles;
