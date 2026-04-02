import tw from '@/styles';

const styles = tw({
  items: `
    columns-sm gap-4
    mt-10
  `,
  item: `
    flex gap-4
    mb-4
    font-mono font-bold
    text-xs text-(--foreground)
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mt-0.5
    font-normal
    text-xtiny text-(--foreground)/50
    normal-case
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-xtiny text-(--foreground)/70
  `,
});

export default styles;
