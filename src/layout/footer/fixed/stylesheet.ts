import tw from '@/styles';

const styles = tw({
  container: `
    fixed bottom-0 left-0 right-0 z-100
    grid grid-cols-3
    h-10.5
    px-3.5
    bg-(--layout-background)
    uppercase
    text-xtiny
    font-mono font-bold
    tracking-wide
  `,
  copyright: `
    flex items-center justify-center
    text-center
    leading-[1.25]
  `,
  button: `
    font-mono font-bold
    text-xtiny text-right
    uppercase
  `,
});

export default styles;
