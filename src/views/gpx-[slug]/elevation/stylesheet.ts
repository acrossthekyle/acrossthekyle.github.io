import tw from '@/styles';

const grid = `
  absolute left-0 z-0
  w-full h-px
  bg-(--foreground)/7
`;

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
});

export default styles;
