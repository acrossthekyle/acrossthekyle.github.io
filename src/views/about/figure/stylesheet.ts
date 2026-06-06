import tw from '@/styles';

const styles = tw({
  image: `
    opacity-90
  `,
  caption: `
    absolute bottom-4 right-4 z-2
    flex flex-col gap-0.5
    leading-[1]
    font-normal
    text-xtiny text-right text-current/50
    uppercase
    tracking-widest
  `,
  overlay: `
    absolute
    inset-0
    z-2
  `,
});

export default styles;
