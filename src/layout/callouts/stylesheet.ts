import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 right-0 z-100
    flex flex-col items-start justify-between
    h-8
    px-3
    bg-(--layout-background)
    font-mono
    text-xtiny
    uppercase
    tracking-wide

    sm:flex-row
    sm:items-center
  `,
  callout: `
    flex gap-1 items-center
  `,
  highlight: `
    font-bold
  `,
  icon: `
    w-2 h-2
    stroke-1 stroke-(--layout-foreground)
  `,
  filled: `
    fill-green-300
    !stroke-0
  `,
});

export default styles;
