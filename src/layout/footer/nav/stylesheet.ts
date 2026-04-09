import tw from '@/styles';

const styles = tw({
  items: `
    grid grid-cols-8 gap-8
    mt-8 mb-3
    text-(--layout-foreground)
  `,
  link: `
    block
    font-sans font-black
    text-sm
    uppercase
  `,
  eyebrow: `
    block
    font-mono
    text-xtiny text-current/60
  `,
  lid: `
    block
    uppercase
    font-mono
    text-xtiny text-current/50
  `,
});

export default styles;
