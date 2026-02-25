import tw from '@/styles';

const styles = tw({
  container: `
    relative
    border border-(--foreground)/7 border-b-0
    !pt-1
  `,
  chart: `
    h-50 w-full
    px-0.25
    select-none
    touch-none
  `,
  grid1: `
    absolute top-8.5 left-0 z-0
    w-full h-px
    bg-(--foreground)/7
  `,
  grid2: `
    absolute top-17 left-0 z-0
    w-full h-px
    bg-(--foreground)/7
  `,
  grid3: `
    absolute top-25.5 left-0 z-0
    w-full h-px
    bg-(--foreground)/7
  `,
  grid4: `
    absolute top-34 left-0 z-0
    w-full h-px
    bg-(--foreground)/7
  `,
  grid5: `
    absolute top-42.5 left-0 z-0
    w-full h-px
    bg-(--foreground)/7
  `,
});

export default styles;
