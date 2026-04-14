import tw from '@/styles';

const styles = tw({
  header: `
    grid grid-cols-2 gap-0
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  items: `
    relative z-1
    columns-sm gap-4
    mt-10
  `,
  item: `
    flex gap-12
    mb-12
    font-mono
    text-xs
    uppercase
    break-inside-avoid-column
  `,
  index: `
    block
    mt-0.5
    font-normal
    text-xtiny
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-xtiny
  `,
  link: `
    border-b-1 border-b-transparent border-dashed

    hover:border-b-(--foreground)
  `,
});

export default styles;
