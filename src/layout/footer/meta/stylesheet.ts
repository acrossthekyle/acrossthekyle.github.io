import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-4 gap-8
    tracking-tight
  `,
  cell: `
    flex flex-col gap-0.5
    leading-[1]
    text-xtiny
    font-mono font-normal
    uppercase
  `,
  right: `
    text-right
  `,
});

export default styles;
