import tw from '@/styles';

const styles = tw({
  container: `
    flex gap-12
    w-full
    text-left
    uppercase
  `,
  index: `
    font-mono font-normal
    text-xtiny
  `,
  content: `
    relative
    flex flex-col gap-1
    leading-[1]
    font-mono font-bold
    text-xs
    uppercase
  `,
  items: `
    font-mono font-normal
    text-xtiny
    leading-[1.25]
  `,
  current: `
    absolute top-0.5 -left-6
    leading-[1]
    font-mono font-bold
    text-xtiny
  `,
});

export default styles;
