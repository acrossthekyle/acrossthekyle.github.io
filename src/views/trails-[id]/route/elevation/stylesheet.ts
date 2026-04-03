import tw from '@/styles';

const grid = `
  absolute left-0 z-0
  w-full h-px
  bg-(--foreground)/7
`;

const styles = tw({
  heading: `
    absolute bottom-2.75 left-3.5
    font-mono
    text-xtiny text-(--foreground)
    uppercase
  `,
  eyebrow: `
    block
    text-(--foreground)/50
  `,
  container: `
    relative
    pt-1
    h-[20vh] w-full
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
