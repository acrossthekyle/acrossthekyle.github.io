import tw from '@/styles';

const styles = tw({
  caption: `
    relative
    mt-6
  `,
  items: `
    grid grid-cols-2 gap-y-2
    w-54
  `,
  item: `
    font-mono font-bold
    text-xtiny text-(--foreground)
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    font-normal
    text-(--foreground)/70
  `,
  emphasis: `
    font-serif italic lowercase
  `,
});

export default styles;
