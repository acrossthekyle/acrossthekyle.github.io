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
  anchor: `
    mt-3.25
    leading-[0.775]
    font-sans font-black
    text-xl
    tracking-tighter
  `,
  compiled: `
    flex items-center justify-end
    text-right
    leading-[1.25]
  `,
  button: `
    uppercase
    text-right
  `,
});

export default styles;
