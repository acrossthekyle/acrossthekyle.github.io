import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 right-0 z-100
    flex justify-between
    h-8
    px-3.5
    bg-(--layout-background)
    uppercase
    text-xtiny
    font-mono font-bold
    tracking-wide
  `,
  anchor: `
    mt-2.25
    leading-[0.775]
    font-sans font-black
    text-xl
    tracking-tighter
  `,
});

export default styles;
