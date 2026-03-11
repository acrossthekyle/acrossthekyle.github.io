import tw from '@/styles';

const grid = `
  absolute left-0 z-0
  w-full h-px
  bg-(--foreground)/7
`;

const styles = tw({
  container: `
    relative
  `,
  chart: `
    relative
    border border-(--foreground)/7
    pt-1
    mb-16
    h-50 w-full
    px-0.25
    select-none
    touch-none
  `,
  grid1: `
    ${grid}
    top-8.5
  `,
  grid2: `
    ${grid}
    top-17
  `,
  grid3: `
    ${grid}
    top-25.5
  `,
  grid4: `
    ${grid}
    top-34
  `,
  grid5: `
    ${grid}
    top-42.5
  `,
  ticks: `
    absolute bottom-0 left-0 right-0 z-9
    grid
  `,
  tick: `
    block
    h-1.5
    border-r-1 border-r-(--background)
  `,
});

export default styles;
