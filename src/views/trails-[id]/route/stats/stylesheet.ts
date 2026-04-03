import tw from '@/styles';

const styles = tw({
  items: `
    absolute bottom-2.75 right-3.5
    flex gap-8
  `,
  item: `
    font-mono
    text-xtiny text-(--foreground) text-right
    uppercase
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50
  `,
});

export default styles;
