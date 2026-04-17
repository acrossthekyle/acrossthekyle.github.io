import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center
    font-mono font-normal
    text-xtiny
    uppercase
    tracking-wide
  `,
  callout: `
    flex gap-2 items-center
  `,
  highlight: `
    font-bold
  `,
  icon: `
    w-2 h-2
    stroke-0
    fill-green-300
  `,
});

export default styles;
