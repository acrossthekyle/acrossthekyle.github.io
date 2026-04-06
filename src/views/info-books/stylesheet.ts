import tw from '@/styles';

const styles = tw({
  highlight: `
    text-(--foreground)/100
  `,
  aside: `
    relative
    mt-10
    leading-[1]
    font-mono
    text-xtiny text-(--foreground)/70 text-left
    uppercase
    animate-flicker-in

    sm:absolute
    sm:top-3
    sm:right-4
    sm:mt-0
    sm:text-right
  `,
  items: `
    columns-sm gap-4
    mt-10
    animate-fade-in
  `,
  item: `
    flex gap-4
    mb-4
    font-mono font-bold
    text-xs text-(--foreground)
    uppercase
    break-inside-avoid-column
  `,
  eyebrow: `
    block
    mt-0.5
    font-normal
    text-xtiny text-(--foreground)/50
    normal-case
  `,
  lid: `
    block
    mt-0.5
    font-normal
    text-xtiny text-(--foreground)/70
  `,
});

export default styles;
