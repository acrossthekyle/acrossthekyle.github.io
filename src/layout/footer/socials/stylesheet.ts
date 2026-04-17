import tw from '@/styles';

const styles = tw({
  items: `
    mt-2
    grid grid-cols-4 gap-8
    text-(--layout-foreground)
  `,
  link: `
    block
    font-mono font-normal
    uppercase
    bg-transparent
    duration-300
    rounded-sm

    hover:bg-(--layout-foreground)/3
  `,
  title: `
    leading-[1]
    flex justify-between
    w-full
    font-sans font-medium
    text-xs
  `,
  eyebrow: `
    block
    text-xtiny text-current/75
  `,
  lid: `
    block
    text-xtiny text-current/50
  `,
});

export default styles;
